import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { foods } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Recipes = () => {
  const navigate = useNavigate();
  const { addToBox, removeFromBox, recips } = useContext(AppContext);
  const [bookmarked, setBookmarked] = useState({});

  // Cập nhật trạng thái bookmark khi danh sách thay đổi
  useEffect(() => {
    const newBookmarked = {};
    recips.forEach((item) => {
      newBookmarked[item._id] = true;
    });
    setBookmarked(newBookmarked);
  }, [recips]);

  const handleBookmarkClick = (item) => {
    if (bookmarked[item._id]) {
      const confirmRemove = window.confirm(
        "Bạn có muốn xóa khỏi giỏ công thức không?"
      );
      if (confirmRemove) {
        removeFromBox(item._id);
        setBookmarked((prev) => ({ ...prev, [item._id]: false }));
        toast.info(`${item.name} đã được xóa khỏi giỏ công thức!`);
      }
    } else {
      const confirmAdd = window.confirm(
        "Bạn có muốn thêm vào giỏ công thức của bạn không?"
      );
      if (confirmAdd) {
        addToBox(item);
        setBookmarked((prev) => ({ ...prev, [item._id]: true }));
        toast.success(`${item.name} đã được thêm vào giỏ công thức!`);
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 px-5">
      {/* Tiêu đề */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Emma Gonzalez's Recipe Box
        </h1>
      </div>

      {/* Thông tin tác giả */}
      <div className="flex flex-col sm:flex-row gap-5 items-center text-center sm:text-left">
        <img
          src={assets.avt}
          alt="Emma Gonzalez"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
        <div>
          <p className="text-gray-600 leading-relaxed">
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="flex gap-5 justify-center sm:justify-start mt-3">
            <button className="text-red-400 font-semibold">
              6.5k Subscribers
            </button>
            <button className="p-2 px-4 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Danh sách công thức */}
      <div className="flex flex-col items-center justify-items-center mt-5">
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mt-5">
          {foods.slice(0, 4).map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-300 shadow-md"
            >
              {/* Click vào ảnh để điều hướng */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
                onClick={() => {
                  navigate(`/food/${item._id}`);
                  scrollTo(0, 0);
                }}
              />
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <span
                    onClick={() => handleBookmarkClick(item)}
                    className="cursor-pointer"
                  >
                    {bookmarked[item._id] ? (
                      <BookmarkIcon
                        sx={{ fontSize: 30 }}
                        className="text-amber-400"
                      />
                    ) : (
                      <BookmarkBorderOutlinedIcon
                        sx={{ fontSize: 30 }}
                        className="text-gray-400"
                      />
                    )}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{item.time}</p>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={assets.avt}
                    alt="Editor"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-gray-700 font-medium">Võ Thái Duy</p>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  "Cái món này thật tuyệt vời, tôi chưa ăn nó bao giờ, nhưng
                  nhìn thôi đã thấy rất ngon!"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
