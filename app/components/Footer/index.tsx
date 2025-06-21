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
      <footer className="relative  text-white pb-20 px-6 text-center  lg:text-left md:text-left rounded-b-full">
        {/* Main Footer Content */}
        <div className="relative  rounded-b-[50px] border-b-[0.5px] border-transparent z-10 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white pb-[10%] lg:px-[10%]  md:px-[5%] ">
          {/* Logo & Socials */}
          <div className="lg:block md:block    flex flex-col items-center">
            <div>
              <Image
                width={500}
                height={200}
                alt="Site Logo"
                src="/assets/Footer/logo.png"
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <FaInstagram className="w-6 h-6 text-white/80  hover:text-purple-400 cursor-pointer" />
              <FaLinkedinIn className="w-6 h-6 text-white/80 hover:text-purple-400 cursor-pointer" />
              <FaFacebookF className="w-6 h-6 text-white/80 hover:text-purple-400 cursor-pointer" />
            </div>
          </div>

          <div></div>

          {/* Pages Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-white/70">
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
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-white/70">+1 (999) 888-77-66</p>
              <p className="text-sm text-white/70">hello@niskalastd.com</p>
            </div>

            {/* Location */}
            <div className="mt-[20%]">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-sm text-white/70">483920, Indonesia</p>
              <p className="text-sm text-white/70">Lampung 22/2/5, Office 4</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0  w-full h-10 bg-gradient-to-bl from-[##7305FF] via-white to-[##7305FF] rounded-b-full pointer-events-none blur-[50px] " />
    </div>
  );
}
