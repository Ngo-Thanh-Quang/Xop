import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        const {token} = req.headers
        if (!token) {
            return res.json({ success: false, message: "Bạn chưa đăng nhập!" });
        }
        // Verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Bạn không có quyền truy cập!" });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
} 

export default adminAuth;