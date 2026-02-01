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
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean | null>(null);

  const getAngle = (id: string) => {
    const centerIndex = ids.indexOf(centerId);
    const currentIndex = ids.indexOf(id);
    const angleStep = (2 * Math.PI) / ids.length;
    const relativeIndex = (currentIndex - centerIndex + ids.length) % ids.length;
    return -Math.PI / 2 + relativeIndex * angleStep;
  };


  const getTopOffset = (current: boolean) => {

    if (screenWidth === null) return 0;

    if (current) {
      if (screenWidth <= 768) return 15;
      if (screenWidth <= 1000) return 12;
      if (screenWidth <= 1275) return 10;
      if (screenWidth <= 1500) return 0;
      if (screenWidth > 1500) return 0;
    } else {
      if (screenWidth <= 500) return 45;
      if (screenWidth <= 768) return 30;
      if (screenWidth <= 1000) return 25;
      if (screenWidth <= 1275) return 15;
      if (screenWidth <= 1500 && isFullscreen) return 12; // added condition for fullscreen
      if (screenWidth <= 1500) return 2;
      if (screenWidth > 1500) return 0;
    }

    return 0;
  };


  const calculatePosition = (id: string, current: boolean) => {
    const angle = getAngle(id);
    const x = CENTER.x + RADIUS * Math.cos(angle);
    const y = CENTER.y + RADIUS * Math.sin(angle);

    // Convert to percentage
    const leftPercent = (x / CONTAINER_WIDTH) * 100;
    const topPercent = (y / CONTAINER_HEIGHT) * 100;

    return {
      left: `${leftPercent}%`,
      top: `${topPercent - getTopOffset(current)}%`, // add 15% to the top if the width is less than 1024 for better UI
    };
  };


  useEffect(() => {
    const handleResize = () => {

      const w = window.innerWidth;
      setScreenWidth(w);

      // Detect Mac green fullscreen (tolerance method)
      const tolerance = 80;
      const wDiff = Math.abs(window.innerWidth - screen.width);
      const hDiff = Math.abs(window.innerHeight - screen.height);

      if (wDiff === 0 && hDiff === 0) setIsFullscreen(false);
      else setIsFullscreen(wDiff < tolerance && hDiff < tolerance);
    };

    handleResize(); // run on first open
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {

    if (screenWidth === null || isFullscreen === null) return; //  wait until screenWidth is ready

    const targetBubble = getLastNode(); // Remove await since getLastNode is not async
    if (!targetBubble) return;

    const element = document.getElementById(targetBubble.id);
    if (element) {
      activeElement.current = element;
    }

    const prevElement = document.getElementById(prevCenterId);
    if (prevElement) {
      const pos = calculatePosition(prevCenterId, false);
      activePrevElement.current = prevElement;

      activePrevElement.current.style.left = pos.left;
      activePrevElement.current.style.top = pos.top;
    }

    const currentElement = document.getElementById(centerId);
    if (currentElement) {
      const pos = calculatePosition(centerId, true);
      activeCurrentElement.current = currentElement;

      activeCurrentElement.current.style.left = pos.left;
      activeCurrentElement.current.style.top = pos.top;
    }

    const newPos = calculatePosition(targetBubble.id, false);
    setLastPostion(() => ({
      now: newPos
    }));


  }, [centerId, prevCenterId, screenWidth, isFullscreen]);


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
    <div className={`mt-[20%] mb-[10%]  2xl:mb-[5%] xl:mb-[10%] lg:mb-[10%] 2xl:h-[1450px] xl:h-[1150px] lg:h-[900px] h-[800px] overflow-y-hidden relative`}>
      
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
      <div className="absolute z-20 bottom-0 left-0 w-full h-[50%] pointer-events-none bg-gradient-to-t from-[#070322] from-[17%] via-black/15 via-[50%] to-black/0 to-[70%] [@media(min-width:2500px)]:hidden" />

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
                sectionStyles={[
                  'h-[30%]',
                  'top-[22%] h-[22%]',
                  'bottom-[16%] h-[40%]',
                ]}
                classes={"absolute inset-0 bg-gradient-to-b from-[#5d0e9b87] to-[#140526] z-10 rounded-full border-t-3  border-t-[#9000FFEB] border-b-[#9254ec4d] border-r-[#9254ec4d] border-l-[#9254ec4d]"}
                classImages={["object-contain transform scale-180 transform  origin-[50%_45%]", "object-cover transform scale-110 origin-[0%_90%]", "object-cover transform scale-140 origin-[0%_100%]"]}
                title={["STARTUPS", "ENTERPRISES", "OUTSOURCING NEEDS"]}
                image={["/assets/GrowYourBusiness/purple/3.jpg", "/assets/GrowYourBusiness/purple/2.jpg", "/assets/GrowYourBusiness/purple/1.jpg"]}
              />
            )}
            {centerId === "how" && (
              <ImagesSection
                sectionStyles={[]}
                classes={"absolute inset-0 bg-gradient-to-b from-[#b3097b7a] to-[#4c022e] z-10 rounded-full border-t-3  border-t-[#FF0084] border-b-[#ff008494] border-r-[#ff008494] border-l-[#ff008494]"}
                classImages={[]}
                title={["STEP-BY-STEP PROCESS WITH VISUALS"]}
                image={["/assets/GrowYourBusiness/pink/1.jpg"]}
              />
            )}
            {centerId === "why" && (
              <ImagesSection
                sectionStyles={[
                  'top-0 h-[30%] bg-[#0e1311]',
                  'top-[24%] h-[23%] bg-[#1e2d34]',
                  'bottom-[15%] h-[40%] bg-[#4b7091]',
                ]}
                classes={"absolute inset-0 bg-gradient-to-b  from-[#0043994F] to-[#0e083fa1] z-10 rounded-full border-t-3   border-t-[#4E91E9] border-b-[#00439921] border-r-[#00439921] border-l-[#00439921]"}
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








