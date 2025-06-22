import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//route cho đăng nhập
const loginUser = async(req,res) =>{

    try {
        const { email, password } = req.body;
        // Kiểm tra xem người dùng có tồn tại không
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({success: false, message: "Người dùng không tồn tại!" });
        }
        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            res.json({success: true, token });
        }
        else {
            res.json({success: false, message: "Mật khẩu không chính xác!" });
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message });
    }

}

//route cho đăng ký
const registerUser = async(req,res) =>{

   try {
    const  { name, email, password } = req.body;
    // Kiểm tra xem người dùng đã tồn tại chưa
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({success: false, message: "Người dùng đã tồn tại!" });
    }

    // Xác thực thông tin người dùng
    if (!validator.isEmail(email)) {
      return res.json({success: false, message: "Vui lòng điền email chính xác!" });
    }
    if (password.length < 8) {
      return res.json({success: false, message: "Mật khẩu phải có ít nhất 8 ký tự!" });
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({success: true, token });

   } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message });
   }

}

//route cho admin
const adminLogin = async(req,res) =>{
  try {
    const { email, password } = req.body;
    if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({success: true, token });
    }else {
      res.json({success: false, message: "Email hoặc mật khẩu không chính xác!" });
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message });
    
  }
}

export { loginUser, registerUser, adminLogin };