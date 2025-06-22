import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = React.useContext(ShopContext);
  const [productData, setProductData] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [size, setSize] = React.useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-1 pt-10 transition-opacity ease-in-out duration-500 opacity-100">
      {/*Dữ liệu của sản phẩm*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer`}
                onClick={() => setImage(img)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-1 main-text">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-1">
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-2 text-xl font-medium main-text">
            {productData.price.toLocaleString("vi-VN")} {currency}
          </p>
          <p className="mt-2 main-text md:w-full">{productData.description}</p>
          <div className="flex flex-col gap-4 my-4">
            <p className="main-text font-medium">Chọn kính cỡ</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-white border-gray-300 cursor-pointer hover:bg-amber-950 hover:text-white transition-all ease-in-out duration-300 ${
                    item === size ? "border-orange-950" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="border border-orange-950 cursor-pointer py-3 px-8 rounded-md hover:bg-amber-950 hover:text-amber-50 transition-all ease-in-out duration-300 mt-4">
            THÊM VÀO GIỎ HÀNG
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>
              Không sử dụng chất bảo quản, đảm bảo vệ sinh an toàn thực phẩm.
            </p>
            <p>Cam kết giống 100% mẫu mã và kích cỡ.</p>
          </div>
        </div>
      </div>
      {/*Đánh giá sản phẩm*/}
      <div className="mt-10">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm text-gray-500">
            Mô tả
          </b>
          <p className="border border-gray-300 px-5 py-3 text-sm text-gray-500">
            Đánh giá (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>
            {productData.description
              ? productData.description
              : "Không có mô tả cho sản phẩm này."}
          </p>
        </div>
      </div>

      {/*Sản phẩm liên quan*/}
      <RelatedProducts category={productData.category} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
