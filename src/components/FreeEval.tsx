"use client";

import Link from "next/link";

export function FreeEval() {
  return (
    <>
      <div className="max-w-[1200px] m-auto h-[85px] text-center pt-[25px] lg:pt-[20px] mb-[12px] text-font-primary bg-gradient-to-b from-orange-500 to-yellow-300 lg:rounded-md">
        <Link href={"/contact"} className="text-3xl font-BebasNeue lg:text-5xl tracking-widest">
          Free Evaluation
        </Link>
      </div>
    </>
  );
}
