"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import introImg from "../../../public/images/weights.jpg";
import fatImg from "../../../public/images/jade-destiny-w6APf4aCmns-unsplash.jpg";
import skinnyImg from "../../../public/images/vladimir-yelizarov-C43tCJffOh4-unsplash.jpg";

export default function Testimonials() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Testimonials"
        blurb="Personal training is nothing without results. We'll 
        let our clients' results speak for themselves."
      />
      <FreeEval />
      <div className="flex flex-col max-w-[1200px] m-auto lg:flex-row">
        <div className="flex max-w-full h-[250px] overflow-hidden lg:w-1/2 lg:rounded-md">
          <div className="w-1/2">
            <Image src={fatImg} alt="fat" className="" />
          </div>
          <div className="w-1/2">
            <Image src={skinnyImg} alt="skinny" className="" />
          </div>
        </div>
        <div className="lg:w-1/2 text-center pt-6 px-3">
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
