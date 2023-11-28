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
      <div className="flex flex-wrap justify-center items-center lg:pb-6">
        <div className="w-full h-64 overflow-hidden lg:rounded-md md:w-1/3 lg:w-[600px] lg:h-80">
          <Image
            src={introImg}
            alt="weights"
            width={600}
          />
        </div>
        <div className="md:w-1/4 lg:w-[600px]">
          <div className="text-center lg:text-left ml-4">
            <p className="text-3xl py-2 font-semibold">{title}</p>
          </div>
          <p className="mx-4 pb-4">{blurb}</p>
        </div>
      </div>
    </>
  );
}
