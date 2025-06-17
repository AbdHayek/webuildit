"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/assets/Navbar/logo.png"
                alt="Site Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div>
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-white p-2  bg-transparent flex items-center cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-white" // icon color
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Animated Overlay Menu */}
          <div
            className={`
                  fixed inset-0 z-[9999999] 
                  transition-opacity transition-transform duration-500 ease-in-out
                  origin-top-right transform
                  ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-0 pointer-events-none"}
                  font-medium leading-normal w-full h-screen
                  bg-[#070322] bg-[url('/assets/Navbar/background-menu.png')] bg-cover bg-center bg-no-repeat
                  flex flex-col items-center justify-center text-white text-[33px] uppercase
                `}>


            {/* Close Button inside overlay */}
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-[4%] right-[10%] z-[70] p-2 rounded-full border border-white cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Items */}
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-purple-300"
            >
              Home
            </a>
            <a
              href="/#service"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-purple-300"
            >
              Services
            </a>
            <a
              href="/about_us"
              className="block py-2 hover:text-purple-300"
            >
              About US
            </a>
            <a
              href="/contact_us"
              className="block py-2 hover:text-purple-300"
            >
              Contact
            </a>
            <a
              href="/blog"
              className="block py-2 hover:text-purple-300"
            >
              Blog
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
