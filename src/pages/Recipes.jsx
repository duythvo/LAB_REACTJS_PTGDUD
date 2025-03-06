import React from "react";
import { assets } from "../assets/assets";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { foods } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold">Emma Gonzalez's Recipe Box</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 items-center ">
        <img src={assets.avt} alt="" className="w-30 rounded-full" />
        <div className="">
          <h1>
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </h1>
          <div className="flex gap-5 justify-center sm:justify-start">
            <button className="text-red-400">6.5k subscribes</button>
            <button className="p-2 bg-red-500 text-white font-medium rounded-xl">
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-items-center mt-5">
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-5 mt-5 justify-items-center">
          {foods.slice(0, 4).map((item, index) => (
            <div
              onClick={() => {
                navigate("/Food/" + item._id);
                scrollTo(0, 0);
              }}
              key={index}
              className="justify-center w-full bg-white border border-gray-200 flex overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 rounded-2xl flex-col "
            >
              <img
                src={item.image}
                alt=""
                className="rounded w-full h-40 object-cover"
              />
              <div>
                <div className="flex justify-between p-2">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <BookmarkBorderOutlinedIcon sx={{ fontSize: 30 }} />
                </div>
                <p className="text-sm p-2">{item.time}</p>
                <div className="flex items-center gap-3 mt-5 p-2">
                  <img src={assets.avt} alt="" className="w-10 rounded-full" />
                  <p>Võ Thái Duy</p>
                </div>
                <p className="text-sm mt-2 max-w-80 word-wrap:break-word p-2">
                  Cái món này thật tuyệt với, tao chưa an nó bao giờ, thiệt sự
                  rất ngon
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
