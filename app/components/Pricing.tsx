"use client";

import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { pricingPlans } from "@/config";

// Define the props for the PricingCard component
interface PricingCardProps {
  duration?: string;
  planName?: string;
  description?: string;
  pricing?: number;
  packages?: string;
  buttonText?: string;
  features?: string[];
  variant?: "default" | "featured";
}

/**
 * Pricing component that displays pricing information and options.
 *
 * @returns {JSX.Element} The rendered Pricing component
 */
const Pricing: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col items-center text-center w-full h-[967.48px] absolute top-[3546px]"
    >
      {/* Separator line with gradient effect */}
      <motion.div
        variants={itemVariants}
        className="w-[500px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent relative top-[100px]"
      ></motion.div>

      {/* Main heading and description */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center text-center relative top-[150px]"
      >
        <FlipWords
          words={["Go with extra-ordinaries", "Elevate your productivity"]}
          className="font-instrument text-[50px] md:text-[65px] lg:text-[70px] leading-tight"
        />
        <motion.p
          variants={itemVariants}
          className="w-[430px] text-[10px] md:text-[13px] lg:text-[14px] leading-tight relative top-[15px] opacity-50 text-[#CCCC]"
        >
          Unlock exclusive access to expertly designed Notion templates tailored
          to enhance productivity and tackle procrastination
        </motion.p>
      </motion.div>

      {/* Pricing cards container */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center w-[1000px] h-[484.33px] relative top-[250px] gap-[10px]"
      >
        {pricingPlans.map((val, index) => {
          return (
            <PricingCard
              key={index}
              duration={val.duration}
              planName={val.planName}
              description={val.description}
              pricing={val.pricing}
              features={val.features}
              variant={val.variant ? val.variant : undefined}
            />
          );
        })}
      </motion.div>

      {/* Booking section */}
      <motion.div className="flex items-center justify-between w-[1000px] h-[116.78px] relative top-[300px]">
        <span className="flex flex-col">
          <FlipWords
            words={["Book a call.", "Get started now."]}
            className="font-instrument text-[23px] md:text-[28px] lg:text-32px] leading-tight"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="w-[358px] text-[10px] md:text-[13px] lg:text-[14px] leading-tight relative top-[15px] opacity-50 text-[#CCCC]"
          >
            Learn more about Procastinate and how we can help you.
          </motion.p>
        </span>
        <span className="flex items-center justify-evenly gap-[8px]">
          {/* Call-to-action buttons */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center text-center w-[150px] h-[45px] bg-[#101010] border border-[#232323] rounded-full text-[15px] transition-all ease-in-out duration-150 hover:bg-[#583BB8]"
          >
            Start with Email
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center text-center w-[150px] h-[45px] bg-[#101010] border border-[#232323] rounded-full text-[15px] transition-all ease-in-out duration-150 hover:bg-[#583BB8]"
          >
            Book a Call
          </motion.button>
        </span>
      </motion.div>
    </motion.div>
  );
};

/**
 * PricingCard component that displays individual pricing plan details.
 *
 * @param {PricingCardProps} props - The props for the PricingCard component
 * @returns {JSX.Element} The rendered PricingCard component
 */
const PricingCard: React.FC<PricingCardProps> = ({
  duration = "Monthly",
  planName = "Pro Membership",
  description = "Double the requests. Pause or cancel any time.",
  pricing = 9995,
  packages = "monthly",
  buttonText = "Get Going",
  features = [
    "Pause or cancel any time",
    "16 years of combined experience",
    "Proven track record (164 projects done)",
    "0 meetings",
    "48 hour delivery",
  ],
  variant = "default",
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const buttonStyles =
    variant === "featured"
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-[325px] h-[484px] border border-[#1E1E1E] rounded-lg overflow-hidden shadow-sm"
    >
      <div className="p-6 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-5"
        >
          <span className="inline-block px-3 py-1 text-xs bg-[#0F0F0F] border border-[#1E1E1E] text-[#ffffff67] rounded-full">
            {duration}
          </span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[32px] font-bold mb-2 font-instrument"
        >
          {planName}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-500 mb-4"
        >
          {description}
        </motion.p>

        <motion.div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold font-instrument">
            ${pricing.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 ml-1">/{packages}</span>
        </motion.div>

        <ul className="mb-6 flex-grow text-[#ffffff67] font-thin">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center mb-3 text-sm"
            >
              <Check className="h-4 w-4 mr-2 text-green-500" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${buttonStyles}`}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

// FlipWords component (as provided in the question)
const FlipWords: React.FC<{
  words: string[];
  duration?: number;
  className?: string;
}> = ({ words, duration = 3000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = React.useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={`z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2 ${className}`}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Pricing;
