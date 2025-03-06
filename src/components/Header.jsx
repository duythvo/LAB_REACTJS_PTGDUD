import React from "react";
import { assets } from "../assets/assets";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Header = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-auto rounded mt-5 object-cover"
        src={assets.background_header}
        alt="Header background"
      />

      <div className="flex-col items-center justify-items-center absolute top-1/5 left-1/20 lg:top-1/4 lg:left-1/9 md:w-80 bg-white p-4 rounded shadow-lg lg:block text-center hidden">
        <h3 className="text-2xl font-bold text-pink-700 mb-5">Salad Caprese</h3>
        <p className="text-sm mb-10">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs,
          olive oil, and balsamic vinegar create a refreshing dish for lunch or
          appetizer.
        </p>

        <img
          className="w-16 h-16 rounded-full mb-2"
          src={assets.avt}
          alt="Avt"
        />

        <p className="font-semibold">Salad Caprese</p>
        <button className="mt-4 bg-pink-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Visit now <ArrowRightAltIcon />
        </button>
      </div>

      {/* Text nằm ở trên ảnh */}
    </div>
  );
};

export default Header;
