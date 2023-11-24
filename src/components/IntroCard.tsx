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
      <div className="absolute bg-black">
        <div>
          <Image
            src={introImg}
            alt="weights"
            width={500}
            className="opacity-50"
          />
        </div>
        <div className="absolute text-white bottom-0 right-3">
          <p className="text-7xl">{title}</p>
        </div>
      </div>
      <div className="mt-72">
        <p>{blurb}</p>
      </div>
    </>
  );
}
