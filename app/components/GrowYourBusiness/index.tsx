// components/GrowYourBusiness.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./GrowYourBusiness.module.scss";

const bubbles = [
  {
    id: "how",
    label: "How It Works?",
    background: "from-[#8448F1] to-[#442C70]",
  },
  {
    id: "who",
    label: "Who is this for?",
    background: "from-[#408BEC] to-[#002A78]",
  },
  {
    id: "why",
    label: "Why Choose Us?",
    background: "from-[#DA59A6] to-[#822E60]",
  },
];

export default function GrowYourBusiness() {
  const [centerId, setCenterId] = useState("who");
  const [positions, setPositions] = useState({
    how: "top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2",
    who: "right-[18%] top-1/3",
    why: "left-[18%] top-1/3",
  });

  useEffect(() => {
    if (centerId === "how") {
      setPositions({
        how: "top-[20%]  left-1/2 -translate-x-1/2 -translate-y-1/2",
        who: "right-[18%] top-1/3",
        why: "left-[18%] top-1/3",
      });
    }

    if (centerId === "who") {
      setPositions({
        how: "left-[18%] top-1/3",
        who: "top-[20%]  left-1/2 -translate-x-1/2 -translate-y-1/2",
        why: "right-[18%] top-1/3",
      });
    }

    if (centerId === "why") {
      setPositions({
        how: "right-[18%] top-1/3",
        who: "left-[18%] top-1/3",
        why: "top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2",
      });
    }
  }, [centerId]);

  return (
    <div className="mt-[10%] mb-[50%] mx-auto">
      {" "}
      {/* CONTAINER ADDED */}
      <div className="text-center mb-20">
        <h2 className="font-medium text-[40px]"> Grow Your Business</h2>
        <p className="font-medium text-[40px] mt-2 text-gray-300">With Us</p>
      </div>
      <div className="h-screen relative">
        <div className="absolute top-[0%] right-[10%] left-[10%]">
          <svg
            width="1216"
            height="1216"
            viewBox="0 0 1216 1216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="608" cy="608" r="607.5" stroke="#B929FF" />
          </svg>
        </div>
        <div className="absolute top-[18%] right-[18%] left-[18%]">
          <svg
            width="992"
            height="968"
            viewBox="0 0 992 968"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M496 1C769.404 1 991 217.269 991 484C991 750.731 769.404 967 496 967C222.596 967 1 750.731 1 484C1 217.269 222.596 1 496 1Z"
              stroke="url(#paint0_linear_274_1420)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_274_1420"
                x1="991.075"
                y1="374"
                x2="-24.9784"
                y2="376.38"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#8A4EF6" stop-opacity="0.5" />
                <stop offset="1" stop-color="#AF04FF" stop-opacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animate bubbles */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            onClick={() => setCenterId(bubble.id)}
            className={`absolute cursor-pointer p-2 w-[150px] h-[150px] rounded-full flex items-center justify-center text-[25px] font-semibold transition-all duration-500 bg-gradient-to-b ${
              bubble.background
            }  shadow-lg ${positions[bubble.id]}`}
            whileHover={{ scale: 1.1 }}
            layout
          >
            <span className="px-2 text-center">{bubble.label}</span>
          </motion.div>
        ))}

        {/* Center Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={centerId + "-content"}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[40%] bottom-0 left-1/2 transform -translate-x-1/2 text-center"
          >
            {centerId === "who" && (
              <section className="relative w-full flex items-center justify-center overflow-hidden">
                <div className="relative w-[646px] h-[680px] rounded-full overflow-hidden">
                  <img
                    src="http://localhost:3000/_next/image?url=%2Fassets%2FService%2Fweb_development.png&w=640&q=75"
                    alt="Visual Process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-pink-500/50 mix-blend-multiply" />
                  <div className="absolute inset-0 flex flex-col justify-center px-4 text-white text-center">
                    <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
                      Step-by-step
                      <br />
                      Process With
                      <br />
                      Visuals
                    </h2>
                  </div>
                </div>
              </section>
            )}
            {centerId === "how" && (
              <section className="relative w-full flex items-center justify-center overflow-hidden">
                {/* Circular cropped background image with pink overlay */}
                <div className="relative w-[646px] h-[680px] rounded-full overflow-hidden">
                  <img
                    src="http://localhost:3000/_next/image?url=%2Fassets%2FService%2Fweb_development.png&w=640&q=75"
                    alt="Visual Process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-pink-500/50 mix-blend-multiply" />
                  <div className="absolute inset-0 flex flex-col  justify-center px-4 text-white text-center">
                    <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
                      Step-by-step
                      <br />
                      Process With
                      <br />
                      Visuals
                    </h2>
                  </div>
                </div>
              </section>
            )}
            {centerId === "why" && (
              <section className="relative w-full flex items-center justify-center overflow-hidden">
                {/* Circular cropped background image with pink overlay */}
                <div className="relative w-[646px] h-[680px] rounded-full overflow-hidden">
                  <img
                    src="http://localhost:3000/_next/image?url=%2Fassets%2FService%2Fweb_development.png&w=640&q=75"
                    alt="Visual Process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-pink-500/50 mix-blend-multiply" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white text-center">
                    <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
                      Step-by-step
                      <br />
                      Process With
                      <br />
                      Visuals
                    </h2>
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
