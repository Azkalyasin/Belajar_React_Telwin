import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-start p-14 md:px-20 lg:px-32 overflow-hidden bg-gray-900 md:justify-between md:items-start md:flex-row md:gap-10">
      <div className="flex flex-col items-start justify-around max-w-115">
        <img src={assets.logo_dark} alt="" className="" />
        <p className="text-gray-400 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
      </div>
      <div>
        <h1 className="text-white font-bold">Company</h1>
        <ul className=" flex md:flex-col gap-2 text-white mt-4">
          <a href="#Header" className="cursor-pointer text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer text-gray-400">
            Testimonials
          </a>
        </ul>
      </div>
      <div>
        <h1 className="text-white font-bold">Subscribe to our newsletter</h1>
        <p className="text-gray-400 mt-2">The latest news, articles, and resources, sent to your inbox weekly.</p>
      </div>
    </div>
  );
};

export default Footer;
