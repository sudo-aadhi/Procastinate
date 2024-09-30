"use client";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticlesComponent from "./particles";
import Overlay from "./overlay";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="overflow-hidden flex flex-col items-center w-[1450px] h-[1122px] bg-gradient-to-b from-[#F1F0FF] via-[#F1D8FA] to-purple-100 relative top-[10px] rounded-3xl">
      <span className="flex items-center justify-center relative z-10">
        {/* Set the z-index to ensure particles are behind other content */}
        <ParticlesComponent id="particles" />
      </span>

      <ProcastinateBanner />
      <span className="flex gap-[25px] items-center">
        <GalaxyButton
          buttonText="Get started for free"
          customClass="relative top-[200px] bg-gradient-to-b from-[#26174C] to-[#260087] w-[157px] h-[40px] rounded-md flex items-center justify-center overflow-hidden"
          textclass="absolute text-white text-[14px] font-normal"
        />

        <GalaxyButton
          buttonText="Get a demo"
          customClass="relative top-[200px] bg-white w-[157px] h-[40px] rounded-md flex items-center justify-center overflow-hidden bg-[#42208D]"
        />
      </span>
      <Overlay />
    </div>
  );
};

const ProcastinateBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center relative top-[144px] z-10">
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
  textclass = "absolute text-black text-[14px] font-normal",
}) => {
  return (
    <div className={`${customClass}`}>
      <div className="w-[145px] h-[30px] flex items-center justify-center rounded-md">
        <button
          className={
            textclass
              ? textclass
              : "absolute text-black text-[14px] font-normal"
          }
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export const CompatiableWith = () => {
  return (
    <div className="w-full h-[75px] flex items-center justify-center relative top-[150px] gap-[25px] text-center">
      <Image
        src={"https://svgshare.com/i/1AwA.svg"}
        alt="Notion"
        width={100}
        height={100}
      />
      <div className="w-[1px] h-[55px] bg-gray-300"></div>
    </div>
  );
};

interface SeperatorProp {
  width: number;
  position: number;
}

export const Seperator: React.FC<SeperatorProp> = ({ width, position }) => {
  return (
    <div
      className="flex items-center justify-center gap-[15px] relative"
      style={{
        top: `${position}px`,
        position: "relative",
      }}
    >
      <div
        className="h-[2px] bg-gradient-to-r from-transparent via-[#ECEFF3] to-[#ECEFF3] rounded-md"
        style={{
          width: `${width}px`,
        }}
      ></div>
      <div className="flex items-center justify-center h-full gap-[5px]">
        <Image
          src={"https://svgshare.com/i/1Axk.svg"}
          alt="seperator"
          width={15}
          height={100}
          style={{
            display: "block",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          className="opacity-50"
        />
        <motion.span
          className="flex items-center justify-center"
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <Image
            src={"https://svgshare.com/i/1Axk.svg"}
            alt="seperator"
            width={30}
            height={100}
            style={{
              display: "block",
              marginTop: "auto",
              marginBottom: "auto",
            }}
            className="opacity-50"
          />
        </motion.span>
        <Image
          src={"https://svgshare.com/i/1Axk.svg"}
          alt="seperator"
          width={15}
          height={100}
          style={{
            display: "block",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          className="opacity-50"
        />
      </div>
      <div
        className="h-[2px] bg-gradient-to-r from-[#ECEFF3] via-[#ECEFF3] to-transparent  rounded-md"
        style={{
          width: `${width}px`,
        }}
      ></div>
    </div>
  );
};

export const LetterComponent = () => {
  return (
    <div className="flex flex-col items-center w-[761px] h-[590px] bg-[#FAFAFA] shadow-[-0px_0px_27px_5px_#E0E0E2] relative top-[250px]">
      <div className="flex w-[600px] h-[60px] flex-col">
        <h1>Greetings to you,</h1>
        <h1>Greetings to you,</h1>
      </div>
    </div>
  );
};

export default Hero;
