import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"LIÊN"} text2={"HỆ"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 main-text">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.5415209771348!2d108.23706181415965!3d16.056869046372213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d606a37039%3A0xf85a0dc3c82b3e04!2zMjQwIFBo4bqhbSBD4buxIEzGsOG7o25nLCBBbiBI4bqjaSDEkMO0bmcsIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1750069424898!5m2!1svi!2s"
          className="w-full md:max-w-[600px] h-[400px] rounded-xl"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="flex flex-col justify-center items-start gap-20">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl main-text">Cửa Hàng</p>
            <p className="text-amber-900">
              Địa chỉ: 240 Phạm Cự Lượng, Sơn Trà, Đà Nẵng
            </p>
            <a href="tel:0896480166">
              <p className="text-amber-900">Số điện thoại: 0896 480 166</p>
            </a>
            <a href="mailto:ngothanhquang.dev@gmail.com">
              <p className="text-amber-900">
                Email: ngothanhquang.dev@gmail.com
              </p>
            </a>
          </div>

          <div className="flex flex-col justify-center items-start gap-2">
            <p className="font-semibold text-xl main-text">Tuyển Dụng</p>
            <p className="text-amber-900 mb-4">
              Khám phá các vị trí tuyển dụng trong tháng tới.
            </p>
            <button className="border rounded-xl cursor-pointer border-amber-950 px-8 py-3 text-sm transition-all duration-300 font-bold hover:bg-amber-950 hover:text-white">
              Xem thêm
            </button>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
