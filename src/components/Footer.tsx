"use client";

import Link from "next/link";


export function Footer() {
  return (
    <>
      <div className="flex flex-col-reverse justify-center items-center w-screen border-t-2 border-black lg:flex-row lg:px-40 lg:justify-between lg:h-24">
        <p><span>&copy;</span> 2023 Darek Radke</p>
        <p className="text-2xl">Maximum Fitness</p>
        <Link href={"/contact"} className="text-xl">Free Evaluations!</Link>
      </div>
    </>
  );
}
