"use client";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticlesComponent from "./particles";
import Overlay from "./overlay";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Founder from "../../assets/image.jpeg";

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
          textclass=""
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
    <div className="flex flex-col items-center w-[761px] h-auto bg-[#FAFAFA] shadow-lg p-8 relative top-[200px]">
      {/* Main Content Container */}
      <div className="flex flex-col w-full p-8 bg-gradient-to-b from-white to-[#F8F8F7] shadow-sm">
        {/* Greeting Section */}
        <div className="mb-6">
          <h1 className="text-[35px] text-gray-800 mb-2 font-licorice font-extrabold">
            Greetings to you,
          </h1>

          {/* Aadarsh's Name with HoverCard */}
          <div className="mt-2 text-[22px] font-licorice font-extrabold">
            <HoverCard>
              <HoverCardTrigger className="text-blue-500 underline decoration-solid cursor-pointer">
                Aadarsh
              </HoverCardTrigger>
              <HoverCardContent className="flex mt-2 p-4 bg-white border border-[#dadada] rounded shadow-lg h-[100px] w-[300px]">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full shadow-inner shadow-[#DADADC]">
                    <Image
                      src={"https://i.ibb.co/B6F5cC5/image.jpg"}
                      alt="Founder"
                      width={1080}
                      height={1080}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <span className="font-semibold flex items-center">
                      Aadarsh Anilkumar
                      <Image
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg"
                        alt="Indian Flag"
                        className="ml-2 shadow-md"
                        width={20}
                        height={15}
                      />
                    </span>
                    <p className="text-sm text-gray-600">
                      Founder & CEO, Procrastinate
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        {/* Body Text */}
        <div className="mb-6">
          <p className="text-black text-[25px] leading-relaxed mb-4 font-licorice font-extrabold">
            In a world filled with distractions, staying productive is a
            challenge. Finding the right tools can be daunting. Many options are
            either dull, overly complicated, or lack the necessary features.
            That’s why we’ve created beautiful Notion templates, designed to
            elevate your focus and transform your productivity journey.
          </p>
          <p className="text-black text-[25px] leading-relaxed mb-4 font-licorice font-extrabold">
            We help others overcome distractions and boost their productivity.
          </p>
          <p className="text-black text-[25px] leading-relaxed mb-4 font-licorice font-extrabold">
            If you're looking to enhance your focus with our visually appealing
            templates and have a website ready to share your experience, we
            encourage you to explore Procastinate. Reach out to us to see how
            our templates can help you succeed!
            <a
              href="https://livechat.com"
              className="text-blue-500 underline ml-1 text-[25px] font-licorice font-extrabold"
            >
              Linkedin
            </a>
            ,
            <a
              href="https://x.com/kaizenaadhi"
              target="_blank"
              className="text-blue-500 underline ml-1 text-[25px] font-licorice font-extrabold"
            >
              Twitter
            </a>
            , or
            <a
              href="mailto:developedbyaadhi@gmail.com"
              target="_blank"
              className="text-blue-500 underline ml-1"
            >
              email
            </a>
            .
          </p>
        </div>
        {/* Offer Section
        <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
          We would be happy to offer you <strong>6 months of free usage</strong>{" "}
          in exchange for your feedback.
        </p> */}
        {/* Signature Section */}
        <div className="flex flex-col gap-[10px]">
          <p className="font-licorice font-extrabold text-[20px]">
            Gratefully,
          </p>
          <Image
            src="https://svgshare.com/i/1Aws.svg"
            alt="signature"
            width={250}
            height={100}
            draggable="false"
          />
          <p className="text-gray-500 text-[22px] font-licorice font-extrabold">
            Your Productivity Matters Us Alot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
