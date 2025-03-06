import React from "react";
import { assets } from "../assets/assets";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const Subcribe = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      {/*Top*/}
      <div className="w-full lg:w-2/3 mt-5 gap-5 flex flex-col justify-center items-center lg:flex-row md:justify-between">
        {/*Left*/}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">
            This recipe is exclusively available to subcribe
          </h3>
          <h1 className="text-3xl font-bold text-pink-700">
            Join now to access effortless, hassle-free recips
          </h1>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-5">
              <TaskAltIcon className="text-amber-300" />
              <h2>20,000 recips to suit all tastes and skill levels</h2>
            </li>
            <li className="flex gap-5">
              <TaskAltIcon className="text-amber-300" />
              <h2>Filter for diets, cook times and more</h2>
            </li>
            <li className="flex gap-5">
              <TaskAltIcon className="text-amber-300" />
              <h2>Personal Recipe Box for favorites</h2>
            </li>
            <li className="flex gap-5">
              <TaskAltIcon className="text-amber-300" />
              <h2>Gain experience access to our subcriber-only mobie app</h2>
            </li>
          </ul>

          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold ">0.25USD /Week</h1>
            <p>Billd as $1 every 4 weeks for the first years</p>
          </div>
          <div className="flex flex-col gap-5">
            <button className="bg-red-500 p-3 text-amber-50 font-bold rounded-xl">
              Subscribe Now
            </button>
            <button className="text-red-500">Cancel or Pause anytime</button>
          </div>
        </div>
        {/*Right*/}
        <img
          src={assets.food10}
          alt=""
          className="w-full lg:w-[50%] lg:h-[30%] object-cover rounded-lg"
        />
      </div>
      {/*Center*/}
      <div className="flex flex-col justify-items-center gap-5 items-center">
        <h1 className="text-red-400 font-bold text-2xl">
          An All Access subscription includes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border border-gray-200 p-5 rounded-xl flex flex-col items-center justify-items-center gap-2">
            <h1 className="font-bold text-lg">Cooking</h1>
            <p className="text-center">
              Enjoy Recipes, advice and inspiration for any occasion
            </p>
          </div>
          <div className="border border-gray-200 p-5 rounded-xl flex flex-col items-center justify-items-center gap-2">
            <h1 className="font-bold text-lg">Cooking</h1>
            <p className="text-center">
              Enjoy Recipes, advice and inspiration for any occasion
            </p>
          </div>
          <div className="border border-gray-200 p-5 rounded-xl flex flex-col items-center justify-items-center gap-2">
            <h1 className="font-bold text-lg">Cooking</h1>
            <p className="text-center">
              Enjoy Recipes, advice and inspiration for any occasion
            </p>
          </div>
          <div className="border border-gray-200 p-5 rounded-xl flex flex-col items-center justify-items-center gap-2">
            <h1 className="font-bold text-lg">Cooking</h1>
            <p className="text-center">
              Enjoy Recipes, advice and inspiration for any occasion
            </p>
          </div>
        </div>
      </div>
      {/*Bottom*/}
      <div className="flex flex-col gap-5 items-center justify-items-center">
        <img src={assets.logo} alt="" className="w-50" />
        <h1 className="text-center text-3xl font-bold text-red-400">
          Subcribe to Chefity Cooking only
        </h1>
        <p className="text-center">
          Enjoy thousands of delicious recipes for every taste, plus advice and
          inspiration daily.
        </p>
        <div className="flex flex-col gap-5">
          {/* <input
            type="radio"
            name="1"
            className="border p-2 rounded-xl px-5 border-gray-400 "
          >
            $2/month (Billed every 4 weeks)
          </input> */}
          <div className="flex gap-2 border p-2 rounded-xl px-5 border-gray-400 ">
            <input type="radio" name="1" className="accent-red-400" />
            <label>$2/month (Billed every 4 weeks)</label>
          </div>
          <div className="flex gap-2 border p-2 rounded-xl px-5 border-gray-400 ">
            <input type="radio" name="1" className="accent-red-400 " />
            <label>$20/year (Billed one annually)</label>
          </div>

          <button className="bg-red-400 text-white font-bold p-2 rounded-xl">
            Subscribe Now
          </button>
          <button className="text-red-400">Cancel or Pause anytime</button>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
