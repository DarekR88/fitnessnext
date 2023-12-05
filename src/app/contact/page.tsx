"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import { MoreInfo } from "@/components/MoreInfo";
import introImg from "../../../public/images/james-mckinven-Ohu89iIorIc-unsplash.jpg";

export default function Contact() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Contact"
        blurb="Available 6am-11pm every day. Serving Houston and most suburbs"
      />
      <MoreInfo />
      <div className="text-center flex flex-col py-6 bg-gradient-to-b from-[#002F3D] to-[#001F29] max-w-screen m-auto lg:py-10">
        <a
          href="tel:408-761-4606"
          target="_blank"
          rel="noreferrer noopener"
          className="pb-4 text-2xl m-auto text-font-secondary"
        >
          Phone:(123)-456-789
        </a>
        <a
          href="mailto:darekradke2@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-2xl m-auto text-font-secondary"
        >
          E-mail:MaximumFit@gmail.com
        </a>
      </div>
    </>
  );
}
