import { div } from "framer-motion/client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { foods } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const filtersData = {
  type: [
    "Pan-fried",
    "Stir-fried",
    "Grilled",
    "Roasted",
    "Sauteed",
    "Baked",
    "Steamed",
    "Stewed",
  ],
  rating: [1, 2, 3, 4, 5],
};

const SearchInfo = () => {
  const [selectedTypes, setSelectedTypes] = useState(["Grilled", "Roasted"]);
  const [time, setTime] = useState([30, 50]);
  const [selectedRatings, setSelectedRatings] = useState([3, 4, 5]);
  const [isOpen, setIsOpen] = useState({
    type: true,
    time: true,
    rating: true,
  });
  const [search, setSearch] = React.useState("");

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const toggleDropdown = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleRating = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const handleChange = (event, newTime) => {
    setTime(newTime);
  };

  const valueText = (value) => `${value} minutes`;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 w-full md:flex-col lg:flex-row items-center md:items-center lg:items-start">
      {/**Left */}
      <div className="w-full md:w-[40%] bg-white border-1 border-gray-100 shadow-md rounded-md mt-5 max-w-[300px] max-h-[700px]">
        <h2 className="text-lg font-bold flex items-center mb-2 m-4">
          <span className="mr-2">☰</span> FILTERS
        </h2>

        {/* Type Filter */}
        <div className="m-4">
          <h3
            className="font-bold mb-2 flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown("type")}
          >
            Type {isOpen.type ? <FaChevronUp /> : <FaChevronDown />}
          </h3>
          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              isOpen.type ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-5 border-b-gray-400">
              {filtersData.type.map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="accent-pink-500"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-1 border-gray-200 shadow" />

        {/* Time Filter with Range Slider */}
        <div className="m-4">
          <h3
            className="font-bold mb-2 flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown("time")}
          >
            Time {isOpen.time ? <FaChevronUp /> : <FaChevronDown />}
          </h3>
          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              isOpen.time ? "max-h-100" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2 mt-5">
              <Box className="w-[250px] flex pl-5 accent-pink-400">
                <Slider
                  getAriaLabel={() => "Time range"}
                  value={time}
                  onChange={handleChange}
                  valueLabelFormat={valueText}
                  min={0}
                  max={120}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#fbf5f6", // Màu của thanh trượt (thumb)
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#e04468", // Màu của đường thanh trượt (track)
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#e0e0e0", // Màu của rail (phần dưới thanh trượt)
                    },
                  }}
                />
              </Box>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{time[0]} phút</span>
                <span>{time[1]} phút</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-200 shadow" />

        {/* Rating Filter */}
        <div className=" m-4">
          <h3
            className="font-bold mb-2 flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown("rating")}
          >
            Rating {isOpen.rating ? <FaChevronUp /> : <FaChevronDown />}
          </h3>
          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              isOpen.rating ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="space-y-4">
              {filtersData.rating.map((rating) => (
                <label key={rating} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => toggleRating(rating)}
                    className="accent-pink-500 "
                  />
                  <div className="flex">
                    {filtersData.rating.map((star) => (
                      <FaStar
                        key={star}
                        className={
                          (star <= rating
                            ? "text-yellow-400"
                            : "text-gray-300") + " text-lg ml-3"
                        }
                      />
                    ))}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-200 shadow" />
        {/* Apply Button */}
        <div className="flex justify-center">
          <button className="mt-2 my-2 mx-2 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 cursor-pointer">
            Apply
          </button>
        </div>
      </div>
      {/**Right */}
      <div className="mt-5 w-full">
        <div className="flex justify-between mx-5">
          <h3 className="font-bold text-3xl">Salad(32)</h3>
          <form class="max-w-sm ">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 px-10"
            >
              <option selected>A-Z</option>
              <option value="US">Z-A</option>
            </select>
          </form>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0 relative">
          {foods.slice(0, 10).map((item, index) => (
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
    </div>
  );
};

export default SearchInfo;
