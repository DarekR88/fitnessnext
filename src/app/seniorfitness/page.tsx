"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo"
import introImg from "../../../public/images/weights.jpg";

export default function SeniorFitness() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Senior Fitness"
        blurb="Getting older doesn't have to mean giving up your physicality. The physical
        trainers at Maximum Fitness are specially trained to help older individuals 
        regain and retain their physical prowess. Our senior fitness program can also be 
        the perfect gift for someone in your life who you care about."
      />
      <MoreInfo />
    </>
  );
}
