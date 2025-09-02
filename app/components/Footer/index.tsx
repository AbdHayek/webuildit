'use client';

import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import "./Footer.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function index() {

  const pathname = usePathname();
  const isLoginPage = pathname.includes('/admin');
  if (isLoginPage) return null;

  return (
    <div className="relative">
      <footer className="relative text-white pb-20 px-6 text-center  lg:text-left md:text-left rounded-b-full">
        {/* Main Footer Content */}
        <div className="relative  rounded-b-[50px] border-b-[0.5px] border-transparent z-10 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white pb-[10%] lg:px-[10%]  md:px-[5%] ">
          {/* Logo & Socials */}
          <div className="lg:block md:block  flex flex-col items-center">
            <div>
              <Image
                width={339}
                height={54}
                alt="Site Logo"
                src="/assets/Footer/logo.png"
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/webuildit.ae?igsh=eHE1d25jZ3k3Zm85&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 text-white/80 hover:text-purple-400 cursor-pointer" />
              </a>

              <a
                href="https://www.linkedin.com/company/104582139/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-6 h-6 text-white/80 hover:text-purple-400 cursor-pointer" />
              </a>

            </div>
          </div>

          <div></div>

          {/* Pages Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-medium text-white/70">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#service">Services</Link>
              </li>
              <li>
                <Link href="/about_us">About US</Link>
              </li>
              <li>
                <Link href="/contact_us">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-medium text-white/70">
                <a href="tel:+971505421229" className="hover:underline">
                  +971 505421229
                </a>
              </p>
              <p className="text-medium text-white/70">
                <a href="mailto:contact@webuildit.ae" className="hover:underline">
                  contact@webuildit.ae
                </a>
              </p>

            </div>

            {/* Location */}
            <div className="mt-[20%]">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-medium text-white/70 whitespace-nowrap">Everywhere and Anywhere,
                we don’t   <br/>  have walls, we have Wi-Fi (100% Remotely)
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0  w-full h-10 bg-gradient-to-bl from-[#7305FF] via-[#7305FF] to-[#7305FF] rounded-b-full pointer-events-none blur-[50px] " />
    </div>
  );
}
