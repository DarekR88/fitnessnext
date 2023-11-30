"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import introImg from "../../../public/images/weights.jpg";
import fatImg from "../../../public/images/jade-destiny-w6APf4aCmns-unsplash.jpg";
import skinnyImg from "../../../public/images/vladimir-yelizarov-C43tCJffOh4-unsplash.jpg";

export default function Testimonials() {
  const [isActive, setActiveImage] = React.useState(true);

  const handleClick = () => {
    setActiveImage(!isActive);
  };

  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Testimonials"
        blurb="Personal training is nothing without results. We'll 
        let our clients' results speak for themselves."
      />
      <FreeEval />
      <p className="hidden lg:inline lg:ml-[300px] xl:ml-[400px]">Click to reveal results!</p>
      <div className="flex flex-col max-w-[1200px] m-auto lg:flex-row">
        <p className="text-3xl text-center pb-2 lg:hidden">
          Tap to reveal results!
        </p>
        <div className="flex w-[400px]">
          <div
            onClick={handleClick}
            className={`lg:h-[450px] border border-red-600 overflow-hidden transition-all duration-300 ease-in-out ${
              isActive ? "w-4/5" : "w-1/5"
            }`}
          >
            <Image src={fatImg} alt="fat" className="h-[450px]" />
          </div>
          <div
            onClick={handleClick}
            className={`lg:h-[450px] border border-green-600 overflow-hidden transition-all duration-300 ease-in-out ${
              isActive ? "w-1/5" : "w-4/5"
            }`}
          >
            <Image src={skinnyImg} alt="skinny" className="h-[450px]" />
          </div>
        </div>
        <div className="lg:w-[800px] text-center pt-6 px-3">
          <p>Jane Doe</p>
          <p className="text-left">
            "I lost 5 million pounds and became black. i would definitely
            recommend Maximum Fitness for all your personal training needs. My
            personal trainer was invaluable to my fitness journey and was always
            on time."
          </p>
        </div>
      </div>
    </>
  );
}
