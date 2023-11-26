"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo"
import introImg from "../../../../public/images/weights.jpg";

export default function WeightLoss() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Weight Loss"
        blurb="Weight loss can be an extremely difficult process. The personal 
        trainers at Maximum Fitness are trained to be sensitive about your needs
        and firm about keeping you accountable. Whether your goal is to lose 20 
        pounds or 200, our personal trainers will have your back for every step 
        of the way."
      />
      <MoreInfo />
    </>
  );
}
