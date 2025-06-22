import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = React.useState([]);

  const loadOderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"ĐƠN HÀNG"} text2={"CỦA TÔI"} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t main-text flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-center gap-6 text-sm">
              <img src={item.image} alt="" className="w-16 sm:w-20" />
              <div>
                <p className="sm:text-base font-medium main-text">
                  {item.name}
                </p>
                <div className="flex items-center gap-3 mt-1 text-base main-text">
                  <p>
                    {item.price.toLocaleString("vi-VN")} {currency}
                  </p>
                  <p>Số lượng: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-1">
                  Ngày:{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>

                <p className="mt-1">
                  Phương thức thanh toán:{" "}
                  <span className="text-gray-400">
                    {item.paymentMethod === "COD" ? "Thanh toán khi nhận hàng" : item.paymentMethod}
                  </span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button onClick={loadOderData} className="border border-gray-300 cursor-pointer px-4 py-2 text-sm font-medium rounded-sm">
                Kiểm Tra
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
