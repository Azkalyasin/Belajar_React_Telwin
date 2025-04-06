import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden" style={{ backgroundImage: "url('/header_img.png')" }} id="Header">
      <Navbar />
      <div className="container max-auto text-center py-4 px-6 text-white md:px-20 lg:px-32">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-bold pt-20">Explore homes fit your dreams</h2>
        <div className="items-center gap-4 mt-16 space-x-6">
          <a href="#Projects" className=" px-9 py-3  border-white hover:bg-blue-500 border rounded">Projects</a>
          <a href="#Contact" className="px-9 py-3  border-white hover:bg-blue-500 border rounded">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
