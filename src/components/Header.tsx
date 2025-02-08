"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoHeartOutline, IoSearch, IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FBEBB5] px-4 py-4 shadow-md w-full">
      <header className="text-black">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-semibold">LOGO</div>

          {/* Desktop Navigation (Hidden on Small Screens) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-900">
              Shop
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <Link href="/myAccount"><FaRegUser className="text-black size-4 hidden sm:block" /></Link>
            <IoSearch className="text-black size-5" />
            <IoHeartOutline className="text-black size-5 hidden sm:block" />
            <IoCartOutline className="text-black size-5" />

            {/* Burger Menu Icon for Mobile */}
            <button
              className="md:hidden text-black text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-[#FBEBB5] z-50 flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          {/* Close Button */}
          <button className="absolute top-5 right-5 text-4xl" onClick={() => setIsOpen(false)}>
            <IoClose />
          </button>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col items-center gap-6 text-xl font-medium">
            <Link href="/" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="/about" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
