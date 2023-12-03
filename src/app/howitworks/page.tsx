"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import WeightImg from "../../../public/images/weights.jpg";


export default function HowItWorks() {
  return (
    <>
      <IntroCard
        introImg={WeightImg}
        title="How it Works"
        blurb="Initial evaluation and first workout are free! Start your fitness 
        journey by scheduling a free initial evaluation and first session. 
        One of our skilled and professional personal trainers will come to your 
        home at the scheduled time to perform a free evaluation and guide you through your 
        free first workout(30 minutes)."
      />
      <FreeEval />
      <div className="bg-gradient-to-b from-button-secondary to-[#073635] text-font-secondary lg:py-12">
        <div className="flex flex-wrap pb-3 w-full lg:max-w-[1200px] lg:justify-center lg:m-auto lg:justify-between">
          <div className="lg:w-[390px]">
            <div className="hidden lg:block lg:relative lg:h-[250px] lg:w-[390px] lg:bg-gradient-to-b from-gray-400 to-bg-secondary lg:z-0 lg:rounded-md"></div>
            <div className="lg:relative lg:-mt-[250px] lg:h-[250px] overflow-hidden rounded-md z-10 lg:transform transition lg:opacity-50 duration-500 lg:hover:opacity-100">
              <Link href={"/contact"} className="font-semibold">
                <Image
                  src={WeightImg}
                  alt="weights"
                  width={500}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div className="bg-gradient-to-b from-button-secondary to-[#073635] py-4">
              <div className="text-2xl ml-3 pb-2">
                <Link href={"/contact"} className="font-semibold">
                  Free Evaluations
                </Link>
              </div>
              <p className="mx-4">
                Evaluations are completely free and can be done in person at the
                location of your choosing, through video chat, or by phone. At
                Maximum fitness we understand the first step can be the hardest.
              </p>
              <div className="w-full text-center pt-3 pb-8 text-2xl lg:pb-0">
                <Link href={"/contact"} className="font-semibold">
                  More Info
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[390px]">
            <div className="hidden lg:block lg:relative lg:h-[250px] lg:w-[390px] lg:bg-gradient-to-b from-gray-400 to-bg-secondary lg:z-0 lg:rounded-md"></div>
            <div className="lg:relative lg:-mt-[250px] lg:h-[250px] overflow-hidden rounded-md z-10 lg:transform transition lg:opacity-50 duration-500 lg:hover:opacity-100">
              <Link href={"/contact"} className="font-semibold">
                <Image
                  src={WeightImg}
                  alt="weights"
                  width={500}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div className="bg-gradient-to-b from-button-secondary to-[#073635] py-4">
              <div className="text-2xl ml-3 pb-2">
                <Link href={"/pricing"} className="font-semibold">
                  Affordable Pricing
                </Link>
              </div>
              <p className="mx-4">
                At Maximum Fitness we believe personal training should be
                affordable. At $65/<span className="text-sm">hr.</span> for in
                person sessions and $40/<span className="text-sm">hr.</span> for
                video call sessions we offer the most competitive prices in the
                industry.
              </p>
              <div className="w-full text-center pt-3 pb-8 text-2xl lg:pb-0">
                <Link href={"/pricing"} className="font-semibold">
                  More Info
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[390px]">
            <div className="hidden lg:block lg:relative lg:h-[250px] lg:w-[390px] lg:bg-gradient-to-b from-gray-400 to-bg-secondary lg:z-0 lg:rounded-md"></div>
            <div className="lg:relative lg:-mt-[250px] lg:h-[250px] overflow-hidden rounded-md z-10 lg:transform transition lg:opacity-50 duration-500 lg:hover:opacity-100">
              <Link href={"/contact"} className="font-semibold">
                <Image
                  src={WeightImg}
                  alt="weights"
                  width={500}
                  className="rounded-md"
                />
              </Link>
            </div>
            <div className="bg-gradient-to-b from-button-secondary to-[#073635] py-4">
              <div className="text-2xl ml-3 pb-2 z-10">
                <Link href={"/programs"} className="font-semibold">
                  Cutting Edge Programs
                </Link>
              </div>
              <p className="mx-4">
                Maximum Fitness training programs are based on the most current
                studies and kinesiology. Our competitive pricing does not effect
                our ability to provide the highest quality training.
              </p>
              <div className="w-full text-center pt-3 pb-6 text-2xl lg:pb-0">
                <Link href={"/programs"} className="font-semibold">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
