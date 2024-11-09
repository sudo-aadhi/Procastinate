"use client";
import { motion } from "framer-motion";
import React from "react";

interface TemplateCardProps {
  name?: string;
  description?: string;
  price?: number;
}

const TemplateCards: React.FC<TemplateCardProps> = ({
  name = "Second Brain",
  description = `Grimsel, an industry leader in AR 
and VR solutions, sought to 
increase their market reach and 
engagement through targeted 
marketing...`,
  price = 199,
}) => {
  return (
    <div className="flex items-center justify-center w-[1000px] h-[532.27px] bg-gradient-to-b from-[#0C0C0C] to-[#030303] rounded-[24px]">
      <div className="flex items-center justify-center w-[706.38px] h-[516.27px] border border-[#1f1f1f] rounded-[16px]">
        <div className="flex items-center justify-center bg-[#1d1c1d] w-[690.38px] h-[500.27px] border border-[#1f1f1f] rounded-[16px]">
          {/* Add preview content here */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[278px] h-[515px] gap-[15px]">
        <h1 className="text-[#F2F2F2] font-instrument text-[25px] md:text-[28px] lg:text-[32px] leading-tight animate-fadeIn">
          {name}
        </h1>

        <h3 className="opacity-50 text-[10px] md:text-[14px] lg:text-[14px] leading-tight animate-fadeIn w-[230px]">
          {description}
        </h3>

        <div className="flex items-center justify-center gap-[15px] w-full h-auto">
          <h2 className="text-[#F2F2F2] font-instrument text-[25px] md:text-[28px] lg:text-[52px] leading-tight animate-fadeIn">
            ${price}
          </h2>
          <button className="px-6 py-3 bg-[#6E4BED] text-[14.5px] text-white rounded-full shadow-md hover:bg-[#653bff] transition duration-300 ease-in-out">
            Get Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCards;
