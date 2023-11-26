"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";

export default function Programs() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Programs"
        blurb="From Yoga to strength training Maximum Fitness has a training 
        program that is right for you. After a free evaluation our personal 
        trainers will suggest the best possible course to reach your fitness 
        goals."
      />
    </>
  );
}
