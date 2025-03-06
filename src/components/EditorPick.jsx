import React from "react";
import { assets } from "../assets/assets";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { foods } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const EditorPick = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-items-center mt-5">
      <h3 className="text-pink-600 text-4xl font-semibold">Editor's pick</h3>
      <p className="text-sm md:text-xl my-2">
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>
      <div className="w-full md:w-2/3 grid md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]  gap-5 mt-5 justify-items-center">
        {foods.slice(0, 4).map((item, index) => (
          <div
            onClick={() => {
              navigate("/Food/" + item._id);
              scrollTo(0, 0);
            }}
            key={index}
            className="justify-center w-full bg-white border border-gray-200 p-2 flex overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
          >
            <img
              src={item.image}
              alt=""
              className="rounded m-2 w-40 h-40 object-cover"
            />
            <div>
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <BookmarkBorderOutlinedIcon sx={{ fontSize: 30 }} />
              </div>
              <p className="text-sm">{item.time}</p>
              <div className="flex items-center gap-3 mt-5">
                <img src={assets.avt} alt="" className="w-10 rounded-full" />
                <p>Võ Thái Duy</p>
              </div>
              <p className="text-sm mt-5 max-w-80 word-wrap:break-word">
                Cái món này thật tuyệt với, tao chưa an nó bao giờ, thiệt sự rất
                ngon
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorPick;
