"use client";

import Link from "next/link";
import { useState } from "react";

// components/HeroSection.js
export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "https://www.w3schools.com/howto/photographer.jpg",
      }} // Replace with your image path
    >
      <nav className="shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                Webuild<span className="text-black">IT</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <div className="w-10 h-10 bg-transparent flex items-center justify-center  rounded-full border-white">
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
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="px-4 pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      <div className="absolute inset-0 bg-black/80 flex  items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          <span className="font-black">WE</span>BUILDIT
        </h1>
      </div>

      <div className="absolute inset-0 flex top-[80%] items-center justify-center text-center px-4">
        <div className="mt-10 animate-bounce">
          <svg
            width="59"
            height="57"
            viewBox="0 0 59 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.8147e-06 -2.57897e-06L29.5 21.2687L59 0L59 10.4216L29.5 31.6903L3.35915e-06 10.4216L3.8147e-06 -2.57897e-06ZM2.70837e-06 25.3097L29.5 46.5784L59 25.3097L59 35.7313L29.5 57L2.25283e-06 35.7313L2.70837e-06 25.3097Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
