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
        personal trainers will suggest a program that fits your needs. No monthly fees, pay as you go."
      />
      <div className="flex flex-wrap w-full lg:justify-center lg:gap-12">
        <div className="lg:w-1/5">
          <div>
            <Image src={introImg} alt="weights" width={500} />
          </div>
          <p className="ml-3 pt-3">Live Video Call Training</p>
          <p className="mx-4 pb-4 pt-2">
            Get in shape from the comfort of your own home. Our personal
            trainers will ensure you're working out with proper form and keep
            you accountable.
          </p>
        </div>
        <div className="lg:w-1/5">
          <div>
            <Image src={introImg} alt="weights" width={500} />
          </div>
          <p className="ml-3 pt-3">In Person Training</p>
          <p className="mx-4 pb-4 pt-2">
            In person training can happen anywhere. At your local gym, a
            beautiful park, or in home, our personal trainers will come to you.
            Maximum Fitness offers 1 on 1 training, and training for groups as
            well.
          </p>
        </div>
        <div className="lg:w-1/5">
          <div>
            <Image src={introImg} alt="weights" width={500} />
          </div>
          <p className="ml-3 pt-3">Hybrid</p>
          <p className="mx-4 pb-4 pt-2">
            Life can be hectic, scheduling with Maximum Fitness is easy. To
            ensure a high level of success our personal trainers are available
            to train you in person or online based on your individual needs.
          </p>
        </div>
      </div>
      <div className="text-center">
        <div>
          <p className="text-xl">Programs</p>
        </div>
        <div className="text-center">
        <div>
          <p className="text-xl">Click for more information</p>
        </div>
        <div className="flex flex-wrap p-1 justify-center lg:gap-20">
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
      </div>
      <div className="text-center p-3">
        <Link className="text-xl" href="/nutrition">
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
