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
      <div className="text-center">
        <div>
          <p className="text-xl">Click for more information</p>
        </div>
        <div className="flex flex-wrap p-3 justify-center lg:gap-20">
          <div>
            <Link className="py-1" href="/stretching">
              Stretching
            </Link>
            <p className="py-1">Cardio</p>
            <p className="py-1">Yoga</p>
            <p className="py-1">Health and Wellness</p>
          </div>
          <div>
            <p className="py-1">Strength Training</p>
            <p className="py-1">Weight Loss</p>
            <p className="py-1">Senior Fitness Programs</p>
            <p className="py-1">Youth Programs</p>
          </div>
        </div>
      </div>
    </>
  );
}
