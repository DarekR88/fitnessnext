"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";

export default function Programs() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Programs"
        blurb="Exercise shouldn't feel like a chore. Making lifestyle choices that have a positive 
        impact on your overall health and well being shouldn't be punishing. The fitness and nutrition 
        programs from Maximum Fitness are flexible and easily fit in your busy schedule. Gyms are unfriendly and 
        intimidating for people at the beginning of their fitness journey. With Maximum Fitness a highly skilled 
        and educated personal trainer comes directly to you through video call, or in person."
      />
      <div>
        
      </div>
    </>
  );
}
