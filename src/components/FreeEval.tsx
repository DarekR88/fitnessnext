"use client";

import Link from "next/link";

export function FreeEval() {
  return (
    <>
      <div className="w-screen h-16 text-center justify-center">
        <Link href={"/contact"} className="text-xl">
          Free Evaluations!
        </Link>
      </div>
    </>
  );
}
