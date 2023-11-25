"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type IntroCardProps = {
  tileImg: StaticImageData;
  title: string;
  blurb: string;
};

export function Tiles({ tileImg, title, blurb }: IntroCardProps) {
  return (
    <>
      <div className="absolute bg-black">
        <div>
          <Image
            src={tileImg}
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
        <p className="mx-4">{blurb}</p>
      </div>
    </>
  );
}
