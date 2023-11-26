"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo"
import introImg from "../../../public/images/weights.jpg";

export default function Yoga() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Yoga"
        blurb="Yoga is a great way to get in shape and become more flexible 
        at the same time. Yoga can be a great way to test your strength and 
        stamina as well as your flexibility and balance. Yoga is great as a 
        group activity, book a trainer for 2 or more and have a private guided 
        Yoga experience."
      />
      <MoreInfo />
    </>
  );
}
