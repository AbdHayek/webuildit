"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import GradientLine from "../Common/GradientLine";
import AnimatedPercent from "../Common/AnimatedPercent";
import Image from "next/image";

const servicesData = [
    {
        title: "MOBILE APP DEVELOPMENT",
        description: "iOS & Android applications, cross-platform solutions.",
        image: "/assets/Service/mobile_app.png",
        imageAlt: "Mobile App Illustration",
        top: "0%"
    },
    {
        title: "WEB DEVELOPMENT",
        description: "Scalable and secure web solutions, eCommerce, CMS platforms.",
        image: "/assets/Service/web_development.png",
        imageAlt: "Web Development Illustration",
        top: "17%"
    },
    {
        title: "UI/UX DESIGN",
        description:
            "Creating seamless user experiences through wireframing & prototyping",
        image: "/assets/Service/ux_design.png",
        imageAlt: "UX Design Illustration",
        top: "34%"
    },
    {
        title: "CLOUND SOLUTIONS",
        description: "Optimized and secure cloud infrastructures DevOps services",
        image: "/assets/Service/cloud_solution.png",
        imageAlt: "Cloud Solutions Illustration",
        top: "52%"
    },
    {
        title: "CONSULTATION & STRATEGY",
        description:
            "Helping businesses shape their tech roadmap and digital transformation",
        image: "/assets/Service/consultation.png",
        imageAlt: "Consultation Illustration",
        top: "70%"
    }
];

export default function ServiceList() {

    const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
    const lastSectionRef = useRef(null);
    const [hasScrolled, setHasScrolled] = useState(false);
    const isLastInView = useInView(lastSectionRef, { margin: "0px 0px -25% 0px" }); // triggers near bottom

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setScrollDir("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDir("up");
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isLastInView && !hasScrolled) {
            if (scrollDir === "down") {
                const percent = 100;
                const pixels = (percent / 100) * window.innerHeight;
                window.scrollBy({ top: pixels, behavior: "smooth" });
                setHasScrolled(true);
            } else if (scrollDir === "up") {
                const percent = 90;
                const pixels = (percent / 100) * window.innerHeight;
                window.scrollBy({ top: -pixels, behavior: "smooth" });
                setHasScrolled(true);
            }
        }

        if (!isLastInView) {
            setHasScrolled(false);
        }
    }, [isLastInView, scrollDir]);

    return (
        <div style={{ height: "400vh", position: "relative" }}>
            {servicesData.map((service, index) => {
                return (
                    <div
                        ref={index === servicesData.length - 1 ? lastSectionRef : null}
                        key={index}
                        style={{
                            position: "sticky",
                            top: `${parseInt(service.top, 10)}vh`,  // use vh units or px
                            backgroundColor: "#070322",
                            zIndex: 10 + index
                        }}>
                        <GradientLine />
                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-20 py-12 px-[5%]">
                            {/* Text Content */}
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="md:w-1/4 flex justify-center">
                                <Image
                                    src={service.image}
                                    width={250}
                                    height={250}
                                    alt={service.imageAlt}
                                />
                            </div>
                        </div>
                    </div>

                );
            })}
        </div>
    );
}