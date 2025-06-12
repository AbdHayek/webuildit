"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedPercent({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1000;
      const step = 10;
      const increment = value / (duration / step);

      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(interval);
        }
        setDisplay(Math.round(start));
      }, step);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="relative w-10 h-10 p-8 flex items-center justify-center">
      {/* Animated Circular Border */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#CB97FF ${display}%, #7320E35E ${display}%)`,
          maskImage: "radial-gradient(circle, transparent 60%, black 61%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 61%)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      />

      {/* Center Text */}
      <motion.div
        className="text-white font-medium    text-xl z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        {display}%
      </motion.div>
    </div>
  );
}
