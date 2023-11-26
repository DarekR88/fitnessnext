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
            <div  className="py-1">
              <Link href="/programs/stretching">
                Stretching
              </Link>
            </div>
            <div  className="py-1">
              <Link href="/programs/cardio">
                Cardio
              </Link>
            </div>
            <div  className="py-1">
              <Link href="/programs/yoga">
                Yoga
              </Link>
            </div>
            <div  className="py-1">
              <Link href="/programs/healthandwellness">
                Health and Wellness
              </Link>
            </div>
          </div>
          <div>
          <div  className="py-1">
              <Link href="/programs/strengthtraining">
                Strength Training
              </Link>
            </div>
            <div  className="py-1">
              <Link href="/programs/weightloss">
                Weight Loss
              </Link>
            </div>
            <div  className="py-1">
              <Link href="/programs/seniorfitness">
                Senior Fitness
              </Link>
            </div>
            <div  className="py-1">
              <Link href="/programs/youthfitness">
                Youth Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
