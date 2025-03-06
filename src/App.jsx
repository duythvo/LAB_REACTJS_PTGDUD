import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatToCook from "./pages/WhatToCook";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import Occasions from "./pages/Occasions";
import AboutUs from "./pages/AboutUs";
import WelcomeModal from "./components/WelcomeModal";
import Food from "./pages/Food";
import Subcribe from "./pages/Subcribe";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[5%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-to-cook" element={<WhatToCook />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/subscribe" element={<Subcribe />} />
        <Route path="/food/:foodId" element={<Food/>}/>
      </Routes>
      <Footer />
      <WelcomeModal />
    </div>
  );
};

export default App;
