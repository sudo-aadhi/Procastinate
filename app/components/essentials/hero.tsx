"use client";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticlesComponent from "./particles";

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-[1310px] h-[1122px] bg-gradient-to-b from-[#F1F0FF] via-[#F1D8FA] to-purple-100 relative top-[5px] rounded-3xl">
      <ProcastinateBanner />
      <span className="flex gap-[25px] items-center">
        <GalaxyButton
          buttonText="Get started for free"
          customClass="relative top-[200px] bg-black w-[157px] h-[40px] rounded-md flex items-center justify-center overflow-hidden bg-[#42208D]"
          textclass="absolute z-10 text-white text-[14px] font-normal"
        />
        <GalaxyButton
          buttonText="Get a demo"
          customClass="relative top-[200px] bg-white w-[157px] h-[40px] rounded-md flex items-center justify-center overflow-hidden bg-[#42208D]"
        />
      </span>
    </div>
  );
};

const ProcastinateBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center relative top-[144px]">
      <h1 className="text-black text-[60px] font-imbueSans bg-gradient-to-b from-[#784BF0] to-[#10052C] bg-clip-text text-transparent flex gap-[10px]">
        <span className="font-medium">Procrastination</span> ends when you start
        organizing
      </h1>
      <h1 className="text-black text-[60px] font-imbueSans bg-gradient-to-b from-[#784BF0] to-[#10052C] bg-clip-text text-transparent flex gap-[10px]">
        Turn your plans into action <span className="font-medium">today.</span>
      </h1>
      <span className="flex flex-col items-center justify-center relative top-[8px] text-[13px]">
        <p className="text-[#714C9C]">
          Beat procrastination with our Notion templates—designed to streamline
          tasks
        </p>
        <p className="text-[#714C9C]">
          boost productivity, and achieve your goals
        </p>
      </span>
    </div>
  );
};

interface GalaxyButtonProp {
  buttonText: string;
  customClass: string;
  textclass: string;
}

const GalaxyButton: React.FC<GalaxyButtonProp> = ({
  buttonText,
  customClass,
  textclass = "absolute z-10 text-black text-[14px] font-normal",
}) => {
  return (
    <div className={`${customClass}`}>
      <div className="w-[145px] h-[30px] flex items-center justify-center rounded-md">
        <button
          className={
            textclass
              ? textclass
              : "absolute z-10 text-black text-[14px] font-normal"
          }
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;
