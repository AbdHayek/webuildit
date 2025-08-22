"use client";

import React, { useRef } from "react";
import GradientLine from "../Common/GradientLine";
import AnimatedPercent from "../Common/AnimatedPercent";
import Image from "next/image";

const servicesData = [
    {
        title: "MOBILE APP DEVELOPMENT",
        description: "We work closely with you to design, develop, and support mobile apps that solve real problems. Your vision, our code. Let's build something your users can't live without.",
        image: "/assets/Service/mobile_app.png",
        imageAlt: "Mobile App",
        top: "0%",
        facts:
            [
                {
                    number: "67",
                    description: "of users will abandon an app after one bad experience. (Google UX Research, 2024)"
                }, {
                    number: "70",
                    description: "Over 70% of web traffic now comes from mobile devices (StatCounter, 2025)"
                }, {
                    number: "88",
                    description: "Users spend 88% of their mobile time inside apps (vs. browsers). (eMarketer, 2024)"
                }, {
                    number: "70",
                    description: <>of businesses say mobile apps improved customer engagement. (<a href="https://clutch.co/" className="underline" target="_blank" rel="noopener noreferrer">Clutch.co</a> Survey, 2024)</>
                }
            ]
    },
    {
        title: "WEB DEVELOPMENT",
        description: "We design and develop fast, secure, and scalable websites tailored to your business needs. Custom built websites that boost conversions, performance, and brand trust.",
        image: "/assets/Service/web_development.png",
        imageAlt: "Web Development",
        top: "14%",
        facts:
            [
                {
                    number: "94",
                    description: "of first impressions relate to your website’s design. (WebFX, 2024)"
                }, {
                    number: "70",
                    description: "of small business websites are vulnerable to cyberattacks due to poor development practices. (Verizon Data Breach Report, 2024)"
                }, {
                    number: "75",
                    description: "of users judge a company’s credibility based on website design. (Stanford Web Credibility Research, 2024)"
                }
            ]
    },
    {
        title: "UI/UX DESIGN",
        description:
            "From wireframes to WOW. we design experiences your users will love and remember. Design isn’t just how it looks, it’s how it works. Let’s make it seamless.",
        image: "/assets/Service/ux_design.png",
        imageAlt: "UX Design",
        top: "27%",
        facts:
            [
                {
                    number: "94",
                    description: "of users’ first impressions are design-related. (Stanford University, 2024)"
                }, {
                    number: "88",
                    description: "of users are less likely to return after a bad user experience. (Adobe, 2024)"
                }, {
                    number: "70",
                    description: "of online businesses fail due to poor UX (UXPIN, 2024)"
                }
            ]
    },
    {
        title: "CLOUND SOLUTIONS",
        description: "We design, deploy, and manage secure cloud infrastructures that help your business scale, reduce costs, and stay competitive. Whether you're migrating, optimizing, or starting from scratch, we tailor cloud solutions that fit your needs.",
        image: "/assets/Service/cloud_solution.png",
        imageAlt: "Cloud Solutions",
        top: "40%",
        facts:
            [
                {
                    number: "90",
                    description: "of companies using the cloud experience improved security and compliance. (McAfee, 2024)"
                }, {
                    number: "99.9",
                    description: "High availability cloud architectures deliver 99.9% uptime or more. (AWS SLA, 2025)"
                }
            ]
    },
    {
        title: "CONSULTATION & STRATEGY",
        description:
            "We help businesses make smarter technology decisions, from digital transformation roadmaps to scalable software strategies. Our experts bridge the gap between business vision and technical execution.",
        image: "/assets/Service/consultation.png",
        imageAlt: "Consultation Illustration",
        top: "0%",
        facts: []
    }
];

export default function ServiceList() {

    const lastSectionRef = useRef(null);
    return (
        <div>
            {servicesData.map((service, index) => {
                return (
                    <div
                        ref={index === servicesData.length - 1 ? lastSectionRef : null}
                        key={index}
                        style={{
                            position: "sticky",
                            top: service.top,  // use vh units or px
                            backgroundColor: "#070322",
                            zIndex: 10 + index
                        }}>
                        <GradientLine />
                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-20 py-[2%] px-[5%]">
                            {/* Text Content */}
                            <div className="md:w-3/4 mb-10 md:mb-0">
                                <h3 className="text-[40px] font-bold mb-4">{service.title}</h3>
                                <p className="mb-8 text-[#F6F3F8] text-[22px]">
                                    {service.description}
                                </p>

                                <div className="space-y-6">
                                    {service?.facts?.map((percent, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <AnimatedPercent value={parseInt(percent?.number)} />
                                            <p className="text-[16px]">
                                                {percent?.description}
                                            </p>
                                        </div>
                                    ))}

                                    {service.title.includes("CONSULTATION") &&
                                        <>
                                            <div className="flex h-[300px] items-center gap-4">
                                                <a
                                                    href="#consultation"
                                                    className="
                                                        px-[4%] py-[2%] 
                                                        bg-purple-600 hover:bg-purple-700 
                                                        text-white font-semibold 
                                                        rounded-lg 
                                                        shadow-md 
                                                        transition 
                                                        duration-300 
                                                        ease-in-out
                                                        transform hover:-translate-y-3
                                                        hover:shadow-lg
                                                        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
                                                    "
                                                >
                                                    Book Now
                                                </a>

                                            </div>
                                        </>


                                    }

                                </div>
                            </div>

                            {/* Image */}
                            <div className="md:w-1/4 flex justify-center mt-[5%]">
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