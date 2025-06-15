"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./GrowYourBusiness.module.scss";

const bubbles = [
  {
    id: "how",
    label: "How It Works?",
    background: "from-[#DA59A6] to-[#822E60]",
    bordercolor: "#DA59A6",
  },
  {
    id: "who",
    label: "Who is this for?",
    background: "from-[#8448F1] to-[#442C70]",
    bordercolor: "#8448F1",
  },
  {
    id: "why",
    label: "Why Choose Us?",
    background: "from-[#408BEC] to-[#002A78]",
    bordercolor: "#408BEC",
  },
];

export default function GrowYourBusiness() {

  const [positionsBubble, setPositionsBubble] = useState({
    first: "top-[5%] left-[27%]",
    second: "top-[50%] left-[11%]",
    third: "top-[5%] right-[27%]",
    forth: "top-[50%] right-[11%]",
  });

  const CONTAINER_WIDTH = 1100;
  const CONTAINER_HEIGHT = 1200;
  const RADIUS = 400;
  const CENTER = { x: CONTAINER_WIDTH / 2, y: CONTAINER_HEIGHT / 2 };

  const ids = ["how", "who", "why"];
  const [centerId, setCenterId] = useState("who");

  const getAngle = (id: string) => {
    const centerIndex = ids.indexOf(centerId);
    const currentIndex = ids.indexOf(id);
    const angleStep = (2 * Math.PI) / ids.length;
    const relativeIndex = (currentIndex - centerIndex + ids.length) % ids.length;
    return -Math.PI / 2 + relativeIndex * angleStep;
  };

  const calculatePosition = (id: string) => {
    const angle = getAngle(id);
    const x = CENTER.x + RADIUS * Math.cos(angle);
    const y = CENTER.y + RADIUS * Math.sin(angle);

    // Convert to percentage
    const leftPercent = (x / CONTAINER_WIDTH) * 100;
    const topPercent = (y / CONTAINER_HEIGHT) * 100;

    return {
      left: `${leftPercent}%`,
      top: `${topPercent}%`,
    };
  };


  return (
    <div className="mt-[15%]  min-h-[1500px] relative">
      {/* Right-side Gradient Background */}
      <div
        className="absolute right-0 top-[5%] h-[40%] w-[6%] 
            bg-gradient-to-b from-[#7300FF]/100 via-[#FF0084]/40 to-transparent 
            filter blur-3xl"
      ></div>

      {/* Left-side Gradient Background */}
      <div
        className="absolute left-0 top-[20%] h-[40%] w-[2.5%] 
            bg-gradient-to-b  from-[#7300FF]/100 via-[#FF0084]/40 to-transparent
            filter blur-3xl"
      ></div>

      {/* bottom-side Gradient Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-[9999] bg-gradient-to-t from-[#070322]/100 via-[#070322]/75 to-[#070322]/75  backdrop-blur-xl pointer-events-none" />

      {/* CONTAINER ADDED */}
      <div className="text-center mb-30">
        <h2 className="font-medium text-[40px]"> Grow Your Business</h2>
        <p className="font-medium text-[40px] mt-2 text-gray-300">With Us</p>
      </div>
      <div className="h-screen relative">
        
        {/* Animate small bubbles */}
        <motion.div
          className={`absolute ${positionsBubble.first} z-[999999] transition-all duration-500`}
        >
          <svg
            width="98"
            height="98"
            viewBox="0 0 98 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="48.7963"
              cy="48.7962"
              r="39.8421"
              transform="rotate(165 48.7963 48.7962)"
              fill={
                centerId === `how`
                  ? "#DA59A6"
                  : centerId === `who`
                    ? "#8448F1"
                    : "#408BEC"
              }
              fillOpacity="0.25"
            />
            <g filter="url(#filter0_f_274_1429)">
              <circle
                cx="48.7966"
                cy="48.7964"
                r="26.5614"
                transform="rotate(165 48.7966 48.7964)"
                fill={
                  centerId === `how`
                    ? "#DA59A6"
                    : centerId === `who`
                      ? "#8448F1"
                      : "#408BEC"
                }
                fillOpacity="0.76"
              />
            </g>
            <g
              style={{ mixBlendMode: "plus-lighter" }}
              filter="url(#filter1_f_274_1429)"
            >
              <circle
                cx="50.1515"
                cy="49.579"
                r="9.05877"
                transform="rotate(165 50.1515 49.579)"
                fill="white"
                fillOpacity="0.76"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_274_1429"
                x="19.2286"
                y="19.2284"
                width="59.136"
                height="59.136"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1.5"
                  result="effect1_foregroundBlur_274_1429"
                />
              </filter>
              <filter
                id="filter1_f_274_1429"
                x="39.2906"
                y="38.7179"
                width="21.7219"
                height="21.7221"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.9"
                  result="effect1_foregroundBlur_274_1429"
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          className={`absolute ${positionsBubble.second} z-[999999] transition-all duration-500`}
        >
          <svg
            width="58"
            height="58"
            viewBox="0 0 98 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="48.7963"
              cy="48.7962"
              r="39.8421"
              transform="rotate(165 48.7963 48.7962)"
              fill={
                centerId === `how`
                  ? "#DA59A6"
                  : centerId === `who`
                    ? "#8448F1"
                    : "#408BEC"
              }
              fillOpacity="0.25"
            />
            <g filter="url(#filter0_f_274_1429)">
              <circle
                cx="48.7966"
                cy="48.7964"
                r="26.5614"
                transform="rotate(165 48.7966 48.7964)"
                fill={
                  centerId === `how`
                    ? "#DA59A6"
                    : centerId === `who`
                      ? "#8448F1"
                      : "#408BEC"
                }
                fillOpacity="0.76"
              />
            </g>
            <g
              style={{ mixBlendMode: "plus-lighter" }}
              filter="url(#filter1_f_274_1429)"
            >
              <circle
                cx="50.1515"
                cy="49.579"
                r="9.05877"
                transform="rotate(165 50.1515 49.579)"
                fill="white"
                fillOpacity="0.76"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_274_1429"
                x="19.2286"
                y="19.2284"
                width="59.136"
                height="59.136"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1.5"
                  result="effect1_foregroundBlur_274_1429"
                />
              </filter>
              <filter
                id="filter1_f_274_1429"
                x="39.2906"
                y="38.7179"
                width="21.7219"
                height="21.7221"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.9"
                  result="effect1_foregroundBlur_274_1429"
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          className={`absolute ${positionsBubble.third} z-[999999] transition-all duration-500`}
        >
          <svg
            width="98"
            height="98"
            viewBox="0 0 98 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="48.7963"
              cy="48.7962"
              r="39.8421"
              transform="rotate(165 48.7963 48.7962)"
              fill={
                centerId === `how`
                  ? "#DA59A6"
                  : centerId === `who`
                    ? "#8448F1"
                    : "#408BEC"
              }
              fillOpacity="0.25"
            />
            <g filter="url(#filter0_f_274_1429)">
              <circle
                cx="48.7966"
                cy="48.7964"
                r="26.5614"
                transform="rotate(165 48.7966 48.7964)"
                fill={
                  centerId === `how`
                    ? "#DA59A6"
                    : centerId === `who`
                      ? "#8448F1"
                      : "#408BEC"
                }
                fillOpacity="0.76"
              />
            </g>
            <g
              style={{ mixBlendMode: "plus-lighter" }}
              filter="url(#filter1_f_274_1429)"
            >
              <circle
                cx="50.1515"
                cy="49.579"
                r="9.05877"
                transform="rotate(165 50.1515 49.579)"
                fill="white"
                fillOpacity="0.76"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_274_1429"
                x="19.2286"
                y="19.2284"
                width="59.136"
                height="59.136"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1.5"
                  result="effect1_foregroundBlur_274_1429"
                />
              </filter>
              <filter
                id="filter1_f_274_1429"
                x="39.2906"
                y="38.7179"
                width="21.7219"
                height="21.7221"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.9"
                  result="effect1_foregroundBlur_274_1429"
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          className={`absolute ${positionsBubble.forth} z-[999999] transition-all duration-500`}
        >
          <svg
            width="58"
            height="58"
            viewBox="0 0 98 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="48.7963"
              cy="48.7962"
              r="39.8421"
              transform="rotate(165 48.7963 48.7962)"
              fill={
                centerId === `how`
                  ? "#DA59A6"
                  : centerId === `who`
                    ? "#8448F1"
                    : "#408BEC"
              }
              fillOpacity="0.25"
            />
            <g filter="url(#filter0_f_274_1429)">
              <circle
                cx="48.7966"
                cy="48.7964"
                r="26.5614"
                transform="rotate(165 48.7966 48.7964)"
                fill={
                  centerId === `how`
                    ? "#DA59A6"
                    : centerId === `who`
                      ? "#8448F1"
                      : "#408BEC"
                }
                fillOpacity="0.76"
              />
            </g>
            <g
              style={{ mixBlendMode: "plus-lighter" }}
              filter="url(#filter1_f_274_1429)"
            >
              <circle
                cx="50.1515"
                cy="49.579"
                r="9.05877"
                transform="rotate(165 50.1515 49.579)"
                fill="white"
                fillOpacity="0.76"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_274_1429"
                x="19.2286"
                y="19.2284"
                width="59.136"
                height="59.136"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1.5"
                  result="effect1_foregroundBlur_274_1429"
                />
              </filter>
              <filter
                id="filter1_f_274_1429"
                x="39.2906"
                y="38.7179"
                width="21.7219"
                height="21.7221"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.9"
                  result="effect1_foregroundBlur_274_1429"
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
        {/* end small bubbles */}

        {/* outSide Line */}
        <div className="absolute top-[0%] right-[10%] left-[10%]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1216 1216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.5 }}
          >
            <circle
              cx="608"
              cy="608"
              r="607.5"
              stroke={
                centerId === `how`
                  ? "#DA59A6"
                  : centerId === `who`
                    ? "#8448F1"
                    : "#408BEC"
              }
            />
          </svg>
        </div>

        {/* inSide Line */}
        <div className="absolute top-[18%] right-[17%] left-[17%]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 992 968"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.3 }}
          >
            <path
              d="M496 1C769.404 1 991 217.269 991 484C991 750.731 769.404 967 496 967C222.596 967 1 750.731 1 484C1 217.269 222.596 1 496 1Z"
              stroke={
                centerId === `how`
                  ? "#DA59A6"
                  : centerId === `who`
                    ? "#8448F1"
                    : "#408BEC"
              }
              strokeWidth="2"
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
                <stop stopColor="#8A4EF6" stopOpacity="0.5" />
                <stop offset="1" stopColor="#AF04FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animate bubbles */}
        {bubbles.map((bubble) => {
          const pos = calculatePosition(bubble.id);
          return (
            <motion.div
              key={bubble.id}
              onClick={() => setCenterId(bubble.id)}
              style={{
                ...pos,
                borderColor: bubble.bordercolor,
                position: "absolute"
              }}
              className={`cursor-pointer p-2 w-[150px] h-[150px]  rounded-full flex items-center justify-center text-[25px] font-semibold transform -translate-x-1/2 -translate-y-1/2 duration-800 bg-gradient-to-b ${bubble.background
                }  shadow-lg ${centerId === bubble.id
                  ? styles.bubble_active
                  : styles.bubble_inactive
                }`}
              whileHover={{ scale: 1.1 }}
              layout
            >
              <span className="px-2 text-center">{bubble.label}</span>
            </motion.div>
          );
        })}


        {/* Center Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={centerId + "-content"}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[30%] z-[99] bottom-0 left-1/2 transform -translate-x-1/2 text-center"
          >
            {centerId === "who" && (
              <section className="relative w-full flex items-center justify-center overflow-hidden">
                <div className="relative rounded-full overflow-hidden">
                  {/* Background Image */}
                  <img
                    src="/assets/GrowYourBusiness/who.png"
                    alt="Visual Process"
                    className="w-full h-full  object-cover"
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-[#8448F1]/31" /> */}

                  {/* Centered Text */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center">
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
                <div className="relative  rounded-full overflow-hidden">
                  {/* Background Image */}
                  <img
                    src="/assets/GrowYourBusiness/how.png"
                    alt="Visual Process"
                    className="w-full h-full  object-cover"
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-[#DA59A6]/31" /> */}

                  {/* Centered Text */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center">
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
                <div className="relative overflow-hidden rounded-full">
                  {/* Background Image */}
                  <img
                    src="/assets/GrowYourBusiness/why.png"
                    alt="Visual Process"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-[#408BEC]/31" /> */}

                  {/* Centered Text */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center">
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
