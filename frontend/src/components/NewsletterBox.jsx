import React from "react";

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-amber-950">
        Đăng ký ngay và nhận giảm giá 20%
      </p>
      <p className="text-amber-900 mt-3">
        Nhận thông tin mới nhất về sản phẩm, ưu đãi và tin tức từ nhà Xốp.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3">
        <input type="email" className="w-full sm:flex-1 outline-none main-text" placeholder="Nhập email của bạn" required/>
        <button type="submit" className="bg-[#472e0f] text-white cursor-pointer font-bold text-xs text-nowrap px-10 py-4">ĐĂNG KÝ</button>
      </form>
    </div>
  );
};

export default NewsletterBox;
