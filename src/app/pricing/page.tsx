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
      <div className="bg-gradient-to-b from-button-secondary to-[#073635] text-font-secondary">
        <div className="max-w-[1200px] m-auto">
          <div>
            <div>
              <p>In Home Personal Training</p>
            </div>
            <div>
              <p>
                $75 <span>for</span> 30 <span>minute</span> Session
              </p>
            </div>
            <div>
              <p>
                $95 <span>for</span> 1 <span>hour</span> Session
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>Virtual Personal Training</p>
            </div>
            <div>
              <p>
                $55 <span>for</span> 30 <span>minute</span> Session
              </p>
            </div>
            <div>
              <p>
                $85 <span>for</span> 1 <span>hour</span> Session
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>Group Personal Training</p>
            </div>
            <div>
              <p>
                Work out with your significant other or host a class for your
                friends. Only Available in-home.
              </p>
            </div>
            <div>
              <p>Couples Workouts</p>
              <p>
                $100 <span>for</span> 30 <span>minute</span> Session
              </p>
            </div>
            <div>
              <p>
                $150 <span>for</span> 1 <span>hour</span> Session
              </p>
            </div>
            <div>
              <p>Groups of 3 or more</p>
            </div>
            <div>
              <p>Routines: HIT, Yoga, Kickboxing, Aerobics</p>
            </div>
            <div>
              <p>
                $120 <span>for</span> 30 <span>minute</span> Session
              </p>
            </div>
            <div>
              <p>
                $175 <span>for</span> 1 <span>hour</span> Session
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
