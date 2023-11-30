"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import introImg from "../../../public/images/weights.jpg";

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
      <div className="flex max-w-[1200px] m-auto">
        <div className="flex w-[400px]">
          <div
            onClick={handleClick}
            className={`lg:h-[450px] border border-red-600 ${
              isActive ? "w-4/5" : "w-1/5"
            }`}
          >
            <p>before</p>
          </div>
          <div
            onClick={handleClick}
            className={`lg:h-[450px] border border-green-600 ${
              isActive ? "w-1/5" : "w-4/5"
            }`}
          >
            <p>after</p>
          </div>
        </div>
        <div className="w-[800px]">
          <p>Jane Doe</p>
          <p>
            I lost 5 million pounds and became black. i would definitely
            recommend Maximum Fitness for all your personal training needs.
          </p>
        </div>
      </div>
    </>
  );
}
