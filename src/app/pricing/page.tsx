"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import introImg from "../../../public/images/weights.jpg";

export default function Pricing() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Pricing"
        blurb="Getting into shape doesn't have to break the bank. 
        With Maximum Fitness you can get top quality personal training
        at an affordable price. There are few things more valuable in
        life than the piece of mind that comes with getting in shape.
        Our goal is to help you reach your goals."
      />
      <FreeEval />

      <div className="lg:flex max-w-[1200px] m-auto text-font-secondary items-center justify-center lg:justify-between lg:mb-12">
        <div className=" flex flex-col lg:w-[550px] lg:h-[452px] lg:justify-between">
          <div className="bg-gradient-to-b from-[#002F3D] to-[#001F29] py-3 lg:py-6 px-3 lg:px-6">
            <p className="text-3xl pb-2 font-semibold lg:text-[38px]">In Home Personal Training</p>

            <p className="text-xl pb-1">
              $75 <span>for</span> 30 <span>minute</span> Session
            </p>

            <p className="text-xl pb-2">
              $95 <span>for</span> 1 <span>hour</span> Session
            </p>
            <Link href={"/contact"} className="text-2xl font-semibold underline transition ease-in-out hover:text-button-primary duration-500">Schedule Now</Link>
          </div>
          <div className="bg-gradient-to-b from-[#002F3D] to-[#001F29] py-3 lg:py-6 px-3 lg:px-6">
            <p className="text-3xl pb-2 lg:text-[38px] font-semibold">Virtual Personal Training</p>

            <p className="text-xl pb-1">
              $55 <span>for</span> 30 <span>minute</span> Session
            </p>

            <p className="text-xl pb-2">
              $85 <span>for</span> 1 <span>hour</span> Session
            </p>
            <Link href={"/contact"} className="text-2xl font-semibold underline transition ease-in-out hover:text-button-primary duration-500">Schedule Now</Link>
          </div>
        </div>
        <div className="max-w-[550px] bg-gradient-to-b from-[#002F3D] to-[#001F29] py-3 lg:py-6 px-3 lg:px-6">
          <p className="text-3xl pb-2 lg:text-[38px] font-semibold">Group Personal Training</p>

          <p>
            Work out with your significant other or host a class for your
            friends. Only Available in-home.
          </p>

          <div>
            <p className="text-2xl pb-1 font-semibold">Couples Workouts</p>
            <p className="text-xl pb-1">
              $100 <span>for</span> 30 <span>minute</span> Session
            </p>
          </div>
          <div>
            <p className="text-xl  pb-2">
              $150 <span>for</span> 1 <span>hour</span> Session
            </p>
            <Link href={"/contact"} className="text-2xl font-semibold underline transition ease-in-out hover:text-button-primary duration-500">Schedule Now</Link>
          </div>
          <div>
            <p className="text-2xl pb-1 pt-2 font-semibold">Groups of 3 or more</p>
          </div>
          <div className="pb-1">
            <p>Routines: HIT, Yoga, Kickboxing, Aerobics</p>
          </div>
          <div>
            <p className="text-xl pb-1">
              $120 <span>for</span> 30 <span>minute</span> Session
            </p>
          </div>
          <div>
            <p className="text-xl  pb-2">
              $175 <span>for</span> 1 <span>hour</span> Session
            </p>
            <Link href={"/contact"} className="text-2xl font-semibold underline transition ease-in-out hover:text-button-primary duration-500">Schedule Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}
