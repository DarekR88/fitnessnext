"use client";

import Link from "next/link";


export function Footer() {
  return (
    <>
      <div className="flex flex-row">
        <p className="text-3xl">Maximum Fitness</p>
        <Link href={"/contact"}>Free Evaluations!</Link>
        <p></p>
      </div>
    </>
  );
}
