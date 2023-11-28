"use client";

import Link from "next/link";

export function FreeEval() {
  return (
    <>
      <div className="w-screen h-[85px] text-center pt-[30px] mb-[24px]">
        <Link href={"/contact"} className="text-xl">
          Free Evaluation
        </Link>
      </div>
    </>
  );
}