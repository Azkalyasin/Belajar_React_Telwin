import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const hendleMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const hendleMenuDestop = () => {
    setShowMobileMenu(false);
  }


  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-8 md:px-20 ml:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Project
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <img src={assets.menu_icon} alt="" className="md:hidden w-7 cursor-pointer" onClick={hendleMenuToggle} />
      </div>
      {/* Mobile Navbar */}
      <div className={`md:hidden ${showMobileMenu ? "fixed w-full" : "h-0 w-0"} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end items-center p-7 cursor-pointer">
          <img src={assets.cross_icon} alt="" className="w-6" onClick={hendleMenuDestop} />
        </div>
        <ul className="flex flex-col gap-4 items-center mt-5 px-5 text-lg font-medium">
          <a href="#Header" className="px-4 py2 rounded-full inline-block">
            Home
          </a>
          <a href="#About" className="px-4 py2 rounded-full inline-block">
            About
          </a>
          <a href="#Projects" className="px-4 py2 rounded-full inline-block">
            Projects
          </a>
          <a href="#Testimonails" className="px-4 py2 rounded-full inline-block">
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
