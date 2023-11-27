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
        <div className="lg:w-[375px]">
          <div>
            <Image
              src={WeightImg}
              alt="weights"
              width={500}
              className="rounded-md"
            />
          </div>
          <div className="text-2xl ml-3 py-2">
            <Link href={"/contact"}>Free Evaluations</Link>
          </div>
          <p className="mx-4">
            Evaluations are completely free and can be done in person at the
            location of your choosing, through video chat, or by phone. At
            Maximum fitness we understand the first step can be the hardest.
          </p>
          <div className="w-full text-center pt-3 text-2xl">
            <Link href={"/contact"}>More Info</Link>
          </div>
        </div>
        <div className="lg:w-[375px]">
          <div>
            <Image
              src={WeightImg}
              alt="weights"
              width={500}
              className="rounded-md"
            />
          </div>
          <div className="text-2xl ml-3 py-2">
            <Link href={"/pricing"}>Affordable Pricing</Link>
          </div>
          <p className="mx-4">
            At Maximum Fitness we believe personal training should be
            affordable. At $50 for in person sessions and $35 for virtual
            sessions we offer the most competitive prices in the industry.
          </p>
          <div className="w-full text-center pt-3 text-2xl">
            <Link href={"/pricing"}>More Info</Link>
          </div>
        </div>
        <div className="lg:w-[375px]">
          <div>
            <Image
              src={WeightImg}
              alt="weights"
              width={500}
              className="rounded-md"
            />
          </div>
          <div className="text-2xl ml-3 py-2">
            <Link href={"/programs"}>Cutting Edge Programs</Link>
          </div>
          <p className="mx-4">
            Maximum Fitness training programs are based on the most current
            studies and kinesiological science. Our competitive pricing does not
            effect our ability to provide the highest quality training.
          </p>
          <div className="w-full text-center pt-3 text-2xl">
            <Link href={"/programs"}>More Info</Link>
          </div>
        </div>
      </div>
    </>
  );
}
