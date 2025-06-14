"use client";
import React from 'react'
import { useState } from "react";

export default function Form() {

    const [selectedOption, setSelectedOption] = useState("New Project");
    const options = ["New Project", "Joining Our Team", "General Inquiries"];

    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
            {/* Left Side */}
            <div className="md:w-1/2">
                <div className="space-y-6 text-xl font-medium">
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
                </div>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full">
                        <label className="block text-sm mb-1">First Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-gray focus:outline-none py-2" />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb-1">Last Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-gray focus:outline-none py-2" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full">
                        <label className="block text-sm mb-1">Email</label>
                        <input type="email" className="w-full bg-transparent border-b border-gray focus:outline-none py-2" />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm mb-1">Phone Number</label>
                        <input type="tel" className="w-full bg-transparent border-b border-gray focus:outline-none py-2" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm mb-1">Message</label>
                    <textarea
                        rows="4"
                        placeholder="Write your message.."
                        className="w-full bg-transparent border-b border-gray focus:outline-none py-2 resize-none"
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button className="px-8 py-3 border cursor-pointer text-white border-[#8A3EFF] rounded-full hover:bg-[#8A3EFF] hover:text-white transition-all">
                        Send message
                    </button>
                </div>
            </div>
        </div>
    )
}
