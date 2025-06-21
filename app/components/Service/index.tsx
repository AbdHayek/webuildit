// import Image from "next/image";
// import GradientLine from "../Common/GradientLine";
// import AnimatedPercent from "../Common/AnimatedPercent";

// const servicesData = [
//   {
//     title: "MOBILE APP DEVELOPMENT",
//     description: "iOS & Android applications, cross-platform solutions.",
//     image: "/assets/Service/mobile_app.png",
//     imageAlt: "Mobile App Illustration",
//   },
//   {
//     title: "WEB DEVELOPMENT",
//     description: "Scalable and secure web solutions, eCommerce, CMS platforms.",
//     image: "/assets/Service/web_development.png",
//     imageAlt: "Web Development Illustration",
//   },
//   {
//     title: "UI/UX DESIGN",
//     description:
//       "Creating seamless user experiences through wireframing & prototyping",
//     image: "/assets/Service/ux_design.png",
//     imageAlt: "UX Design Illustration",
//   },
//   {
//     title: "CLOUND SOLUTIONS",
//     description: "Optimized and secure cloud infrastructures DevOps services",
//     image: "/assets/Service/cloud_solution.png",
//     imageAlt: "Cloud Solutions Illustration",
//   },
//   {
//     title: "CONSULTATION & STRATEGY",
//     description:
//       "Helping businesses shape their tech roadmap and digital transformation",
//     image: "/assets/Service/consultation.png",
//     imageAlt: "Consultation Illustration",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="service" className="text-white px-4 md:px-20">
//       <h2 className="text-center text-[40px] font-medium mb-12">
//         OUR SERVICES
//       </h2>

//       {servicesData.map((service, index) => (
//         <div key={index}>
//           <GradientLine />
//           <div className="flex flex-col md:flex-row items-center md:justify-between gap-20 py-12 px-[5%]">
//             {/* Text Content */}
//             <div className="md:w-3/4 mb-10 md:mb-0">
//               <h3 className="text-[40px] font-bold mb-4">{service.title}</h3>
//               <p className="mb-8 text-[#F6F3F8] text-[28px]">
//                 {service.description}
//               </p>

//               <div className="space-y-6">
//                 {["30%", "50%", "70%"].map((percent, i) => (
//                   <div key={i} className="flex items-center gap-4">
//                     <AnimatedPercent value={parseInt(percent)} />
//                     <p className="text-[16px">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod.
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Image */}
//             <div className="md:w-1/4 flex justify-center">
//               <Image
//                 src={service.image}
//                 width={250}
//                 height={250}
//                 alt={service.imageAlt}
//               />
//             </div>
//           </div>
//         </div>
//       ))}

//       <GradientLine />
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import GradientLine from "../Common/GradientLine";
import AnimatedPercent from "../Common/AnimatedPercent";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const servicesData = [
  {
    title: "MOBILE APP DEVELOPMENT",
    description: "iOS & Android applications, cross-platform solutions.",
    image: "/assets/Service/mobile_app.png",
    imageAlt: "Mobile App Illustration",
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Scalable and secure web solutions, eCommerce, CMS platforms.",
    image: "/assets/Service/web_development.png",
    imageAlt: "Web Development Illustration",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "Creating seamless user experiences through wireframing & prototyping",
    image: "/assets/Service/ux_design.png",
    imageAlt: "UX Design Illustration",
  },
  {
    title: "CLOUND SOLUTIONS",
    description: "Optimized and secure cloud infrastructures DevOps services",
    image: "/assets/Service/cloud_solution.png",
    imageAlt: "Cloud Solutions Illustration",
  },
  {
    title: "CONSULTATION & STRATEGY",
    description:
      "Helping businesses shape their tech roadmap and digital transformation",
    image: "/assets/Service/consultation.png",
    imageAlt: "Consultation Illustration",
  },
];

export default function Services() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (visibleCount < servicesData.length) {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 3000); // 5 seconds delay
      return () => clearTimeout(timeout);
    }
  }, [visibleCount]);


  // Reset on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollY - 100) {
        setVisibleCount(1);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <section id="service" className="text-white min-h-[1200px] mt-[10%] px-4 md:px-20 relative">
      <h2 className="text-center text-[40px] font-medium mb-12">
        OUR SERVICES
      </h2>

      {servicesData.slice(0, visibleCount).map((service, index) => (
        <div key={index}>
          {index === 0 ? (
            <ServiceBlock service={service} />
          ) : (
            <AnimatedServiceBlock service={service} position={index} />
          )}
        </div>
      ))}
    </section>
  );
}

function AnimatedServiceBlock({ service, position }: { service: any; position: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: -500 + position * 120,
        zIndex: 10,
        transition: {
          delay: 0,
          duration: 0.6,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({ y: 0, zIndex: 0 });
    }
  }, [inView, controls, position]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ y: 0, zIndex: 0 }}
      className="w-[90%] absolute"
    >
      <ServiceBlock service={service} />
    </motion.div>
  );
}


function ServiceBlock({ service }: { service: any }) {
  return (
    <>
      <GradientLine />
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-20 py-12 px-[5%] bg-[#070322]">
        <div className="md:w-3/4 mb-10 md:mb-0">
          <h3 className="text-[40px] font-bold mb-4">{service.title}</h3>
          <p className="mb-8 text-[#F6F3F8] text-[28px]">
            {service.description}
          </p>
          <div className="space-y-6">
            {["30%", "50%", "70%"].map((percent, i) => (
              <div key={i} className="flex items-center gap-4">
                <AnimatedPercent value={parseInt(percent)} />
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/4 flex justify-center self-end">
          <Image
            src={service.image}
            width={250}
            height={250}
            alt={service.imageAlt}
          />
        </div>
      </div>
    </>
  );
}

