"use client";
import React, { useState } from "react";

export default function Collapse() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full border border-white p-2  bg-transparent flex items-center cursor-pointer"
            >
                <svg
                    className="w-6 h-6 text-white" // icon color
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {isOpen && (
                <div className="fixed  inset-0 z-[9999999] font-medium leading-normal w-full h-screen bg-[#070322]  bg-[url('/assets/Navbar/background-menu.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-[33px] uppercase">
                    {/* Close Button inside overlay */}
                    <button
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        onClick={() => setIsOpen(false)}
                        className="absolute top-[4%] right-[14%] z-[70] p-2 rounded-full border border-white cursor-pointer"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                </div>
            )}
        </div>
    )
}
