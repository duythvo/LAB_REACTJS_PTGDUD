import React, { useContext, useEffect, useState } from "react";
import { foods } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const TopRecips = () => {
  const navigate = useNavigate();
  const { addToBox, removeFromBox, recips } = useContext(AppContext);
  const [bookmarked, setBookmarked] = useState({});

  useEffect(() => {
    const newBookmarked = {};
    recips.forEach((item) => {
      newBookmarked[item._id] = true;
      console.log(item);
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
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-pink-600 text-4xl font-semibold">
        This Summer Recips
      </h3>
      <p className="text-sm md:text-xl my-2">
        We have all your Independence Day sweets covered
      </p>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0 relative">
        {foods.slice(0, 10).map((item) => (
          <div
            key={item._id}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              className="w-full max-h-70 object-cover"
              src={item.image}
              alt="food"
              onClick={() => {
                navigate(`/food/${item._id}`);
                scrollTo(0, 0);
              }}
            />
            <div className="flex justify-between items-center text-xl m-2 font-bold">
              <h4>{item.name}</h4>
              <span
                onClick={() => handleBookmarkClick(item)}
                className="cursor-pointer"
              >
                {bookmarked[item._id] ? (
                  <BookmarkIcon
                    sx={{ fontSize: 40 }}
                    className="text-amber-400"
                  />
                ) : (
                  <BookmarkBorderOutlinedIcon
                    sx={{ fontSize: 40 }}
                    className="text-gray-400"
                  />
                )}
              </span>
            </div>
            <p className="bg-gray-100 text-gray-800 max-w-20 rounded-2xl text-center mb-5 ml-2">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRecips;
