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
      const duration = 1000; // in ms
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
    <motion.div
      ref={ref}
      className="w-12 h-12 p-9 flex items-center justify-center font-medium text-xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      {display}%
    </motion.div>
  );
}
