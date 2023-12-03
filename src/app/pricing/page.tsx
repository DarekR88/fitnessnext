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
      <div className="px-4 py-4 bg-gradient-to-b from-button-secondary to-[#073635] text-font-secondary lg:py-12">
        <div className="lg:flex max-w-[1200px] m-auto">
          <div>
            <div>
              <div>
                <p className="text-3xl">In Home Personal Training</p>
              </div>
              <div>
                <p className="text-xl">
                  $75 <span>for</span> 30 <span>minute</span> Session
                </p>
              </div>
              <div>
                <p className="text-xl">
                  $95 <span>for</span> 1 <span>hour</span> Session
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="text-3xl">Virtual Personal Training</p>
              </div>
              <div>
                <p className="text-xl">
                  $55 <span>for</span> 30 <span>minute</span> Session
                </p>
              </div>
              <div>
                <p className="text-xl">
                  $85 <span>for</span> 1 <span>hour</span> Session
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-3xl">Group Personal Training</p>
            </div>
            <div>
              <p>
                Work out with your significant other or host a class for your
                friends. Only Available in-home.
              </p>
            </div>
            <div>
              <p className="text-2xl">Couples Workouts</p>
              <p className="text-xl">
                $100 <span>for</span> 30 <span>minute</span> Session
              </p>
            </div>
            <div>
              <p className="text-xl">
                $150 <span>for</span> 1 <span>hour</span> Session
              </p>
            </div>
            <div>
              <p className="text-2xl">Groups of 3 or more</p>
            </div>
            <div>
              <p>Routines: HIT, Yoga, Kickboxing, Aerobics</p>
            </div>
            <div>
              <p className="text-xl">
                $120 <span>for</span> 30 <span>minute</span> Session
              </p>
            </div>
            <div>
              <p className="text-xl">
                $175 <span>for</span> 1 <span>hour</span> Session
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
