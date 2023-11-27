"use client";

import Link from "next/link";


export function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen lg:flex-row lg:px-40 lg:justify-between lg:h-36">
        <p className="text-2xl">Maximum Fitness</p>
        <p><span>&copy;</span> 2023 Darek Radke</p>
        <Link href={"/contact"} className="text-xl">Free Evaluations!</Link>
      </div>
    </>
  );
}
