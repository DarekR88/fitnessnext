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
        blurb="Available 6am-11pm every day. Serving Houston and most suburbs.
        Don't be shy, just text ''hi'' or give us a call at (123)-456-7890. 
        Send us an E-mail at maxfit@gmail.com, or send a message through social media.
        You'll instantly be connected to a local personal trainer when available. 
        From there you can schedule your free first session and free evaluation."
      />
      <div className="text-center flex flex-col py-6 lg:pt-0 bg-[#001F29] lg:pb-10">
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
      <MoreInfo />
    </>
  );
}
