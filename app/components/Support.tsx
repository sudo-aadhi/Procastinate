"use client";
import React from "react";
import Image from "next/image";

const Support: React.FC = () => {
  // Array of team member avatars
  const teamMembers = [
    "https://framerusercontent.com/images/uJMF8v7ihguXDO1NORhGFnzVo4.png?scale-down-to=512",
    "https://framerusercontent.com/images/Yc9LZdloQELPcJB86CkLRRcIkaY.png?scale-down-to=512",
    "https://framerusercontent.com/images/uJMF8v7ihguXDO1NORhGFnzVo4.png?scale-down-to=512",
    "https://framerusercontent.com/images/7X0QO4NBDnarUm9WvtbmT6E6oJs.png",
    "https://framerusercontent.com/images/cY5aN7fNjst5c03wLpzOtVTgiQ.png?scale-down-to=512",
    "https://framerusercontent.com/images/2g74iosCwg7WPYeVz6R7WHlwoA.png?scale-down-to=512",
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4 absolute top-[6000px]">
      {/* Content Container */}
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center gap-8 mb-16 z-10">
        <h1 className="font-instrument text-[40px] md:text-[50px] lg:text-[70px] leading-tight animate-fadeIn">
          Full Service Design Team And Founders For Notion
        </h1>
        <button className="px-8 py-3 bg-[#333333] rounded-full text-[15px] border border-[#454545] text-[#cccccc] hover:bg-[#404040] transition-colors">
          Schedule this Call
        </button>
      </div>

      {/* Glowing Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[665px] h-[450px] opacity-40">
        <div
          className="w-[350px] h-[350px] rounded-full bg-white absolute top-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            filter: "blur(120px)",
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
          }}
        ></div>
      </div>

      {/* Team Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[800px] w-full mx-auto p-4 z-10 shadow-md">
        {teamMembers.map((avatar, index) => (
          <div
            key={index}
            className="relative aspect-square w-[180px] h-[180px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10" />
            <div className="relative w-full h-full overflow-hidden rounded-full">
              <Image
                src={avatar}
                alt={`Team member ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
