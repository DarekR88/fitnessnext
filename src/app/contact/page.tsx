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
      <MoreInfo />
    </>
  );
}
