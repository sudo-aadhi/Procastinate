import React from "react";
import TemplateCards from "./TemplateCards";

const CaseCard = () => {
  return (
    <div className="flex flex-col items-center text-center w-full h-[2000px] absolute top-[1400px]">
      {/* The seperator div  */}
      <div className="w-[500px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
      {/* The case study text-container  */}
      <div className="flex flex-col items-center justify-center relative top-[85px] gap-[15px]">
        <h1 className="text-[#F2F2F2] font-instrument text-[48px] md:text-[40px] lg:text-[48px] leading-tight animate-fadeIn">
          Your Progressive Paths
        </h1>
        <p className="w-[417px] text-[12px] md:text-[13px] lg:text-[14.5px] leading-tight animate-fadeIn text-[#CCCCCC] opacity-50">
          Choose your path to conquer procrastination with our powerful Notion
          templates.
        </p>
      </div>
      {/* The Notion-Template card container which extends toward bottom  */}
      <div className="flex flex-col items-center justify-center w-[1000px] h-auto relative top-[171px] gap-[100px]">
        <TemplateCards />
        <TemplateCards />
        <TemplateCards />
      </div>
    </div>
  );
};

export default CaseCard;
