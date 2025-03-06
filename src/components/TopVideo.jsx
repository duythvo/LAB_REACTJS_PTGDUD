import React, { useState } from "react";
import { foods } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const TopVideo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-pink-600 text-4xl font-semibold">
        Recips with Video
      </h3>
      <p className="text-sm md:text-xl my-2">
        We have all your Independence Day sweets covered
      </p>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0 relative">
        {foods.slice(0, 4).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/food/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              className="w-full max-h-70 object-cover"
              src={item.image}
              alt="food"
            />
            <div className="flex justify-between text-xl m-2 font-bold">
              <h4>{item.name}</h4>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: 40 }} />
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

export default TopVideo;
