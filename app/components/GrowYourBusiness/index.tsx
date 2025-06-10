// components/GrowYourBusiness.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const bubbles = [
  { id: "how", label: "How It Works?" },
  { id: "who", label: "Who is this for?" },
  { id: "why", label: "Why Choose Us?" },
];

const positions = {
  how: "left-10 bottom-1/3",
  who: "bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  why: "right-10 bottom-1/3",
};

export default function GrowYourBusiness() {
  const [centerId, setCenterId] = useState("who");

  const getPositionClass = (id: string) => {
    if (id === centerId) {
      return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10";
    }
    return positions[id] + " z-0";
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen mt-[5%] mb-[5%]  text-white overflow-hidden">
      <div className="text-center absolute top-10">
        <h2 className="text-2xl font-bold uppercase">Grow Your Business</h2>
        <p className="text-sm opacity-60">With Us</p>
      </div>

      <div className="relative w-[500px] h-[500px]">
        {/* Animate bubbles */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            onClick={() => setCenterId(bubble.id)}
            className={`absolute cursor-pointer w-24 h-24 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg ${getPositionClass(
              bubble.id
            )}`}
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
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
          >
            {centerId === "who" && (
              <p className="text-lg font-medium opacity-90">
                Ideal for Startups, Enterprises & Outsourcing.
              </p>
            )}
            {centerId === "how" && (
              <p className="text-lg font-medium opacity-90">
                Step-by-step strategy for business growth.
              </p>
            )}
            {centerId === "why" && (
              <p className="text-lg font-medium opacity-90">
                Proven results, expert team & support.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
