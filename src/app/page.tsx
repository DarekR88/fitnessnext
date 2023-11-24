"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { BurgerMenu } from "@/components/BurgerMenu";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";
import WeightImg from "../../public/images/weights.jpg";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <Image src={WeightImg} alt="weights" width={500} />
        </div>
        <p>
          At Maximum Fitness your health and wellness are our priority. Our
          cutting edge training regiments and nutrition plans cover all the
          bases when it comes to reaching your goals
        </p>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="lg:w-1/5">
          <div>
            <Image src={WeightImg} alt="weights" width={500} />
          </div>
          <p>
            Evaluations are completely free and can be done in person at the
            location of your choosing, through video chat, or by phone. Your
            comfort is key to the process.
          </p>
        </div>
        <div className="lg:w-1/5">
          <div>
            <Image src={WeightImg} alt="weights" width={500} />
          </div>
          <p>
            After you've been evaluated by one of our qualified personal
            trainers, our cutting edge fitness AI will generate an exercise
            program specific to your needs.
          </p>
        </div>
        <div className="lg:w-1/5">
          <div>
            <Image src={WeightImg} alt="weights" width={500} />
          </div>
          <p>
            Nutrition is just as important as exercise when it comes to
            achieving fitness goals. Meal plans, nutritional education, and
            cooking guidance are all available from Ignition Fitness.
          </p>
        </div>
      </div>
    </>
  );
}
