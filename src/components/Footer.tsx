"use client";

import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="relative bottom-0 flex flex-col-reverse justify-center items-center w-screen py-6 bg-gradient-to-b from-button-primary to-yellow-400 lg:flex-row lg:px-32 lg:justify-between lg:h-24">
        <p>
          <span>&copy;</span> 2023 Darek Radke
        </p>
        <Link href={"/"} className="font-BebasNeue text-2xl px-3">
          Maximum Fitness
        </Link>
        <Link href={"/contact"} className="text-xl">
          Free Evaluations!
        </Link>
      </div>
    </>
  );
}
