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
      <div className="w-screen lg:pb-12">
        <div className="flex flex-col max-w-[1200px] m-auto lg:flex-row">
          <div className="flex max-w-full h-[250px] overflow-hidden lg:w-1/2 lg:h-[400px]">
            <div className="w-1/2">
              <Image src={fatImg} alt="fat" className="" />
            </div>
            <div className="w-1/2">
              <Image src={skinnyImg} alt="skinny" className="" />
            </div>
          </div>
          <div className="lg:w-1/2 text-center px-3 py-3 lg:px-4 lg:pt-14 bg-gradient-to-b from-[#002F3D] to-[#001F29] text-font-secondary">
            <p className="text-3xl">Jane Doe</p>
            <q className="text-left text-xl leading-9">
              I lost 5 million pounds and became black. i would definitely
              recommend Maximum Fitness for all your personal training needs. My
              personal trainer was invaluable to my fitness journey and was
              always on time.
            </q>
          </div>
        </div>
        <div className="flex flex-col pt-6 max-w-[1200px] m-auto lg:flex-row-reverse">
          <div className="flex max-w-full h-[250px] overflow-hidden lg:w-1/2 lg:h-[400px]">
            <div className="w-1/2">
              <Image src={fatImg} alt="fat" className="" />
            </div>
            <div className="w-1/2">
              <Image src={skinnyImg} alt="skinny" className="" />
            </div>
          </div>
          <div className="lg:w-1/2 text-center px-3 py-3 lg:px-4 lg:pt-14 bg-gradient-to-b from-[#002F3D] to-[#001F29] text-font-secondary">
            <p className="text-3xl">John Joe</p>
            <q className="text-left text-xl leading-9">
              I lost 5 million pounds and became black. i would definitely
              recommend Maximum Fitness for all your personal training needs. My
              personal trainer was invaluable to my fitness journey and was
              always on time.
            </q>
          </div>
        </div>
      </div>
    </>
  );
}
