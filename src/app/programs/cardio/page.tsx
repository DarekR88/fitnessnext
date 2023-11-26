"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo"
import introImg from "../../../../public/images/weights.jpg";

export default function Cardio() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Cardio"
        blurb="Cardio is the core of all fitness. Cardio determines how far and fast 
        we can run, our capacity to lift weights, and is a great predictor of overall health. 
        At Maximum Fitness we understand that Cardio isn't the most fun area to progress 
        for most people. Cardio doesn't have to mean running miles on end. We've developed 
        unique ways of training cardio that keep you engaged."
      />
      <MoreInfo />
    </>
  );
}
