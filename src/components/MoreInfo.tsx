"use client";

import Image from "next/image";
import MailIcon from "../../public/icons/mail_icon.svg";
import XIcon from "../../public/icons/twitter_icon.svg";
import FacebookIcon from "../../public/icons/facebook-svgrepo-com.svg";
import InstaIcon from "../../public/icons/instagram-svgrepo-com.svg";
import TiktokIcon from "../../public/icons/tiktok-logo-4512.svg";
import PhoneSvg from "../../public/icons/phone-svgrepo-com.svg";

export function MoreInfo() {
  return (
    <>
      <div className="max-w-[775px] text-center py-4 bg-gradient-to-b from-button-primary via-yellow-500 to-button-primary max-w-screen m-auto pt-3 lg:py-6 lg:my-9">
        <p className="text-xl px-3 font-BebasNeue tracking-widest lg:text-2xl">
          For more information call, text, or message to get a free evaluation.
        </p>
        <div className="flex justify-center pt-4">
          <div className="flex gap-8 px-2 z-0">
            <a
              href="tel:408-761-4606"
              target="_blank"
              rel="noreferrer noopener"
              className="px-2"
            >
              <Image src={PhoneSvg} alt="pfp" width={23} />
            </a>
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
            {/* <a
              href="mailto:darekradke2@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={XIcon} alt="pfp" width={23} />
            </a> */}
            <a
              href="mailto:darekradke2@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image src={TiktokIcon} alt="pfp" width={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
