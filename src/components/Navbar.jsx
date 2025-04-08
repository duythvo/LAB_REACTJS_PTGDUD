import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const openSubscribe = () => {
    navigate("/subscribe");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/search");
    }
  };

  const handleBackHome = () => {
    navigate("/");
  };

  const openYourRecips = () => {
    navigate("/your-recips");
  }

  return (
    <div className="flex items-center justify-between border-b border-b-gray-300 text-sm gap-5">
      <div className="flex items-center gap-5">
        <img
          onClick={handleBackHome}
          src={assets.logo}
          alt=""
          className="w-44 cursor-pointer"
        />
        <div className="hidden md:flex items-start w-80">
          <img src={assets.loupe} alt="" className="w-4 absolute mt-4.5 ml-2" />
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="w-full bg-gray-200 p-2 rounded mt-2 pl-8"
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      <ul className="hidden lg:flex items-start gap-5">
        <NavLink to="/">
          <li className="py-1 whitespace-nowrap ">What to cook</li>
          <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/recipes">
          <li className="py-1 whitespace-nowrap ">Recipes</li>
          <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/ingredients">
          <li className="py-1 whitespace-nowrap ">Ingredients</li>
          <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/occasions">
          <li className="py-1 whitespace-nowrap ">Occasions</li>
          <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/about-us">
          <li className="py-1 whitespace-nowrap ">About us</li>
          <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-5">
      <button
          className="bg-amber-200 text-black mt-2 p-2 rounded-md w-25 md:block whitespace-nowrap cursor-pointer font-semibold "
          onClick={openYourRecips}
        >
          Your Recips
        </button>
        <button
          className="bg-red-100 text-red-600 mt-2 p-2 rounded-md w-20 md:block whitespace-nowrap cursor-pointer font-semibold"
          onClick={openLogin}
        >
          Login
        </button>
        <button
          className="bg-red-600 text-white mt-2 p-2 w-20 rounded-md md:block whitespace-nowrap cursor-pointer font-semibold"
          onClick={openSubscribe}
        >
          Subscribe
        </button>
        {/* <img src={assets.avt} alt="" className="w-10 rounded-full mt-2" /> */}
      </div>
      {showLogin && <Login closeLogin={closeLogin} />}
    </div>
  );
};

export default Navbar;
