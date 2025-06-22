import axios from "axios";
import React from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+'/api/user/admin', {email, password});
            if(response.data.success) {
                setToken(response.data.token);
                toast.success("Đăng nhập thành công", {
                  autoClose: 1000,
                  pauseOnHover: false,
                });
            } else {
                toast.error(response.data.message || "Đăng nhập thất bại, vui lòng thử lại!", {
                  autoClose: 1000,
                  pauseOnHover: false,
                });
            }
        } catch (error) {
            console.error("Login failed:", error);
            toast.error("Đăng nhập thất bại, vui lòng thử lại!", {
                  autoClose: 1000,
                  pauseOnHover: false,
                });
            
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md main-text">
        <h1 className="text-2xl font-bold mb-4 main-text">Xốp - Admin</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium main-text mb-2">Email</p>
            <input
                onChange={(e) => setEmail(e.target.value)} value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="Email của bạn"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium main-text mb-2">Mật khẩu</p>
            <input
                onChange={(e) => setPassword(e.target.value)} value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Mật khẩu của bạn"
              required
            />
          </div>
          <button className="mt-2 w-full py-2 px-4 rounded-md border border-amber-950 cursor-pointer hover:bg-amber-950 hover:text-white transition-all duration-300 font-medium" type="submit">ĐĂNG NHẬP</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
