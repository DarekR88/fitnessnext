"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo";
import introImg from "../../../../public/images/weights.jpg";

export default function HealthandWellness() {
  return (
    <>
      <IntroCard 
        introImg={introImg} 
        title="Health and Wellness" 
        blurb="The core goal of our health and wellness program is to keep you 
        accountable. Your personal trainer will guide you in attaining better 
        quality of life or recover after an injury. This is a great program for 
        beginners and people suffering from lifestyle related illnesses." 
      />
      <MoreInfo />
    </>
  );
}
