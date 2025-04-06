import React from "react";
import { assets } from "../assets/assets";
import { projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Projects<span className="font-light underline underline-offset-10 decoration-1 ml-1">Complated</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
      {/* Buttons */}
      <div className="flex gap-2 justify-end flex-row items-end">
        <button className="bg-gray-200 p-2 rounded">
          <img src={assets.left_arrow} alt="" />
        </button>
        <button className="bg-gray-200 p-2 rounded">
          <img src={assets.right_arrow} alt="" />
        </button>
      </div>
      {/* Projects Card */}
      <div className="flex">
        {projectsData.map((Project, index) => (
          <div className="bg-white rounded-xl shadow p-4" key={index}>
            <img src={Project.image} alt={Project.title} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
