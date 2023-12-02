"use client";

import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="relative bottom-0 flex flex-col-reverse justify-center items-center w-screen py-6 bg-button-primary lg:flex-row lg:px-32 lg:justify-between lg:h-24">
        <p>
          <span>&copy;</span> 2023 Darek Radke
        </p>
        <Link href={"/"} className="font-Raleway text-2xl px-3">
          Maximum Fitness
        </Link>
        <Link href={"/contact"} className="text-xl">
          Free Evaluations!
        </Link>
      </div>
    </>
  );
}
