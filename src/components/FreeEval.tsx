"use client";

import Link from "next/link";

export function FreeEval() {
  return (
    <>
      <div className="flex lg:my-9 w-screen justify-center items-center">
        <div className="lg:w-[775px] m-auto h-[100px] lg:h-[85px] text-center pt-[20px] lg:pt-[20px] text-font-primary bg-gradient-to-b from-button-primary to-yellow-400 lg:rounded-md lg:hover:bg-gradient-to-t">
          <Link
            href={"/contact"}
            className="text-3xl font-BebasNeue lg:text-5xl tracking-widest"
          >
            Call or Text for a Free Evaluation
          </Link>
        </div>
      </div>
    </>
  );
}
