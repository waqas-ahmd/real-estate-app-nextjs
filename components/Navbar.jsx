import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "@react-icons/all-files/io5/IoMenuOutline";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  return (
    <nav className="w-full px-4 py-2 flex flex-col items-center fixed top-0 z-50 bg-primary backdrop-blur-sm">
      <div className="w-full max-w-5xl flex flex-row items-center justify-between">
        <Link href="/">
          <Image height={50} width={160} alt="Logo" src="/logo.svg" />
        </Link>
        <div className="text-3xl md:hidden text-white cursor-pointer">
          {mobileMenu ? (
            <IoCloseOutline onClick={() => setMobileMenu(false)} />
          ) : (
            <IoMenuOutline onClick={() => setMobileMenu(true)} />
          )}
        </div>

        {/* Desktop Links */}
        <div
          className={`hidden md:flex flex-row gap-8 font-medium text-secondary`}
        >
          <Link
            className="border-b-2 border-transparent hover:border-white hover:text-white duration-500 py-px px-1 transition-all"
            href="/search"
          >
            Search
          </Link>
          <Link
            className="border-b-2 border-transparent hover:border-white hover:text-white duration-500 py-px px-1 transition-all"
            href="/about"
          >
            About
          </Link>
          <Link
            className="border-b-2 border-transparent hover:border-white hover:text-white duration-500 py-px px-1 transition-all"
            href="/contact"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            height: "calc(100vh - 66.5px)",
            transform: `${mobileMenu ? "translateX(0%)" : "translateX(100%)"}`,
          }}
          className={`fixed w-2/3 max-w-[280px] right-0 p-4 top-[66.5px] flex flex-col gap-4 bg-primary1 font-medium text-white md:hidden transition-all`}
        >
          <Link href="/search">Search</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
