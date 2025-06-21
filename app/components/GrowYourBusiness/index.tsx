"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./GrowYourBusiness.module.scss";
import Orbit from "./Orbit";
import SmallBubbles from "./SmallBubbles";

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

  const CONTAINER_WIDTH = 1100;
  const CONTAINER_HEIGHT = 1300;
  const RADIUS = 400;
  const CENTER = { x: CONTAINER_WIDTH / 2, y: CONTAINER_HEIGHT / 2 };

  const ids = ["how", "who", "why"];
  const [centerId, setCenterId] = useState("who");
  const [positionsBubble, setPositionsBubble] = useState({
    first: "top-[0%] left-[27%]",
    second: "top-[50%] left-[10%]",
    third: "top-[0%] right-[27%]",
    forth: "top-[50%] right-[10%]",
  });


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
    <div className="mt-[10%]  h-[1450px] relative">
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
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-[20] bg-gradient-to-t from-[#070322]/100 via-[#070322]/75 to-[#070322]/75  backdrop-blur-xl pointer-events-none" />

      {/* CONTAINER ADDED */}
      <div className="text-center mb-30">
        <h2 className="font-medium text-[40px]"> Grow Your Business</h2>
        <p className="font-medium text-[40px] mt-2 text-gray-300">With Us</p>
      </div>
      <div className="h-screen relative">

        {/* Animate small bubbles */}
        <SmallBubbles positionsBubble={positionsBubble} centerId={centerId} />

        <Orbit centerId={centerId} />

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
              className={`cursor-pointer rounded-full flex items-center justify-center  transform -translate-x-1/2 -translate-y-3/4 duration-1000 bg-gradient-to-b ${bubble.background
                }  shadow-lg ${centerId === bubble.id
                  ? styles.bubble_active
                  : styles.bubble_inactive
                }`}
              whileHover={{ scale: 1.2 }}
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
            className="absolute top-[30%] z-[10] bottom-0 left-1/2 transform -translate-x-1/2 text-center"
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
