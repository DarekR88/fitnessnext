"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import introImg from "../../../public/images/weights.jpg";

export default function About() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="About"
        blurb="At Maximum fitness we aim to provide the highest quality personal
        training experience at an affordable price. The concept behind
        Maximum fitness is to create a specialized environment for each client
        based on A.I. algorithms. These specialized programs are formulated to
        instill good habits and make working out and maintaining a healthy
        lifestyle a fun experience."
      />
      <FreeEval />
      <div className="lg:flex max-w-[1200px] m-auto lg:mb-12">
        <div className="max-w-[600px] overflow=hidden">
          <Image src={introImg} alt="weights"></Image>
        </div>
        <div className="max-w-[600px] border-2 border-black lg:w-[600px] text-font-secondary bg-gradient-to-b from-[#002F3D] to-[#001F29]">
          <p className="text-3xl lg:pt-[20px] ml-3 py-2 font-semibold">
            Lead Trainer, Darek Radke
          </p>
          <p className="text-xl px-4 pb-6">
            I know from experience that exercise can totally change your life. I
            started Maximum to help more people the right way. Beyond the hard
            work outs, the personal training methods I&#39;ve develop also seek to
            eliminate negative lifestyle elements like negative self talk and
            disordered eating. 
          </p>
        </div>
      </div>
    </>
  );
}
