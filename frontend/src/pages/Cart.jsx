import React, { use, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = React.useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"GIỎ HÀNG"} text2={"CỦA TÔI"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-b main-text grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <Link to={`/product/${item._id}`}>
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image}
                    className="w-16 sm:w-20"
                    alt=""
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {productData.price.toLocaleString("vi-VN")} {currency}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-white-50">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border border-gray-300 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-amber-950 text-white text-sm my-8 px-8 py-3 hover:bg-gray-100 font-medium hover:text-amber-950 transition cursor-pointer duration-300"
            >
              THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
