"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";
import PhoneSvg from "../../../public/icons/phone-svgrepo-com.svg";
import MailIcon from "../../../public/icons/mail_icon.svg";
import XIcon from "../../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../../public/icons/tiktok-logo-4512.svg";

export default function Stretching() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Stretching"
        blurb="Feeling stiff? Want more mobility? Our stretching program is perfect for you. 
        Our patented combination of active, dynamic, and weighted stretching is sure to loosen 
        you up. This program is a great auxiliary for athletes looking to improve their longevity 
        and overall wellness."
      />
      <div className="text-center">
        <p className="text-xl">
          For more information call, text, or message to get a free evaluation.
        </p>
        <div className="flex justify-center py-6">
          <div className="flex gap-8 px-2 mb-2 z-0">
            <a
              href="tel:408-761-4606"
              target="_blank"
              rel="noreferrer noopener"
              className="px-2"
            >
              <Image src={PhoneSvg} alt="pfp" width={23} />
            </a>
            <a
              href="mailto:darekradke2@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={MailIcon} alt="pfp" width={25} />
            </a>
            <a
              href="mailto:darekradke2@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={InstaIcon} alt="pfp" width={27} />
            </a>
            <a
              href="mailto:darekradke2@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={FacebookIcon} alt="pfp" width={25} />
            </a>
            <a
              href="mailto:darekradke2@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={XIcon} alt="pfp" width={23} />
            </a>
            <a
              href="mailto:darekradke2@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={TiktokIcon} alt="pfp" width={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
