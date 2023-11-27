"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";

export default function Pricing() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Pricing"
        blurb="Getting in shape is priceless, but at Maximum Fitness personal training won't break the bank. 
        We offer unbeatable prices and the highest quality service. Pricing is based on in person training ($50 per session), 
        or virtual training ($35 per session). Our process starts with a free evaluation, after your free evaluation our 
        personal trainers will suggest a program that fits your needs. No monthly fees, pay as you go. All sessions are 
        1 hour, longer sessions available upon request"
      />
      <div className="flex flex-wrap pb-6 lg:max-w-[1200px] lg:m-auto lg:justify-between">
        <div className="lg:w-[375px]">
          <div>
            <Image
              src={introImg}
              alt="weights"
              width={500}
              className="rounded-md"
            />
          </div>
          <p className="text-xl ml-3 pt-3">Live Video Call Training</p>
          <p className="ml-3">$35 per Session</p>
          <p className="mx-4 py-2">
            Get in shape from the comfort of your own home. No need for crowded
            gyms or expensive equipment. Our personal trainers will ensure
            you're working out with proper form and keep you accountable.
          </p>
          <div className="w-full text-center pb-3 pt-3 text-2xl lg:pb-0">
            <Link href={"/contact"}>Schedule Now</Link>
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
          <p className="text-xl ml-3 pt-3">In Person Training</p>
          <p className="ml-3">$50 per session</p>
          <p className="mx-4 py-2">
            In person training can happen anywhere. At your local gym, a
            beautiful park, or in home, our personal trainers will come to you.
            We bring all the equipment you'll need to get in shape.
          </p>
          <div className="w-full text-center pb-3 pt-3 text-2xl lg:pb-0">
            <Link href={"/contact"}>Schedule Now</Link>
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
          <p className="text-xl ml-3 pt-3">Group Pricing</p>
          <p className="ml-3">Groups of 2 or more: $40 per person</p>
          <p className="mx-4 py-2">
            Exercise can be a fun group activity. When working out in a group
            it's easier to keep each other accountable. Group work outs are also
            great for team building and bringing people closer together.
          </p>
          <div className="w-full text-center pb-3 pt-3 text-2xl lg:pb-0">
            <Link href={"/contact"}>Schedule Now</Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div>
          <p className="text-2xl">Programs</p>
        </div>
        <div className="text-center">
          <div>
            <p className="text-xl">Click for more information</p>
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
      <div className="text-center p-3">
        <Link className="text-2xl" href="/nutrition">
          Nutrition
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <p className="mx-4 pb-4 max-w-6xl">
          Nutrition is very important when it comes to reaching your fitness
          goals. At Maximum Fitness we don't believe in crash dieting and binge
          eating, our nutrition plans and cooking classes are designed to help
          you live a healthier lifestyle and still eat delicious food.
        </p>
      </div>
      <div className="text-center">
        <Link className="text-xl" href="/nutrition">
          More Info
        </Link>
      </div>
    </>
  );
}
