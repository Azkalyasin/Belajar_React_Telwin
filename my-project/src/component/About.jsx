import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center container max-auto p-14 md:px-20 lg:px-32 overflow-hidden" id="About">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">Passion About Properties, Decoration to your Visitor</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap10 w-full 2xl:pr-28 items-center">
            <div className="">
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Years of Experience</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Delivered</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatum. Est unde deserunt ut voluptatem mollitia reprehenderit magnam, pariatur at. Eius, ea. Aliquid quo vel tenetur beatae, non nesciunt repellat.
          </p>
          <button className="bg-blue-600 text-white rounded py-2 px-8">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
