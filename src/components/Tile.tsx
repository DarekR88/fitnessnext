"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type TileProps = {
  tileImg: StaticImageData;
  title: string;
  blurb: string;
};

export function Tile({ tileImg, title, blurb }: TileProps) {
  return (
    <>
      <div>
        <div>
          <Image
            src={tileImg}
            alt="weights"
            width={500}
          />
        </div>
        <div>
          <p className="text-2xl">{title}</p>
        </div>
      </div>
      <div>
        <p className="mx-4 py-4">{blurb}</p>
      </div>
    </>
  );
}
