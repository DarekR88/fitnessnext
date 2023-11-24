"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IntroCard } from "@/components/IntroCard";
import introImg from "../../../public/images/weights.jpg";

export default function Contact() {
  return (
    <>
      <IntroCard
        introImg={introImg}
        title="Contact"
        blurb="Available 8am-10pm every day."
      />
      <div>
        <p></p>
      </div>
    </>
  );
}
