"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./GrowYourBusiness.module.scss";
import Orbit from "./Orbit";
import SmallBubbles from "./SmallBubbles";
import { ImagesSection } from "./ImagesSection";
import MainTitle from "../Common/MainTitle";

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

type Postion = {
  now: {
    left: string,
    top: string
  } | null
}

export default function GrowYourBusiness() {

  const CONTAINER_WIDTH = 1100;
  const CONTAINER_HEIGHT = 1300;
  const RADIUS = 400;
  const CENTER = { x: CONTAINER_WIDTH / 2, y: CONTAINER_HEIGHT / 2 };
  const activeElement = useRef<HTMLElement | null>(null);
  const activePrevElement = useRef<HTMLElement | null>(null);
  const activeCurrentElement = useRef<HTMLElement | null>(null);
  const ids = ["how", "who", "why"];
  const [centerId, setCenterId] = useState("who");
  const [prevCenterId, setPrevCenterId] = useState("why");
  const [lastPostion, setLastPostion] = useState<Postion>({ now: null });

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
      top: `${topPercent - (window.innerWidth <= 1250 ? 15 : 0)}%`, // add 15% to the top if the width is less than 1024 for better UI
    };
  };


  useEffect(() => {

    const targetBubble = getLastNode(); // Remove await since getLastNode is not async
    if (!targetBubble) return;

    const element = document.getElementById(targetBubble.id);
    if (element) {
      activeElement.current = element;
    }

    const prevElement = document.getElementById(prevCenterId);
    if (prevElement) {
      const pos = calculatePosition(prevCenterId);
      activePrevElement.current = prevElement;

      activePrevElement.current.style.left = pos.left;
      activePrevElement.current.style.top = pos.top;
    }

    const currentElement = document.getElementById(centerId);
    if (currentElement) {
      const pos = calculatePosition(centerId);
      activeCurrentElement.current = currentElement;

      activeCurrentElement.current.style.left = pos.left;
      activeCurrentElement.current.style.top = pos.top;
    }

    const newPos = calculatePosition(targetBubble.id);
    setLastPostion(() => ({
      now: newPos
    }));


  }, [centerId, prevCenterId]);

  useEffect(() => {

    if (lastPostion.now === null) return;
    const el = activeElement.current;
    if (!el) return;

    // Get the current `top` as a number (strip the '%' and parse)
    el.style.top = `${parseFloat(el.style.top || "0") + 90}%`;

    const timeoutDisplay = setTimeout(() => {
      el.style.left = lastPostion?.now?.left || "0"
    }, 500); // Delay in ms

    const timeout = setTimeout(() => {
      el.style.left = lastPostion?.now?.left || "0"
      el.style.top = lastPostion?.now?.top || "0"
    }, 1000); // Delay in ms

    // Cleanup timeout if component unmounts or centerId changes
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeoutDisplay);
      if (el) {
        el.style.transition = "";
      }
    };

  }, [lastPostion]);


  const handleClick = (id: string) => {
    if (id === centerId) return;
    setPrevCenterId(centerId);
    setCenterId(id);
  }

  const getLastNode = () => {
    const idx = bubbles.find(bubble => bubble.id !== centerId && bubble.id !== prevCenterId);
    return idx;
  }


  return (
    <div className={`mt-[20%] mb-[10%]  2xl:mb-[5%] xl:mb-[10%] lg:mb-[10%] 2xl:h-[1450px] xl:h-[1050px] lg:h-[900px] h-[800px] overflow-y-hidden relative`}>
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
      <div className="absolute bottom-[0%] left-0 w-full 2xl:h-1/4 h-[5%] z-[20] bg-gradient-to-t from-[#070322]/100 via-[#070322]/75 to-[#070322]/75  backdrop-blur-xl pointer-events-none blur-responsive " />

      {/* CONTAINER ADDED */}
      <div className="text-center mb-[10%]">
        <MainTitle children="Grow Your Business" className="mb-2" />
        <MainTitle children="With Us" className="text-gray-300" />
      </div>
      <div className="h-screen h-screen-responsive  relative">

        {/* Animate small bubbles */}
        <SmallBubbles centerId={centerId} />

        <Orbit centerId={centerId} />

        {/* Animate bubbles */}
        {bubbles.map((bubble) => {
          return (
            <motion.div
              id={bubble.id}
              key={bubble.id}
              onClick={() => handleClick(bubble.id)}
              style={{
                borderColor: bubble.bordercolor,
                position: "absolute"
              }}
              className={`cursor-pointer rounded-full flex items-center justify-center  transform
                 -translate-x-1/2 -translate-y-3/4  duration-1000
                  bg-gradient-to-b ${bubble.background
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
            className="absolute top-[5%] xl:top-[25%] lg:top-[12%] z-[10] bottom-0 left-1/2 transform -translate-x-1/2 text-center"
          >
            {centerId === "who" && (
              <ImagesSection
                sectionStyles= {[
                  'top-0 h-[30%]',
                  'top-[22%] h-[24%]',
                  'bottom-0 h-[54%]',
                ]}
                classes={"absolute inset-0 bg-gradient-to-b from-[#9643d6b0] to-[#140526] z-10 rounded-full border-2 border-[#9000FFEB]"}
                classImages={["object-cover center", "object-cover transform scale-110 origin-[0%_90%]", "object-cover transform scale-140 origin-[0%_100%]"]}
                title={["STARTUPS", "ENTERPRISES", "OUTSOURCING NEEDS"]}
                image={["/assets/GrowYourBusiness/purple/3.jpg", "/assets/GrowYourBusiness/purple/2.jpg", "/assets/GrowYourBusiness/purple/1.jpg"]}
              />
            )}
            {centerId === "how" && (
              <ImagesSection
                sectionStyles= {[]}
                classes={"absolute inset-0 bg-gradient-to-b from-[#BD3E937D] to-[#4C022ED1] z-10 rounded-full border-2 border-[#4C022ED1]"}
                classImages={[]}
                title={["STEP-BY-STEP PROCESS WITH VISUALS"]}
                image={["/assets/GrowYourBusiness/pink/1.jpg"]}
              />
            )}
            {centerId === "why" && (
                <ImagesSection
                  sectionStyles= {[
                  'top-0 h-[25%] bg-[#0e1311]',
                  'top-[24%] h-[24%] bg-[#1e2d34]',
                  'bottom-0 h-[52%] bg-[#4b7091]',
                  ]}
                classes={"absolute inset-0 bg-gradient-to-b  from-[#0043994F] to-[#140526] z-10 rounded-full border-2 border-[#0043994F]"}
                classImages={["object-contain", "object-contain", "object-cover"]}
                title={["SCALABILITY", "COST-EFFECTIVENESS", "EXPERTISE, NDA"]}
                image={["/assets/GrowYourBusiness/blue/1.jpg", "/assets/GrowYourBusiness/blue/2.png", "/assets/GrowYourBusiness/blue/3.jpg"]}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div >
  );
}
