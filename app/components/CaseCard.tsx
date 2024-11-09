"use client";
import React, { useRef, useEffect, useState } from "react";
import TemplateCards from "./TemplateCards";
import { notionTemplate } from "../../config";
import { motion, useAnimation } from "framer-motion";

const CaseCard: React.FC = () => {
  const controls = useAnimation();
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start("visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRefs = cardRefs.current;
    currentRefs.forEach((ref) => ref && observer.observe(ref));

    return () => {
      currentRefs.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [controls]);

  return (
    <section className="absolute top-[1350px] min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-full max-w-2xl mx-auto mb-8 relative top-[50px]">
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center relative top-[60px]">
          <h1 className="font-instrument text-[50px] md:text-[65px] lg:text-[70px] leading-tight animate-fadeIn mb-4">
            Choose your path.
          </h1>
          <p className="max-w-[417px] text-[12px] md:text-[13px] lg:text-[14.5px] leading-tight animate-fadeIn text-[#CCCCCC] opacity-50">
            Choose your path to conquer procrastination with our powerful Notion
            templates.
          </p>
        </div>
        <div className="space-y-20 relative top-[150px]">
          {notionTemplate.map((val, key) => {
            return (
              <TemplateCards
                key={key}
                name={val.Name}
                description={val.Description}
                price={val.Price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseCard;
