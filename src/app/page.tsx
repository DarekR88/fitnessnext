"use client"

import Image from "next/image";
import React, { useState } from 'react';
import { Raleway } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BurgerMenu } from "@/components/BurgerMenu";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex flex-col gap-4 pt-6 mb- justify-center items-center w-screen">
        <BurgerMenu isOpen={isOpen} handleClick={handleClick}/>
        <p className="font-Raleway text-2xl">Your Way Fitness</p>
        <div className="flex gap-8 px-2 mb-2">
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
