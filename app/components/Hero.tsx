import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center min-h-screen py-16">
      {/* Hero text container */}
      <div className="flex flex-col items-center justify-center w-full h-auto mt-24">
        <h1 className="font-instrument text-[50px] md:text-[65px] lg:text-[70px] leading-tight animate-fadeIn">
          Fully Equipped Notion Templates
        </h1>
        <h1 className="font-instrument text-[50px] md:text-[65px] lg:text-[70px] leading-tight animate-fadeIn delay-100">
          For Ambitious Procrastinators
        </h1>
        {/* Description paragraph */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-md mt-6">
          <p className="text-[14px] md:text-[14px] lg:text-[14px] font-light text-[#C3C3C3] opacity-50 leading-relaxed animate-fadeIn delay-200">
            Procastinate gives you the tools to turn procrastination into
            productivity, helping you take action and reach the top.
          </p>
          {/* Button */}
          <button className="mt-8 px-6 py-3 bg-[#6E4BED] text-[14.5px] text-white rounded-full shadow-md hover:bg-[#653bff] transition duration-300 ease-in-out">
            Reserve Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
