"use client";
import React from 'react'
import { useState } from "react";

export default function Options() {

    const [selectedOption, setSelectedOption] = useState("New Project");
    const options = ["New Project", "Joining Our Team", "General Inquiries"];

    return (
        <>
            {options.map((option) => (
                <div
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    className={`pl-4 cursor-pointer transition-all 
                     ${selectedOption === option
                            ? "text-[#8A3EFF] border-l-4 border-[#8A3EFF]"
                            : "text-white hover:text-[#8A3EFF]"
                        }`}
                >
                    {option}
                </div>
            ))}
        </>

    )
}
