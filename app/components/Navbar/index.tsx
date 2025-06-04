"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md relative w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src='/assets/Navbar/logo.png'
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

          {isOpen && (
            <div className="absolute inset-0 z-[60] w-full h-screen bg-[#070322] bg-[url('/assets/Navbar/background-menu.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-[33px]">
              {/* Close Button inside overlay */}
              <button
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-[10.5%] z-[70] p-2  rounded-full border border-white cursor-pointer"
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

              {/* Mobile Menu */}
              <Link
                href="/"
                className="block py-2 text-white hover:text-purple-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-white hover:text-purple-300"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block py-2 text-white hover:text-purple-300"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-white hover:text-purple-300"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
