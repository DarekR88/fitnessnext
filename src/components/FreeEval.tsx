"use client";

import Link from "next/link";

export function FreeEval() {
  return (
    <>
      <div className="max-w-[1200px] m-auto h-[85px] text-center pt-[30px] mb-[24px] text-font-secondary bg-button-primary lg:rounded-md">
        <Link href={"/contact"} className="text-xl text-font-primary">
          Free Evaluation
        </Link>
      </div>
    </>
  );
}
