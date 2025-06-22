import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = React.useState('Đăng Nhập');
  const {token, setToken, navigate, backendUrl} = React.useContext(ShopContext);
  
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    try {
      if (currentState === 'Đăng Ký') {

        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password
        });
        
        if(response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("Đăng ký thành công!", {
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
          });
        } else {
          console.error("Đăng ký không thành công:", response.data.message);
          toast.error(response.data.message, {
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
          });
        }

      } else {
        const reponse = await axios.post(backendUrl + '/api/user/login', {email, password});

        if(reponse.data.success) {
          setToken(reponse.data.token);
          localStorage.setItem('token', reponse.data.token);
          toast.success("Đăng nhập thành công!", {
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
          });
        } else {
          console.error("Đăng nhập không thành công:", reponse.data.message);
          toast.error(reponse.data.message, {
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
          });
        }
      }

    } catch (error) {
      console.error("Lỗi khi đăng nhập/đăng ký:", error);
      toast.error(error.message, {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
      });
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 main-text'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-4xl">{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Đăng Nhập' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Tên' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Mật khẩu' required/>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Quên mật khẩu?</p>
        {
          currentState === 'Đăng Nhập' ? 
          <p className="cursor-pointer" onClick={() => setCurrentState('Đăng Ký')}>Chưa có tài khoản?</p> : 
          <p className="cursor-pointer" onClick={() => setCurrentState('Đăng Nhập')}>Đã có tài khoản?</p>
        }
      </div>
      <button type='submit' className='border border-amber-950 hover:bg-amber-950 hover:text-white transition-all duration-300 px-8 py-2 mt-4 rounded-2xl font-bold cursor-pointer'>{currentState === 'Đăng Nhập' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}</button>
    </form>
  )
}

export default Login