"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo"
import introImg from "../../../../public/images/weights.jpg";

export default function YouthFitness() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Youth Programs"
        blurb="Our youth fitness programs are great for children of all athletic levels, 
        wether your child is training for sports, or you'd just like to see your child 
        exercise more. Maximum Fitness also offers programs specialized for children in
        home schooling programs."
      />
      <MoreInfo />
    </>
  );
}
