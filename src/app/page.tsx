"use client"

import Image from "next/image";
import React, { useState } from 'react';
import { Raleway } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/NavBar";
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
      <NavBar isOpen={isOpen} handleClick={handleClick}/>
    </>
  );
}
