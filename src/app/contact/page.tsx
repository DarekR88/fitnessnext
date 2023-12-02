"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo";
import introImg from "../../../public/images/weights.jpg";

export default function Contact() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Contact"
        blurb="Available 6am-11pm every day. Serving Houston and most suburbs"
      />
      <div className="text-center flex flex-col pt-3 lg:pt-0 bg-button-secondary max-w-[1200px] m-auto lg:pt-6 lg:pb-6 lg:rounded-md">
        <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="pb-3 text-2xl m-auto"
        >
          Phone:(123)-456-789
        </a>
        <a
          href="mailto:darekradke2@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="pb-3 text-2xl m-auto"
        >
          E-mail:MaximumFit@gmail.com
        </a>
      </div>
      <MoreInfo />
    </>
  );
}
