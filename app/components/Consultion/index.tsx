"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Consulting.scss";
import { Button } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const options = [
  {
    name: "Online Consultation",
    icon: <ArrowDownCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />,
  },
  {
    name: "In-Person Consultation",
    icon: <ArrowDownCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />,
  },
];

export default function Consultion() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("09:00 to 11:30");
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="min-h-screen text-white flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-[10%] px-4 sm:px-6 lg:px-[10%] py-8 sm:py-12 lg:py-[10%]">
      {/* Left - Calendar */}
      <div className="bg-white text-center rounded-lg p-4 sm:p-6 w-full lg:w-[40%] text-black shadow-lg mb-6 sm:mb-8 lg:mb-0 order-2 lg:order-1">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#4A148C] mb-3 sm:mb-4">
          Select Date
        </h3>
        <div className="flex justify-center">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date!)}
            inline
            calendarClassName="bg-white rounded-xl shadow-lg p-2 sm:p-4 text-center"
            dayClassName={(date) =>
              `flex items-center justify-center rounded-full transition font-medium text-sm sm:text-base
              ${date.toDateString() === new Date().toDateString()
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-purple-100"
              }`
            }
          />
        </div>

        <div className="mt-4 sm:mt-6 text-left">
          <label className="block text-lg sm:text-xl text-[#4A148C] font-semibold mb-2">
            Select Time
          </label>
          <select
            className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option>09:00 to 11:30</option>
            <option>12:00 to 14:30</option>
            <option>15:00 to 17:30</option>
          </select>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full space-y-4 lg:w-[60%] order-1 lg:order-2">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-center lg:text-left">
          <span className="text-white text-3xl sm:text-4xl lg:text-6xl">CONSULTING</span> FOR
        </h1>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 leading-tight text-center lg:text-left">
          EVERY BUSINESS
        </h1>

        <Listbox value={selected} onChange={setSelected}>
          <div className="relative w-full">
            {/* Label */}
            <label className="block mb-2 text-base sm:text-lg font-bold text-[#CB97FF]">
              Consultation type
            </label>

            <Listbox.Button className="w-full p-3 border rounded bg-transparent text-white flex justify-between items-center text-sm sm:text-base">
              <span className="flex items-center gap-2">
                {selected.icon}
                <span className="truncate">{selected.name}</span>
              </span>
            </Listbox.Button>

            <Listbox.Options className="absolute mt-1 w-full bg-white text-black rounded shadow-lg z-10 max-h-32 overflow-auto">
              {options.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  value={option}
                  className="cursor-pointer p-2 hover:bg-purple-100 flex items-center gap-2 text-sm sm:text-base"
                >
                  {option.icon}
                  {option.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <input
          placeholder="Full Name:"
          className="w-full p-3 rounded border bg-transparent text-white text-sm sm:text-base placeholder-gray-400"
        />
        <input
          placeholder="Phone Number:"
          className="w-full p-3 rounded border bg-transparent text-white text-sm sm:text-base placeholder-gray-400"
        />
        <input
          placeholder="Email Address:"
          className="w-full p-3 rounded border bg-transparent text-white text-sm sm:text-base placeholder-gray-400"
        />

        <div className="h-[1px] bg-white mx-auto mt-6 sm:mt-8 mb-2" />
        <div className="flex flex-col justify-self-center w-[25%] md:w-[100%] justify-between md:justify-between lg:flex-row items-center  pt-4 gap-4">
          <p className="text-purple-400 text-xl sm:text-3xl font-bold">$100</p>
          <Button className="group flex items-center rounded-full border-2 border-purple-500 overflow-hidden bg-transparent text-white transition-all duration-300 hover:bg-purple-600 w-full sm:w-auto">
            <div className="flex transform transition-transform duration-1000 group-hover:translate-x-[75%] w-full sm:w-auto">
              <div className="bg-purple-400 p-2 sm:p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <span className="px-2 sm:px-4 text-xs sm:text-sm font-medium content-center">
                Make
                Payment
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
