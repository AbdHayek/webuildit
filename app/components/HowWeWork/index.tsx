"use client";

import { useEffect, useRef, useState } from "react";
import BorderCard from "../Common/BorderCard";

const steps = [
  {
    title: "WE LISTEN TO YOUR IDEA",
    text: "Tell us what you have in mind!",
    number: "1",
  },
  {
    title: "WE RESEARCH & ANALYZE",
    text: "We dig deep to understand the best approach",
    number: "2",
  },
  {
    title: "WE SHARE OUR SUGGESTIONS",
    text: "Honest advice to make your idea even better",
    number: "3",
  },
  {
    title: "WE DELIVER ON TIME",
    text: "Just as promised!",
    number: "6",
  },

  {
    title: "WE DESIGN & DEVELOP",
    text: "Bringing your vision to life, step by step",
    number: "5",
  },

  {
    title: "WE AGREE ON PRICING",
    text: "Transparent and fair, no surprises",
    number: "4",
  },
];

export default function HowWeWork() {


  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="text-white px-6 py-20 relative bg-gradient-to-b from-[#050114] to-transparent">
      {/* Right-side Gradient Background */}
      <div
        className="absolute right-0 top-[15%] h-[70%] w-[6%] 
            bg-gradient-to-b from-[#7300FF]/100 via-[#FF0084]/40 to-transparent 
            filter blur-3xl"
      ></div>

      {/* Left-side Gradient Background */}
      <div
        className="absolute left-0 bottom-[0%] h-[70%] w-[2.5%] 
            bg-gradient-to-b  via-[#FF0084]/100 to-transparent 
            filter blur-3xl"
      ></div>

      <div
        className={`max-w-7xl mx-auto`}>
        {" "}
        {/* CONTAINER ADDED */}
        <h2 className="text-center text-[40px] font-medium mb-16">
          HOW DO WE WORK
        </h2>
        <div ref={ref}
          className={`transition-opacity duration-2000 ease-in-out transform 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} 
          grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-20 relative`}>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`${(index === 1 || index === 4) && "md:top-[50%]"
                } flex flex-col items-center text-center px-4 sm:px-6 relative`}
            >
              <div className="relative w-[75%] z-[10]  max-w-[90%] sm:max-w-[320px] lg:max-w-[360px]">

                {/* Corner Borders */}
                <BorderCard />

                {/* Step Box */}
                <div className="flex gap-4 sm:gap-2 bg-[#180F37] border border-[#180F37] text-left p-[10%] rounded-2xl w-full">
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#FCFCFC] text-[18px]">
                      {step.title}
                    </h4>
                    <p className="text-sm mt-2 text-[#FCFCFC] text-[14px] font-light pr-[10%]">
                      {step.text}
                    </p>
                  </div>

                  <div
                    className="text-[48px] sm:text-[72px] md:text-[90px] font-bold opacity-50 -mt-2 sm:-mt-4"
                    style={{
                      color: "#180F37",
                      WebkitTextStroke: "1px #9254EC",
                    }}
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Line connectors (shown only on large screens) */}
              {(index === 0 || index === 3) && (
                <div className="hidden lg:block absolute left-[80%] top-[50%] bottom-0">
                  <svg
                    width="181"
                    height="112"
                    viewBox="0 0 181 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2H74.7563C104.618 2 128.823 26.205 128.823 56.0671C128.823 85.9293 150.638 110.134 180.5 110.134"
                      stroke="#9254EC"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              )}
              {index === 2 && (
                <div className="hidden lg:block absolute top-[60%] right-[0%] left-[50%]">
                  <svg
                    width="83"
                    height="176"
                    viewBox="0 0 83 176"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M81.3584 0L81.3584 54.6968C81.3584 76.6122 63.5947 94.3758 41.6793 94.3758C19.7639 94.3758 2.00025 112.14 2.00025 134.055L2.00025 176"
                      stroke="#9254EC"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              )}
              {(index === 1 || index === 4) && (
                <div className="hidden lg:block absolute left-[80%] top-[0%]">
                  <svg
                    width="181"
                    height="112"
                    viewBox="0 0 181 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M180.5 2H101.595C71.7329 2 47.528 26.205 47.528 56.0671C47.528 85.9293 29.8621 110.134 0 110.134"
                      stroke="#9254EC"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
