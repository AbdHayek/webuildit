import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="relative rounded-[50px] border-b-[50px]">
      <footer className="relative  text-white pb-10 lg:px-[10%]  md:px-[5%] overflow-hidden">
        {/* Main Footer Content */}
        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white">
          {/* Logo & Socials */}
          <div>
            <div>
              <Image
                width={500}
                height={200}
                alt="Site Logo"
                src="/assets/Footer/logo.png"
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <FaInstagram className="w-6 h-6 text-white/80 hover:text-purple-400 cursor-pointer" />
              <FaLinkedinIn className="w-6 h-6 text-white/80 hover:text-purple-400 cursor-pointer" />
              <FaFacebookF className="w-6 h-6 text-white/80 hover:text-purple-400 cursor-pointer" />
            </div>
          </div>

          <div></div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Career Tips</a>
              </li>
              <li>
                <a href="#">Career</a>
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
            <div className="mt-[10%]">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-sm text-white/70">483920, Indonesia</p>
              <p className="text-sm text-white/70">Lampung 22/2/5, Office 4</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
