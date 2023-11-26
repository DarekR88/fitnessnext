"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";

export default function Stretching() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Stretching"
        blurb="Feeling stiff? Want more mobility? Our stretching program is perfect for you. 
        Our patented combination of active, dynamic, and weighted stretching is sure to loosen 
        you up. This program is a great auxiliary for athletes looking to improve their longevity 
        and overall wellness."
      />
      <div className="text-center">
        <p className="text-xl">For more information call, text, or message to get a free evaluation.</p>
      </div>
    </>
  );
}
