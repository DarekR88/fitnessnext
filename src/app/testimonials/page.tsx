"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";

export default function Testimonials() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Testimonials"
        blurb="Personal training is nothing without results."
      />
      <div className="h-[100px] text-center">
        <p>Our Story</p>
      </div>
    </>
  );
}
