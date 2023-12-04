"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import WeightImg from "../../public/images/weights.jpg";

type IntroCardProps = {
  introImg: StaticImageData;
  title: string;
  blurb: string;
};

export function IntroCard({ introImg, title, blurb }: IntroCardProps) {
  return (
    <>
      <div className="flex flex-wrap justify-center lg:py-12 bg-gradient-to-b from-[#002F3D] to-[#001F29]">
        <div className="w-full max-h-max overflow-hidden md:w-1/3 lg:w-[600px] lg:h-80 lg:rounded-md">
          <Image
            src={introImg}
            alt="weights"
            width={600}
          />
        </div>
        <div className="md:w-1/4 lg:pt-[20px] lg:w-[600px] text-font-secondary lg:rounded-r-md">
          <div className="text-left ml-4">
            <p className="text-3xl py-2 font-semibold text-font-secondary lg:text-5xl">{title}</p>
          </div>
          <p className="mx-4 pb-4">{blurb}</p>
        </div>
      </div>
    </>
  );
}
