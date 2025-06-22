import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = React.useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    toast.success("Đăng xuất thành công!", {
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
    });
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <div className="text-4xl main-text Agbalumo">XỐP</div>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to={"/"}
          className="main-text flex flex-col items-center gap-1"
        >
          <li>TRANG CHỦ</li>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-50 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="main-text flex flex-col items-center gap-1"
        >
          <li>SẢN PHẨM</li>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-50 hidden" />
        </NavLink>
        <NavLink
          to={"/about"}
          className="main-text flex flex-col items-center gap-1"
        >
          <li>GIỚI THIỆU</li>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-50 hidden" />
        </NavLink>
        <NavLink
          to={"/contact"}
          className="main-text flex flex-col items-center gap-1"
        >
          <li>LIÊN HỆ</li>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-50 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <img
            onClick={() => token ? null : navigate("/login")}
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          {token && <div className="absolute right-0 pt-4 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white main-text rounded">
              <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-amber-700">Đơn Hàng</p>
              <p
                onClick={logout}
                className="cursor-pointer hover:text-amber-700"
              >
                Đăng Xuất
              </p>
            </div>
          </div>}
        </div>

        <Link to={"/cart"} className="relative">
          <img
            src={assets.cart_icon}
            alt=""
            className="w-5 min-w-5 cursor-pointer"
          />
          <span className="absolute -top-2 -right-2 bg-[#472e0f] text-white text-[9px] rounded-full px-1">
            {getCartCount()}
          </span>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#fffdf9] transition-all duration-300 ease-in-out ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col main-text">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
          </div>
          <NavLink
            to={"/"}
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-gray-300"
          >
            TRANG CHỦ
          </NavLink>
          <NavLink
            to={"/collection"}
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-gray-300"
          >
            SẢN PHẨM
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-gray-300"
          >
            GIỚI THIỆU
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-gray-300"
          >
            LIÊN HỆ
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
