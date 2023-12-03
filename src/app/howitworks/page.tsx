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
        One of our skilled and professional personal trainers will start a virtual meeting, or come to your 
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
                  Free Evaluation and First Session
                </Link>
              </div>
              <p className="mx-4">
                Give personal training a try, no credit card required. Schedule
                a free video call or in home personal training session now.
              </p>
              <div className="w-full text-center pt-3 pb-8 text-2xl lg:pb-0">
                <Link href={"/contact"} className="font-semibold">
                  Schedule Now
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
                <Link href={"/contact"} className="font-semibold">
                  In Home Personal Training
                </Link>
              </div>
              <p className="mx-4">
                We'll bring everything you need to reach your fitness goals.
                Forget the traffic and crowded gym, get in shape in the comfort
                of your own home.
              </p>
              <div className="w-full text-center pt-3 pb-8 text-2xl lg:pb-0">
                <Link href={"/contact"} className="font-semibold">
                  Schedule Now
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
                <Link href={"/contact"} className="font-semibold">
                  Virtual Personal Training
                </Link>
              </div>
              <p className="mx-4">
                Meet your personal trainer through video call. Receive all the
                benefits of personal training while staying contact free. We'll
                keep you accountable and motivated.
              </p>
              <div className="w-full text-center pt-3 pb-6 text-2xl lg:pb-0">
                <Link href={"/contact"} className="font-semibold">
                  Schedule Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
