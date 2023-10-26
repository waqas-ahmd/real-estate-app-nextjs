import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary px-4 flex flex-col items-center">
      <div className="py-4 w-full max-w-5xl flex flex-row justify-between items-center border-b border-white">
        <Image
          height={50}
          width={160}
          className="h-12"
          alt="Logo"
          src="/logo.svg"
        />

        <div className="flex flex-row gap-3 items-center">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-white text-2xl cursor-pointer hover:opacity-80"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-white text-2xl cursor-pointer hover:opacity-80"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white text-2xl cursor-pointer hover:opacity-80"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white text-2xl cursor-pointer hover:opacity-80"
          />
        </div>
      </div>

      <div className="w-full py-4 max-w-5xl text-center flex text-sm text-white flex-col gap-2 sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left">
          © Copyright 2023, The Company Name.
        </p>

        <p className="text-center sm:text-left">
          Website Powered by{" "}
          <Link className="font-bold" href="https://markhorlabs.com">
            Markhor Labs
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
