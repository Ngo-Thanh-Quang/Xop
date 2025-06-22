import React from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({token}) => {
  const [list, setList] = React.useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message, {
          autoClose: 1000,
          pauseOnHover:false,
        });
      }
    } catch (error) {
      console.error("Error fetching product list:", error);
      toast.error(
        error.message || "Lấy danh sách sản phẩm thất bại, vui lòng thử lại!",
        {
          autoClose: 1000,
          pauseOnHover:false,
        }
      );
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + `/api/product/remove`, { id }, {headers:{token}});

      if (response.data.success) {
        toast.success(response.data.message || "Xóa sản phẩm thành công", {
          autoClose: 1000,
          pauseOnHover:false,
        });
        await fetchList();
      } else {
        toast.error(response.data.message || "Xóa sản phẩm thất bại, vui lòng thử lại!", {
          autoClose: 1000,
          pauseOnHover:false,
        });
      }

    } catch (error) {
      console.error("Error fetching product list:", error);
      toast.error(
        error.message || "Lấy danh sách sản phẩm thất bại, vui lòng thử lại!",
        {
          autoClose: 1000,
          pauseOnHover:false,
        }
      );
    }
  }

  React.useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-4 main-text text-xl text-center font-bold uppercase">Danh sách sản phẩm</p>
      <div className="flex flex-col gap-2">
        {/* Tiêu đề */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 px-2 py-1 items-center rounded-lg text-sm">
          <b>Hình ảnh</b>
          <b>Tên</b>
          <b>Loại bánh</b>
          <b>Giá</b>
          <b className="text-center">Xóa bánh</b>
        </div>

        {/* Danh sách sản phẩm */}
        {
          list.map((item,index) => (
            <div key={index}>
              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-50 px-2 py-1 items-center rounded-lg text-sm">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>{item.name}</span>
                <span>{item.category}</span>
                <span>{item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
                <div className="flex justify-center gap-2">
                  {/* Add action buttons here, e.g., Edit, Delete */}
                  <button onClick={()=>removeProduct(item._id)} className="text-red-500 cursor-pointer">X</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default List;
