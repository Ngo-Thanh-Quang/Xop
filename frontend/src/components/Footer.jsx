import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="text-4xl main-text Agbalumo mb-5">XỐP</div>
          <p className="w-full md:w-2/3 main-text">
            Tạo ra sản phẩm tươi, mới, chất lượng và tốt cho sức khỏe. <br />{" "}
            Phản hồi nhanh những mong muốn của khách hàng. <br />
            Lắng nghe để thấu hiểu nhận xét từ fan Xây dựng văn hóa đội ngũ nhân
            viên đầy năng lượng, nhiệt tình và sáng tạo.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 main-text">HỖ TRỢ</p>
          <ul className="flex flex-col gap-1 main-text">
            <Link to={"/"}>
              <li>Trang chủ</li>
            </Link>
            <Link to={"/about"}>
              <li>Giới thiệu</li>
            </Link>
            <Link to={"/cart"}>
              <li>Giỏ hàng</li>
            </Link>
            <Link to={"/login"}>
              <li>Thành viên</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">LIÊN HỆ</p>
          <ul className="flex flex-col gap-1 main-text">
            <a href="tel:0896480166">
              <li>0896 480 166</li>
            </a>
            <a href="mailto:ngothanhquang.dev@gmail.com">
              <li>ngothanhquang.dev@gmail.com</li>
            </a>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center main-text">
          Copyright © 2025 Xốp - Tiệm bánh mùa hè. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
