"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import WeightImg from "../../public/images/weights.jpg"

type ThreeTilesProps = {
  T1Img: StaticImageData,
  T1Title: string,
  T1Blurb: string,
  T1Link: string,
  T2Img: StaticImageData,
  T2Title: string,
  T2Blurb: string,
  T2Link: string,
  T3Img: StaticImageData,
  T3Title: string,
  T3Blurb: string,
  T3Link: string,
}

export function ThreeTiles({ T1Img, T1Title, T1Link, T2Img, T2Title, T2Link, T3Img, T3Title, T3Link, }: ThreeTilesProps) {
  return (
    <>
      <div>
      <div className="flex flex-wrap pb-3 w-full lg:max-w-[1200px] lg:justify-center lg:m-auto lg:justify-between">
        <div className="lg:w-[390px]">
          <div className="hidden lg:block lg:relative lg:h-[250px] lg:w-[390px] lg:bg-bg-secondary lg:z-0 lg:rounded-md"></div>
          <div className="lg:relative lg:-mt-[250px] lg:h-[250px] overflow-hidden rounded-md z-10 lg:transform transition lg:opacity-50 duration-500 lg:hover:opacity-100 lg:hover:scale-105">
            <Image
              src={WeightImg}
              alt="weights"
              width={500}
              className=""
            />
          </div>
          <div className="text-2xl ml-3 py-2">
            <Link href={`/${T1Link}`} className="font-semibold">
              {T1Title}
            </Link>
          </div>
          <p className="mx-4">
            {}
          </p>
          <div className="w-full text-center pt-3 pb-8 text-2xl lg:pb-0">
            <Link href={`/${T1Link}`} className="font-semibold">
              More Info
            </Link>
          </div>
        </div>
        <div className="lg:w-[390px]">
          <div className="hidden lg:block lg:relative lg:h-[250px] lg:w-[390px] lg:bg-bg-secondary lg:z-0 lg:rounded-md"></div>
          <div className="lg:relative lg:-mt-[250px] lg:h-[250px] overflow-hidden rounded-md z-10 lg:transform transition lg:opacity-50 duration-500 lg:hover:opacity-100 lg:hover:scale-105">
            <Image
              src={WeightImg}
              alt="weights"
              width={500}
              className=""
            />
          </div>
          <div className="text-2xl ml-3 py-2">
            <Link href={"/pricing"} className="font-semibold">
              Affordable Pricing
            </Link>
          </div>
          <p className="mx-4">
            At Maximum Fitness we believe personal training should be
            affordable. At $65/<span className="text-sm">hr.</span> for in
            person sessions and $40/<span className="text-sm">hr.</span> for
            video call sessions we offer the most competitive prices in the
            industry.
          </p>
          <div className="w-full text-center pt-3 pb-8 text-2xl lg:pb-0">
            <Link href={"/pricing"} className="font-semibold">
              More Info
            </Link>
          </div>
        </div>
        <div className="lg:w-[390px]">
          <div className="hidden lg:block lg:relative lg:h-[250px] lg:w-[390px] lg:bg-bg-secondary lg:z-0 lg:rounded-md"></div>
          <div className="lg:relative lg:-mt-[250px] lg:h-[250px] overflow-hidden rounded-md z-10 lg:transform transition lg:opacity-50 duration-500 lg:hover:opacity-100 lg:hover:scale-105">
            <Image
              src={WeightImg}
              alt="weights"
              width={500}
              className=""
            />
          </div>
          <div className="text-2xl ml-3 py-2 z-10">
            <Link href={"/programs"} className="font-semibold">
              Cutting Edge Programs
            </Link>
          </div>
          <p className="mx-4">
            Maximum Fitness training programs are based on the most current
            studies and kinesiology. Our competitive pricing does not effect our
            ability to provide the highest quality training.
          </p>
          <div className="w-full text-center pt-3 pb-6 text-2xl lg:pb-0">
            <Link href={"/programs"} className="font-semibold">
              More Info
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
