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
        blurb="Getting in shape is priceless, but at Maximum Fitness personal training won't break the bank. 
        We offer unbeatable prices and the highest quality service. Pricing is based on in person training ($65/hr. per session), 
        or virtual training ($40/1hr. per session). Our process starts with a free evaluation, after your free evaluation our 
        personal trainers will suggest a program that fits your needs. No monthly fees, pay as you go. All sessions are 
        1 hour, longer sessions available upon request"
      />
      <FreeEval />
      <div className="flex flex-wrap pb-12 lg:max-w-[1200px] lg:m-auto lg:justify-between">
        <div className="lg:w-[375px]">
          <div>
            <Image
              src={introImg}
              alt="weights"
              width={500}
              className="rounded-md"
            />
          </div>
          <p className="text-xl ml-3 pt-3 font-semibold">Live Video Call Training</p>
          <p className="ml-3 text-[18px]">$40/<span className="text-[15px] font-semibold">1hr.</span></p>
          <p className="mx-4 py-2">
            Get in shape from the comfort of your own home. No need for crowded
            gyms or expensive equipment. Our personal trainers will ensure
            you're working out with proper form and keep you accountable.
          </p>
          <div className="w-full text-center pb-10 pt-3 text-2xl lg:pb-0">
            <Link href={"/contact"} className="font-semibold">Schedule Now</Link>
          </div>
        </div>
        <div className="lg:w-[375px]">
          <div>
            <Image
              src={introImg}
              alt="weights"
              width={500}
              className="rounded-md"
            />
          </div>
          <p className="text-xl ml-3 pt-3 font-semibold">In Person Training</p>
          <p className="ml-3 text-[18px]">$65/<span className="text-[15px] font-semibold">1hr.</span></p>
          <p className="mx-4 py-2">
            In person training can happen anywhere. At your local gym, a
            beautiful park, or in home, our personal trainers will come to you.
            We bring all the equipment you'll need to get in shape.
          </p>
          <div className="w-full text-center pb-10 pt-3 text-2xl lg:pb-0">
            <Link href={"/contact"} className="font-semibold">Schedule Now</Link>
          </div>
        </div>
        <div className="lg:w-[375px]">
          <div>
            <Image
              src={introImg}
              alt="weights"
              width={500}
              className="rounded-md"
            />
          </div>
          <p className="text-xl ml-3 pt-3 font-semibold">Group Pricing</p>
          <p className="ml-3 text-[18px]">Groups of 2 or more: $40/<span className="text-[15px] font-semibold">1hr.</span> per person</p>
          <p className="mx-4 py-2">
            Exercise can be a fun group activity. When working out in a group
            it's easier to keep each other accountable. Group work outs are also
            great for team building and bringing people closer together.
          </p>
          <div className="w-full text-center pt-3 text-2xl lg:pb-0">
            <Link href={"/contact"} className="font-semibold">Schedule Now</Link>
          </div>
        </div>
      </div>
      {/* <div className="w-2/3 lg:max-w-[1200px] h-1 bg-black rounded-md m-auto"></div> */}
      <div className="text-center py-12 bg-button-secondary text-font-secondary lg:w-[1200px] m-auto lg:rounded-md">
        <div>
          <p className="text-2xl font-semibold">Programs</p>
        </div>
        <div className="text-center">
          <div>
            <Link href={"/programs"} className="text-xl pt-3 font-medium"><span className="lg:hidden">Tap</span><span className="hidden lg:inline">Click</span> for more information</Link>
          </div>
          <div className="flex flex-wrap py-1 justify-between mx-4 lg:mx-8 lg:gap-20 lg:justify-center">
            <div>
              <div className="py-3 text-xl">
                <Link href="/programs/stretching">Stretching</Link>
              </div>
              <div className="py-3 text-xl">
                <Link href="/programs/cardio">Cardio</Link>
              </div>
              <div className="py-3 text-xl">
                <Link href="/programs/healthandwellness">
                  Health & Wellness
                </Link>
              </div>
              <div className="py-3 text-xl">
                <Link href="/programs/yoga">Yoga</Link>
              </div>
            </div>
            <div>
              <div className="py-3 text-xl">
                <Link href="/programs/strengthtraining">Strength Training</Link>
              </div>
              <div className="py-3 text-xl">
                <Link href="/programs/weightloss">Weight Loss</Link>
              </div>
              <div className="py-3 text-xl">
                <Link href="/programs/seniorfitness">Senior Fitness</Link>
              </div>
              <div className="py-3 text-xl">
                <Link href="/programs/youthfitness">Youth Programs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-2/3 lg:max-w-[1200px] h-1 bg-black rounded-md m-auto"></div> */}
      <div className="text-center pb-3 pt-12">
        <Link className="text-2xl font-semibold" href="/nutrition">
          Nutrition
        </Link>
      </div>
      <div className="w-screen flex flex-col justify-center m-auto lg:max-w-[1200px]">
        <p className="mx-4 pb-3 max-w-6xl">
          Nutrition is very important when it comes to reaching your fitness
          goals. At Maximum Fitness we don't believe in crash dieting and binge
          eating, our nutrition plans and cooking classes are designed to help
          you live a healthier lifestyle and still eat delicious food. 
        </p>
        <p className="text-center pb-3 mx-6">1 month of lifestyle guidance and nutrition plan $300</p>
      </div>
      <div className="text-center">
        <Link className="text-xl font-semibold" href="/nutrition">
          More Info
        </Link>
      </div>
    </>
  );
}
