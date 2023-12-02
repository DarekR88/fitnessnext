"use client";

import Link from "next/link";

export function FreeEval() {
  return (
    <>
      <div className="max-w-[775px] m-auto h-[100px] lg:h-[85px] text-center pt-[20px] lg:pt-[20px] mb-[12px] text-font-primary bg-gradient-to-b from-button-primary to-yellow-300 lg:rounded-md">
        <Link href={"/contact"} className="text-3xl font-BebasNeue lg:text-5xl tracking-widest">
          Call or Text for a Free Evaluation
        </Link>
      </div>
    </>
  );
}
