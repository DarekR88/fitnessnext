"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo"
import introImg from "../../../../public/images/weights.jpg";

export default function StrengthTraining() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Strength Training"
        blurb="The strength training programs at Maximum Fitness combine 
        calisthenics, weight training, and physical therapy to help you maximize
        your returns on effort. Getting stronger feels amazing and our strength 
        programs will help you see real results."
      />
      <MoreInfo />
    </>
  );
}
