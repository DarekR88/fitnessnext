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
      <div className="flex flex-wrap justify-center items-center lg:pb-6 xl:gap-4">
        <div className="w-full h-64 overflow-hidden bg-black md:w-1/3 lg:h-80">
          <div>
            <Image
              src={introImg}
              alt="weights"
              width={500}
              className="opacity-50"
            />
          </div>
        </div>
        <div className="md:w-1/4">
        <div className="text-center">
          <p className="text-2xl py-2">{title}</p>
        </div>
          <p className="mx-4 pb-4">{blurb}</p>
        </div>
      </div>
    </>
  );
}
