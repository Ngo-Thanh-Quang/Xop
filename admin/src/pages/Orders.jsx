import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = React.useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + "/api/order/status", {orderId, status:event.target.value}, { headers: { token } });
      if(response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error(response.data.message);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <p className="mb-4 main-text text-xl text-center font-bold uppercase">Quản lý đơn hàng</p>
      {orders.map((order, index) => (
        <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-2 text-xs sm:text-sm main-text" key={index}>
          <img className="w-12" src={assets.parcel_icon} alt="" />
          <div>
            <div>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return (
                    <p className="py-0.5" key={index}>
                      {item.name} x {item.quantity} <span>{item.size}</span>
                    </p>
                  );
                } else {
                  return (
                    <p className="py-0.5" key={index}>
                      {item.name} x {item.quantity} <span>{item.size}</span>,
                    </p>
                  );
                }
              })}
            </div>
            <p className="mt-2 mb-1 font-medium">{order.address.lastName + " " + order.address.firstName}</p>
            <div>
              <p>
                {order.address.street +
                  ", " +
                  order.address.district +
                  ", " +
                  order.address.city}
              </p>
            </div>
            <p>{order.address.phone}</p>
          </div>
          <div>
            <p className="text-xs sm:text-[15px]">Số lượng sản phẩm: {order.items.length}</p>
            <p className="mt-2">Phương thức: {order.paymentMethod}</p>
            <p>Thanh toán: {order.payment ? 'Đã thanh toán' : 'Chưa thanh toán'}</p>
            <p>Ngày: {new Date(order.date).toLocaleDateString()}</p>
          </div>
          <p className="text-sm sm:text-[15px]">{order.amount.toLocaleString("vi-VN")} VNĐ</p>
          <select onChange={(event)=>statusHandler(event, order._id)} value={order.status} className="p-2 font-semibold">
            <option value="Đang xử lý">Đang xử lý</option>
            <option value="Đang đóng gói">Đang đóng gói</option>
            <option value="Đang giao hàng">Đang giao hàng</option>
            <option value="Đã giao hàng">Đã giao hàng</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;
