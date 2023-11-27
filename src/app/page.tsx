"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IntroCard } from "@/components/IntroCard";
import WeightImg from "../../public/images/weights.jpg";

export default function Home() {
  return (
    <>
      <IntroCard
        introImg={WeightImg}
        title="Maximum Fitness"
        blurb="At Maximum Fitness your health and wellness are our priority. Our
          cutting edge training regiments and nutrition plans cover all the
          bases when it comes to reaching your goals."
      />
      <div className="flex flex-wrap w-full lg:max-w-[1200px] lg:justify-center lg:m-auto lg:justify-between">
        <div className="lg:w-80">
          <div>
            <Image src={WeightImg} alt="weights" width={500} />
          </div>
          <p className="mx-4 py-4">
            Evaluations are completely free and can be done in person at the
            location of your choosing, through video chat, or by phone. Your
            comfort is key to the process.
          </p>
        </div>
        <div className="lg:w-80">
          <div>
            <Image src={WeightImg} alt="weights" width={500} />
          </div>
          <p className="mx-4 py-4">
            After you've been evaluated by one of our qualified personal
            trainers cutting edge fitness AI will generate an exercise
            program specific to your needs.
          </p>
        </div>
        <div className="lg:w-80">
          <div>
            <Image src={WeightImg} alt="weights" width={500} />
          </div>
          <p className="mx-4 py-4">
            Nutrition is just as important as exercise when it comes to
            achieving fitness goals. Meal plans, nutritional education, and
            cooking guidance are all available from Ignition Fitness.
          </p>
        </div>
      </div>
    </>
  );
}
