"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";

export default function Programs() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Programs"
        blurb="Exercise shouldn't feel like a chore. Making lifestyle choices that have a positive 
        impact on your overall health and well being shouldn't be punishing. The fitness and nutrition 
        programs from Maximum Fitness are flexible and easily fit in your busy schedule. Gyms are unfriendly and 
        intimidating for people at the beginning of their fitness journey. With Maximum Fitness a highly skilled 
        and educated personal trainer comes directly to you through video call, or in person."
      />
      <div className="flex flex-wrap w-full">
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
            Maximum Fitness offers 1 on 1 training, and training for groups of 2
            or more.
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
      <div></div>
    </>
  );
}
