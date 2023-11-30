"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import introImg from "../../../public/images/weights.jpg";

export default function Testimonials() {
  return (
    <>
      <IntroCard
        introImg={introImg} 
        title="Testimonials"
        blurb="Personal training is nothing without results. We'll 
        let our clients' results speak for themselves."
      />
      <FreeEval />
      <div className="border border-red-600">
        <p>before</p>
      </div>
      <div className="border border-green-600">
        <p>after</p>
      </div>
    </>
  );
}
