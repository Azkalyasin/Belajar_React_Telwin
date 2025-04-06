import React from "react";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <div className="container mx-auto flex flex-col items-center p-14 md:px-20 lg:px-32 overflow-hidde" id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Projects<span className="font-light underline underline-offset-10 decoration-1 ml-1">Complated</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
      <div className="">
        <button><img src={assets.left_arrow} alt="" /></button>
        <button><img src={assets.right_arrow} alt="" /></button>
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
