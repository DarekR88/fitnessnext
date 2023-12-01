"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import introImg from "../../../public/images/weights.jpg";

export default function About() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="About"
        blurb="At Maximum fitness we aim to provide the highest quality personal
        training experience at an affordable price. The concept behind
        Maximum fitness is to create a specialized environment for each client
        based on A.I. algorithms. These specialized programs are formulated to
        instill good habits and make working out and maintaining a healthy
        lifestyle a fun experience."
      />
      <FreeEval />
      <div className="h-[100px] text-center">
        <p>Our Story</p>
      </div>
    </>
  );
}
