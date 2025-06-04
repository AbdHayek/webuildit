// app/components/HowWeWork/index.tsx

"use client";
import React from "react";

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
    title: "WE AGREE ON PRICING",
    text: "Transparent and fair, no surprises",
    number: "4",
  },
  {
    title: "WE DESIGN & DEVELOP",
    text: "Bringing your vision to life, step by step",
    number: "5",
  },
  {
    title: "WE DELIVER ON TIME",
    text: "Just as promised!",
    number: "6",
  },
];

export default function index() {
  return (
    <section className="bg-[#0B0620] text-white py-20 px-6">
      <h2 className="text-center text-4xl font-bold mb-16">HOW DO WE WORK</h2>
      <div className="relative h-32 w-32 bg-gray-900">
        <div className="absolute top-8 left-0 w-1/2 h-1 bg-purple-500"></div>

        <div className="absolute top-8 left-1/2 w-8 h-8 border-t-4 border-r-4 border-purple-500 rounded-tr-full"></div>

        <div className="absolute top-8 left-[calc(50%+2rem)] w-1 h-16 bg-purple-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-6 relative`}
          >
            <div className="bg-[#1C1533] border border-purple-700 p-6 rounded-lg w-full max-w-[280px]">
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm mt-2">{step.text}</p>
              <div className="text-[90px] font-bold text-purple-700 opacity-20 -mt-4">
                {step.number}
              </div>
            </div>
            {/* Line connector */}
            {index !== steps.length - 2 && (
              <div className="hidden md:block absolute right-[-80px] top-1/2 h-px w-20 bg-purple-500"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
