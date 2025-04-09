import React from "react";
import { projectsData } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Projects = () => {
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Projects<span className="font-light underline underline-offset-10 decoration-1 ml-1">Complated</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
      {/* Projects Card */}
      <div className="flex md:flex-row items-center">
        <Swiper spaceBetween={20} slidesPerView={3} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)} >
          {projectsData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-70 shadow-lg">
                <img src={data.image} alt="" className="" />
                <div className="border-gray-600  text-center">
                  <h1>{data.title}</h1>
                  <p>{data.price}</p>
                  <p>{data.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
