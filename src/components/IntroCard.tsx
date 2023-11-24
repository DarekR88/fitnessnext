"use client";

import Image from "next/image";
import Link from "next/link";
import WeightImg from "../../public/images/weights.jpg";

export function IntroCard() {
  return (
    <>
      <div className="fixed bg-black">
        <div>
          <Image
            src={WeightImg}
            alt="weights"
            width={500}
            className="opacity-50"
          />
        </div>
        <div className="absolute text-white bottom-0 right-3">
          <p className="text-7xl">About</p>
        </div>
      </div>
    </>
  );
}
