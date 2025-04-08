import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const YourRecipsBox = () => {
  const { recips, removeFromBox } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRemove = (id, name) => {
    const confirmRemove = window.confirm(
      `Bạn có muốn xóa ${name} khỏi danh sách không?`
    );
    if (confirmRemove) {
      removeFromBox(id);
      toast.info(`${name} đã được xóa khỏi danh sách!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-pink-200 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-pink-600 text-center">
          Your Recipe Box
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Danh sách công thức bạn đã lưu
        </p>

        {recips.length === 0 ? (
          <p className="text-center text-gray-500 mt-6 text-lg">
            🥲 Chưa có công thức nào trong giỏ!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {recips.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover cursor-pointer"
                  onClick={() => {
                    navigate(`/food/${item._id}`);
                    scrollTo(0, 0);
                  }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.time} </p>
                  <button
                    onClick={() => handleRemove(item._id, item.name)}
                    className="mt-3 flex items-center gap-2 text-red-500 hover:text-red-700 transition-all cursor-pointer"
                  >
                    <DeleteOutlineIcon />
                    <span>Xóa khỏi giỏ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourRecipsBox;
