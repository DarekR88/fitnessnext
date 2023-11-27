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
        blurb="Available 6am-11pm every day"
      />
      <div className="text-center flex flex-col">
        <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="pb-3 text-2xl"
        >
          Phone:(123)-456-789
        </a>
        <a
          href="mailto:darekradke2@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="pb-3 text-2xl"
        >
          E-mail:MaximumFit@gmail.com
        </a>
      </div>
      <MoreInfo />
    </>
  );
}
