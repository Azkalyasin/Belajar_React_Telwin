import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Projects
        <span className="underline underline-offset-6 font-light ml-1 decoration-1">Complated</span>
      </h1>
      <p className="text-center text-gray-500 mx-auto mt-2 max-w-80">Real Stories from Those Who Found Home with Us</p>
      {/* Card testimonial */}
      <div className="flex md:flex-row justify-center gap-26 mt-10 max-auto flex-col">
        {testimonialsData.map((data, index) => (
          <div key={index} className="flex flex-col items-center p-6 rounded-md max-w-sm border-gray-500 shadow-lg">
            <img src={data.image} alt={data.alt} className="w-20 h-20 rounded-full mb-4 object-cover" />
            <h1 className="font-semibold text-lg">{data.name}</h1>
            <p className="text-sm text-gray-500">{data.title}</p>
            <div className="text-red-500 my-2">{Array(data.rating).fill("★").join(" ")}</div>
            <p className="text-center text-sm text-gray-600">{data.description}</p>
            <p className="text-center text-gray-500">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
