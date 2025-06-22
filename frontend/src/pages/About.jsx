import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t font-bold">
        <Title text1={"VỀ"} text2={"XỐP"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded-2xl"
          src={assets.about}
          alt=""
        />
        <div className="flex flex-col justify-center gap-8 md:w-2/4 main-text">
          <p>
            Xốp - Tiệm bánh mùa hè khởi đầu là một cơ sở sản xuất bánh mì nhỏ
            với quy mô gia đình vào đầu năm 2009. Trải qua hơn 15 năm xây dựng
            và phát triển, chúng mình đã xây dựng được chuỗi hệ thống cửa hàng
            với hơn 70 cửa hàng bánh mì, bánh ngọt lớn nhỏ trải khắp thành phố
            Đà Nẵng.
          </p>
          <p>
            Là thương hiệu được biết đến với những sản phẩm chất lượng và ngon
            miệng từ bánh mì, bánh ngọt, bánh kem đến các sản phẩm khác như
            hamburger, sandwich,... Cùng với tinh thần ham học hỏi, trách nhiệm,
            chúng mình đã, đang và sẽ luôn mang đến cho khách hàng những ổ bánh
            mì nóng giòn, những chiếc bánh thơm ngon, dinh dưỡng nhất.
          </p>
          <div className="flex flex-col gap-2">
            <b>Sứ mệnh</b>
          <p>
            Sứ mệnh của chúng mình là lưu giữ những giá trị truyền thống của
            Bánh mì Việt Nam nói chung và Bánh mì Đà Nẵng nói riêng, những điều
            làm cho Bánh mì trở thành món ăn hấp dẫn nhất hành tinh.
          </p>
          </div>
        </div>
      </div>

      <div className="text-2xl py-4">
        <Title text1={"GIÁ TRỊ"} text2={"CỐT LÕI"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 border-gray-300 md:px-16 py-8 sm:py-12 flex flex-col gap-5">
          <p className="text-gray-500">
            Tạo ra sản phẩm tươi, mới, chất lượng và tốt cho sức khỏe.
          </p>
        </div>
        <div className="border px-10 border-gray-300 md:px-16 py-8 sm:py-12 flex flex-col gap-5">
          <p className="text-gray-500">
            Luôn lắng nghe mọi phản hồi từ Quý khách hàng để mang đến những trải
            nghiệm dịch vụ và sản phẩm tốt nhất.
          </p>
        </div>
        <div className="border px-10 border-gray-300 md:px-16 py-8 sm:py-12 flex flex-col gap-5">
          <p className="text-gray-500">
            Xây dựng văn hóa đội ngũ nhân viên đầy năng lượng, nhiệt tình và sáng tạo.
          </p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  );
};

export default About;
