import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { foods } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const EditorPick = () => {
  const navigate = useNavigate();
  const { addToBox, removeFromBox, recips } = useContext(AppContext);
  const [bookmarked, setBookmarked] = useState({});

  
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
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-pink-600 text-4xl font-semibold">Editor's Pick</h3>
      <p className="text-sm md:text-xl my-2">
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>
      <div className="w-full md:w-2/3 grid md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-5 mt-5 justify-items-center">
        {foods.slice(0, 4).map((item) => (
          <div
            key={item._id}
            className="justify-center w-full bg-white border border-gray-200 p-2 flex overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded m-2 w-40 h-40 object-cover"
              onClick={() => {
                navigate(`/Food/${item._id}`);
                scrollTo(0, 0);
              }}
            />
            <div className="flex-1">
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
              <p className="text-sm">{item.time}</p>
              <div className="flex items-center gap-3 mt-5">
                <img
                  src={assets.avt}
                  alt="Editor Avatar"
                  className="w-10 rounded-full"
                />
                <p>Võ Thái Duy</p>
              </div>
              <p className="text-sm mt-5 max-w-80 break-words">
                Cái món này thật tuyệt vời, tôi chưa ăn nó bao giờ, nhưng nhìn
                thôi đã thấy rất ngon!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorPick;
