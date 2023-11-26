"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BurgerMenu } from "@/components/BurgerMenu";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";
import  PhoneSvg  from "../../public/icons/phone-svgrepo-com.svg"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed flex flex-col w-screen h-screen z-10 bg-white text-center pt-20 ${
          isOpen
            ? "transition ease-in-out translate-y-0 duration-500"
            : "transition ease-in-out -translate-y-full duration-500"
        }`}
      >
        <Link onClick={handleClick} className="text-xl" href="/">
          Home
        </Link>
        <Link onClick={handleClick} className="text-xl" href="/about">
          About
        </Link>
        <Link onClick={handleClick} className="text-xl" href="/programs">
          Programs
        </Link>
        <Link onClick={handleClick} className="text-xl" href="/contact">
          Contact
        </Link>
      </div>
      <header className="flex flex-wrap gap-4 p-8 justify-center items-center w-screen lg:flex-row">
        <Link href={"/"} className="font-Raleway text-xl z-0">Maximum Fitness</Link>
        <a
            href="tel:408-761-4606"
            target="_blank"
            rel="noreferrer noopener"
            className="px-2"
          >
            <Image src={PhoneSvg} alt="pfp" width={23} />
          </a>
        <button
          onClick={handleClick}
          className="flex flex-col justify-center items-center z-20 lg:hidden"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
          ></span>
        </button>
        <div className="hidden lg:flex gap-4">
          <Link className="text-xl" href="/about">
            About
          </Link>
          <Link className="text-xl" href="/programs">
            Programs
          </Link>
          <Link className="text-xl" href="/contact">
            Contact
          </Link>
        </div>
        <div className="flex gap-8 px-2 mb-2 z-0">
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={MailIcon} alt="pfp" width={25} />
          </a>
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={InstaIcon} alt="pfp" width={27} />
          </a>
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={FacebookIcon} alt="pfp" width={25} />
          </a>
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={XIcon} alt="pfp" width={23} />
          </a>
          <a
            href="mailto:darekradke2@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={TiktokIcon} alt="pfp" width={25} />
          </a>
        </div>
      </header>
    </>
  );
}
