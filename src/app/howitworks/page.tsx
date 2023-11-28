"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { FreeEval } from "@/components/FreeEval";
import introImg from "../../../public/images/weights.jpg";

export default function HowItWorks() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="How it Works"
        blurb="After a free evaluation, schedule your fist session. 
        One of our highly motivated and professional personal trainers
        will arrive at your home or the location of your choosing (park, 
        complex gym, etc.), or to an online meeting room 15 mins early to 
        set up for your session. Payment is taken at the time of the session."
      />
      <FreeEval />
      <div className="flex flex-wrap pb-3 w-full lg:max-w-[1200px] lg:justify-center lg:m-auto lg:justify-between">
        <div className="lg:w-[375px]">
          <div>
            <Image
              src={introImg}
              alt="weights"
              width={500}
              className="rounded-md"
            />
          </div>
          <div className="text-2xl ml-3 py-2">
            <Link href={"/contact"}>Free Evaluations</Link>
          </div>
          <p className="mx-4">
            Evaluations let us know your fitness level and your goals. With that
            knowledge our skilled personal trainers can craft a unique and
            effective workout program. To schedule your first session just call,
            text, or e-mail. Maximum Fitness is here to help.
          </p>
          <div className="w-full text-center pt-3 pb-8 text-2xl lg:pb-0">
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
          <div className="text-2xl ml-3 py-2">
            <Link href={"/contact"}>Work Out At Home</Link>
          </div>
          <p className="mx-4">
            Get fit in the comfort of your own home. There's no need to go to a
            crowded gym to get a great workout. We bring all the equipment
            you'll need to see real results. Our personal trainers will keep you
            motivated and accountable.
          </p>
          <div className="w-full text-center pt-3 pb-8 text-2xl lg:pb-0">
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
          <div className="text-2xl ml-3 py-2">
            <Link href={"/contact"}>Per Session Payments</Link>
          </div>
          <p className="mx-4">
            Payments are taken per session at the beginning of the session. No
            monthly or hidden fees to worry about and you'll never be charged
            for a session you miss. Sessions are $35 for 1 hour online session
            and $50 for 1 hour in person session.
          </p>
          <div className="w-full text-center pt-3 pb-6 text-2xl lg:pb-0">
            <Link href={"/contact"}>Schedule Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}
