import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center p-10 bg-gradient-to-r from-blue-900 to-purple-900 text-white min-h-[600px] w-full rounded-lg mt-5 shadow-xl overflow-hidden">
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl -top-10 -left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl bottom-10 right-10"></div>

      <div className="text-center md:text-left md:w-1/2 space-y-4 z-10">
        <h1 className="text-4xl font-bold">
          Hi, <span className="text-amber-400 animate-pulse">I'm Duy Vo</span>
        </h1>
        <h3 className="text-2xl font-semibold text-gray-200">Web Developer</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a web developer with a passion for creating beautiful and
          responsive websites. I specialize in front-end development with
          ReactJS, Tailwind CSS, and Framer Motion.
        </p>
      </div>

      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-60 h-60 md:w-80 md:h-80 flex items-center justify-center mt-5 md:mt-0"
      >
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-300 to-pink-400 rounded-full animate-spin-slow blur-lg"></div>
        <img
          src={assets.image}
          alt="Duy Vo"
          className="w-[95%] h-[95%] object-cover rounded-full border-4 border-transparent p-1 shadow-lg transition-transform duration-300 hover:scale-110 z-50"
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
