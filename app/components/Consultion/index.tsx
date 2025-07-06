"use client";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Consulting.scss";
import { Button } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { stripePromise } from '@/lib/stripe';

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

type TimeSlot = { from: string; to: string };
type Rule = { day: string; time_slots: TimeSlot[] };

export default function Consultion() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [rules, setRules] = useState<Rule[]>([]);
  const [selected, setSelected] = useState(options[0]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const getDayName = (date: Date) =>
    date.toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const res = await fetch("/api/calendly/availability");
        const data = await res.json();

        const updatedRules: Rule[] = data.collection[0]?.rules.map((rule: any) => ({
          day: rule.wday,
          time_slots: rule.intervals,
        })) || [];

        setRules(updatedRules);
      } catch (error) {
        console.error("Error fetching availability", error);
      }
    };

    fetchAvailability();
  }, []);

  useEffect(() => {
    const day = getDayName(selectedDate);
    const rule = rules.find((r) => r.day.toLowerCase() === day.toLowerCase());
    if (rule) {
      setTimeSlots(rule.time_slots);
      setSelectedTime(rule.time_slots[0] || null);
    } else {
      setTimeSlots([]);
      setSelectedTime(null);
    }
  }, [selectedDate, rules]);


  const handleCheckout = async () => {

    if (!selectedDate || !selected || !selectedTime || !name || !email || !phone) {
      setError("Please fill all the fields");
      return;
    }
    setError("");

    const stripe = await stripePromise;
    const res = await fetch("/api/calendly/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: new Date(selectedDate).toISOString().split('T')[0],
        type: selected.name, time: selectedTime?.from + " - " + selectedTime?.to,
        name: name, email: email, phone: phone
      }),
    });
    const { sessionId } = await res.json();
    await stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <div className="min-h-screen text-white flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-[10%] px-4 sm:px-6 lg:px-[10%] py-8 sm:py-12 lg:py-[10%]">
      {/* Left - Calendar */}
      <div className="bg-white text-center rounded-lg p-4 sm:p-6 w-full lg:w-[40%] text-black shadow-lg order-2 lg:order-1">
        <h3 className="text-2xl lg:text-3xl font-semibold text-[#4A148C] mb-4">Select Date</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date!)}
          inline
          calendarClassName="bg-white rounded-xl shadow-lg p-2 sm:p-4 text-center"
          dayClassName={(date) =>
            `flex items-center justify-center rounded-full transition font-medium text-sm sm:text-base ${date.toDateString() === new Date().toDateString()
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
            className="w-full p-3 border rounded text-sm sm:text-base"
            value={selectedTime ? `${selectedTime.from} - ${selectedTime.to}` : ""}
            onChange={(e) => {
              const [from, to] = e.target.value.split(" - ");
              setSelectedTime({ from, to });
            }}
          >
            {timeSlots.length === 0 ? (
              <option disabled>No slots available</option>
            ) : (
              timeSlots.map((slot, idx) => (
                <option key={idx}>
                  {slot.from} - {slot.to}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full space-y-4 lg:w-[60%] order-1 lg:order-2">
        <h1 className="font-bold text-4xl text-center lg:text-left">
          <span className="text-white">CONSULTING</span> FOR
        </h1>
        <h2 className="text-3xl font-semibold text-white/90 text-center lg:text-left">
          EVERY BUSINESS
        </h2>

        <Listbox value={selected} onChange={setSelected}>
          <div className="relative w-full">
            <label className="block mb-2 text-lg font-bold text-[#CB97FF]">
              Consultation type
            </label>
            <Listbox.Button className="w-full p-3 border rounded bg-transparent text-white flex justify-between items-center">
              <span className="flex items-center gap-2">
                {selected.icon}
                <span>{selected.name}</span>
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full bg-white text-black rounded shadow-lg z-10 max-h-32 overflow-auto">
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

        <input placeholder="Full Name:" className="w-full p-3 rounded border bg-transparent text-white placeholder-gray-400" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Phone Number:" className="w-full p-3 rounded border bg-transparent text-white placeholder-gray-400" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input placeholder="Email Address:" className="w-full p-3 rounded border bg-transparent text-white placeholder-gray-400" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div className="h-[1px] bg-white mx-auto mt-6 mb-2" />
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
          <p className="text-purple-400 text-3xl font-bold">$100</p>
          <Button
            onClick={handleCheckout}
            className="group flex items-center rounded-full border-2 border-purple-500 bg-transparent text-white hover:bg-purple-600 transition-all px-4 py-2"
          >
            <div className="flex items-center gap-2">
              <div className="bg-purple-400 p-2 rounded-full transform transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-sm font-medium transform transition-transform duration-300 group-hover:translate-x-1">
                Make Payment
              </span>
            </div>
          </Button>

        </div>
        {error && <p className="text-red-500 text-sm">{ error }</p>}
      </div>
    </div>
  );
}
