import React from "react";
import { assets } from "../assets/assets";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import { NavLink } from "react-router-dom";

const Food = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-5 mx-2 sm:mx-[10%] gap-10">
        {/**Left section*/}
        <div className="flex flex-col gap-5 lg:w-[100%] xl:w-2/3">
          <h1 className="font-bold text-2xl">
            How to make a Strawberry Shortcake
          </h1>
          <p className="text-sm">
            It seems like there may be a misunderstanding. If you're asking how
            a user can make a Strawberry Shortcake, the process would be
            identical to the recipe I shared earlier. It involves preparing the
            strawberries, making the shortcakes, preparing whipped cream, and
            finally assembling the shortcake
          </p>
          <div className=" p-5 border-gray-300 rounded-lg border-2 gap-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <img className="rounded-full w-10" src={assets.avt} alt="" />
                <h1>Võ Thái Duy</h1>
              </div>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="mt-5">
              <table className="overflow-x-auto min-w-full table-fixed text-sm ">
                <thead>
                  <tr className="">
                    <th className="p-2">Time</th>
                    <th className="p-2">Notes</th>
                    <th className="p-2">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">45 minutes</td>
                    <td className="text-center">352 community notes</td>
                    <td className="text-center">
                      <ul className="flex justify-center">
                        <StarPurple500OutlinedIcon className="text-amber-300" />
                        <StarPurple500OutlinedIcon className="text-amber-300" />
                        <StarPurple500OutlinedIcon className="text-amber-300" />
                        <StarPurple500OutlinedIcon className="text-amber-300" />
                        <StarPurple500OutlinedIcon className="text-gray-200" />
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-5 border-gray-300 rounded-lg border-2 gap-5">
            <ul className="flex flex-col gap-2">
              <li>- 1 1/2 cups all-purpose flour</li>
              <li>- 1/2 cup sugar</li>
              <li>- 1 tablespoon baking powder</li>
              <li>- 1/2 teaspoon salt</li>
              <li>- 1/2 cup butter, cold</li>
              <li>- 1 cup heavy cream</li>
              <li>- 1 teaspoon vanilla extract</li>
              <li>- 1 pint strawberries</li>
              <li>- 1/4 cup sugar</li>
              <li>- 1 cup heavy cream</li>
              <li>- 1/4 cup powdered sugar</li>
              <li>- 1 teaspoon vanilla extract</li>
            </ul>
            <button className="bg-pink-700 text-white font-bold p-2 w-full rounded-xl mt-5">
              + Add to Your Grocery List
            </button>
          </div>
        </div>
        {/**Right section*/}
        <div>
          <img src={assets.food1} alt="" />
          <h1>Step1</h1>
          <p>ahahahhahahahâhhahâhahaha</p>
          <img src={assets.food2} alt="" />
        </div>
      </div>
      <div className="relative mx-2 sm:mx-[10%]">
        <h1 className="font-bold text-2xl mt-5">Cooking note</h1>
        <textarea
          name=""
          id=""
          className="border w-full p-2 h-32 rounded-xl mt-5"
          placeholder="Your opinion the article"
        ></textarea>
        <button className="p-2 bg-pink-700 text-white px-5 rounded-2xl top-30 right-15 absolute">
          Send
        </button>
      </div>
      <div>
        <ul className="flex gap-5 mx-2 sm:mx-[10%] mt-5">
          <NavLink to="/">
            <li className="py-1 whitespace-nowrap">AllNote(32)</li>
            <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
          </NavLink>
          <NavLink to="/">
            <li className="py-1 whitespace-nowrap">Most Helpful</li>
            <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
          </NavLink>
          <NavLink to="/">
            <li className="py-1 whitespace-nowrap">Private</li>
            <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Food;
