"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo"
import introImg from "../../../public/images/weights.jpg";

export default function Stretching() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Stretching"
        blurb="Feeling stiff? Want more mobility? Our stretching program is perfect for you. 
        Our patented combination of active, dynamic, and weighted stretching is sure to loosen 
        you up. This program can be tailored to someone on the beginning of their fitness 
        journey and a great auxiliary for athletes looking to improve their longevity 
        and overall wellness."
      />
      <MoreInfo />
    </>
  );
}
