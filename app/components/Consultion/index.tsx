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
    icon: <ArrowDownCircleIcon className="w-5 h-5 text-purple-500" />,
  },
  {
    name: "In-Person Consultation",
    icon: <ArrowDownCircleIcon className="w-5 h-5 text-purple-500" />,
  },
];

export default function Consultion() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("09:00 to 11:30");
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="min-h-screen bg-[#0b0423] text-white flex flex-col md:flex-row items-center justify-center gap-[10%] lg:px-[10%] lg:py-[10%] md:px-[5%] md:py-[5%]">
      {/* Left - Calendar */}
      <div className="bg-white text-center rounded-lg p-6 w-full md:w-[40%] text-black shadow-lg mb-[5%] mt-[5%]">
        <h3 className="text-3xl font-semibold text-[#4A148C] mb-4">
          Select Date
        </h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date!)}
          inline
          calendarClassName="bg-white rounded-xl shadow-lg p-4 text-center"
          dayClassName={(date) =>
            `flex items-center justify-center rounded-full transition font-medium
            ${
              date.toDateString() === new Date().toDateString()
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-purple-100"
            }`
          }
        />

        <div className="mt-6 text-left">
          <label className="block text-xl text-[#4A148C] font-semibold mb-2">
            Select Time
          </label>
          <select
            className="w-full p-2 border rounded"
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
      <div className="w-full space-y-4 md:w-[60%] mb-[5%] mt-[5%]">
        <h1 className="font-bold text-4xl">
          <span className="text-white text-6xl">CONSULTING</span> FOR
        </h1>
        <h1 className="text-4xl font-semibold text-white/90">EVERY BUSINESS</h1>

        <Listbox value={selected} onChange={setSelected}>
          <div className="relative w-full">
            <Listbox.Button className="w-full p-3 border rounded bg-transparent text-white flex justify-between items-center">
              <span className="flex items-center gap-2">
                {selected.icon}
                {selected.name}
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full bg-white text-black rounded shadow-lg z-10">
              {options.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  value={option}
                  className="cursor-pointer p-2 hover:bg-purple-100 flex items-center gap-2"
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
          className="w-full p-3 rounded border bg-transparent text-white"
        />
        <input
          placeholder="Phone Number:"
          className="w-full p-3 rounded border bg-transparent text-white"
        />
        <input
          placeholder="Email Address:"
          className="w-full p-3 rounded border bg-transparent text-white"
        />

       <div className="h-[1px] bg-white mx-auto mt-8 mb-2" />


        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
          <p className="text-purple-400 text-2xl font-bold">$100</p>
          <Button className="group flex items-center rounded-full border-2 border-purple-500 overflow-hidden bg-transparent text-white transition-all duration-300 hover:bg-purple-600">
            <div className="flex transform transition-transform duration-1000 group-hover:translate-x-[75%]">
              <div className="bg-purple-400 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
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
              <span className="px-8 text-sm font-medium">
                Make
                <br />
                Payment
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
