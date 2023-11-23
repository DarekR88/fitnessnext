"use client";

import Image from "next/image";
import Link from "next/link";
import WeightImg from "../../public/images/weights.jpg";

export function IntroCard() {
  return (
    <>
      <div className="w-screen">
        <Image src={WeightImg} alt="weights" />
      </div>
    </>
  );
}
