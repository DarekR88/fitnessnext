"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";

export default function Nutrition() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Nutrition"
        blurb="Maximum Fitness nutrition plans and cooking instruction can be 
        the thing you're missing when it comes to achieving your fitness goals. 
        In a world full of junk food we'd like to show you that eating fresh, whole 
        foods doesn't have to be an exercise in torture. Cooking and making snacks 
        with ingredients that are good for you, but most of all taste good is a 
        huge part of our philosophy."
      />
    </>
  );
}
