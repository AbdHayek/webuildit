"use client";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Consulting.scss";
import { Button } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { stripePromise } from '@/lib/stripe';
import { AlertCircle } from "lucide-react";

export default function Consultion() {
  const [selectedDate, setSelectedDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
  const [timeSlots, setTimeSlots] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionUri, setSessionUri] = useState<string | null>(null);
  const [slotsWithPayment, setSlotsWithPayment] = useState<any[]>([]);
  const [eventType, setEventType] = useState<any[]>([]);
  const [eventSelected, setEventSelected] = useState("")

  const toStartOfDayUTC = (dateStr: string) => {
    const date = new Date(dateStr);
    // force to 00:00:00 in UTC
    date.setUTCHours(0, 0, 0, 0);
    return date.toISOString();
  };

  const getHourMinute = (dateStr: string) => {
    const date = new Date(dateStr);
    // get UTC hours & minutes (if you want local, use getHours/getMinutes)
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const addHoursSameDay = (dateStr: any, hours: any) => {
    const date = new Date(dateStr);

    // store the original day and month (UTC)
    const originalDay = date.getUTCDate();
    const originalMonth = date.getUTCMonth(); // 0-based (0 = Jan, 11 = Dec)
    const originalYear = date.getUTCFullYear();

    // add the hours
    date.setUTCHours(date.getUTCHours() + hours);

    // if we rolled into the next day or month (or year), clamp
    if (
      date.getUTCDate() !== originalDay ||
      date.getUTCMonth() !== originalMonth ||
      date.getUTCFullYear() !== originalYear
    ) {
      date.setUTCFullYear(originalYear);
      date.setUTCMonth(originalMonth);
      date.setUTCDate(originalDay);
      date.setUTCHours(23, 59, 59, 999);
    }

    return date.toISOString();
  };


  useEffect(() => {

    const fetchEventTypes = async () => {

      setError("");

      try {
        const eventTypeRes = await fetch(`/api/calendly/event-type`);

        if (!eventTypeRes.ok) {
          // Manually throw to be caught by catch()
          throw new Error(`Failed to fetch Event Types: ${eventTypeRes.status} ${eventTypeRes.statusText}`);
        }

        const eventTypeData = await eventTypeRes.json();
        const allEventTypeActive = eventTypeData.collection.filter((val: any) => val.active);
        setEventType(allEventTypeActive);
        setSessionUri(allEventTypeActive.length > 0 ? allEventTypeActive[0].uri : null);
        setEventSelected(allEventTypeActive[0]);

      } catch (error) {
        setError(error?.message || "Unknown error");
        console.error("Error fetching Event Types", error);
      }
    };

    fetchEventTypes();
  }, []);


  useEffect(() => {

    const fetchAvablility = async () => {

      const start_time = toStartOfDayUTC(new Date(selectedDate).toISOString());
      const end_time = addHoursSameDay(start_time, 23);

      setError("");
      setSlotsWithPayment([])

      try {
        const avablilityRes = await fetch(`/api/calendly/availability?event_type_uri=${sessionUri}&start_time=${start_time}&end_time=${end_time}`);

        if (!avablilityRes.ok) {
          // Manually throw to be caught by catch()
          throw new Error(`Failed to fetch Event Types: ${avablilityRes.status} ${avablilityRes.statusText}`);
        }

        const avablilityData = await avablilityRes.json();
        setSlotsWithPayment(avablilityData.collection);
        setTimeSlots(avablilityData.collection[0])
      } catch (error) {
        setError(error?.message || "Unknown error");
        console.error("Error fetching availability", error);
      }
    }

    if (sessionUri) {
      setEventSelected(eventType.find(e => e.uri === sessionUri));
      fetchAvablility();
    }

  }, [selectedDate, sessionUri]);

  const handleCheckout = async () => {

    if (!selectedDate || !name || !email || !phone || !sessionUri) {
      setError("Please fill all the fields and select a time slot");
      return;
    }
    setError("");

    const stripe = await stripePromise;
    const res = await fetch("/api/calendly/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name, email: email, phone: phone, sessionUri: sessionUri, time: getHourMinute(timeSlots.start_time)
      }),
    });

    const { sessionId } = await res.json();
    await stripe?.redirectToCheckout({ sessionId });

  };


  return (
    <div id="consultation" className="min-h-screen text-white flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-[10%] px-4 sm:px-6 lg:px-[10%] py-8 sm:py-12 lg:py-[10%]">
      {/* Left - Calendar */}
      <div className="bg-white text-center rounded-lg p-4 sm:p-6 w-full lg:w-[40%] text-black shadow-lg order-2 lg:order-1">
        <h3 className="text-2xl lg:text-3xl font-semibold text-[#4A148C] mb-4">Select Date</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date!)}
          inline
          minDate={new Date(new Date().setDate(new Date().getDate() + 1))} // disable today & past
          calendarClassName="bg-white rounded-xl shadow-lg p-2 sm:p-4 text-center"
          dayClassName={(date) =>
            `flex items-center justify-center rounded-full transition font-medium text-sm sm:text-base ${date.toDateString() === new Date().toDateString()
              ? "bg-purple-300 text-gray-400 cursor-not-allowed" // style disabled today
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
            value={timeSlots ? JSON.stringify(timeSlots) : ""}
            onChange={(e) => {
              const parsed = JSON.parse(e.target.value);
              setTimeSlots(parsed);
            }}
          >
            {slotsWithPayment.length === 0 ? (
              <option disabled>No slots available</option>
            ) : (
              slotsWithPayment.map((slot, idx) =>
                slot.status === "available" && slot.invitees_remaining > 0 && (
                  <option value={JSON.stringify(slot)} key={idx}>
                    {getHourMinute(slot.start_time)}
                  </option>
                )
              )
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

        {eventType?.length > 0 ?
          <Listbox onChange={setSessionUri}>
            <div className="relative w-full">
              <label className="block mb-2 text-lg font-bold text-[#CB97FF]">
                Consultation type
              </label>

              {/* Trigger button */}
              <Listbox.Button className="w-full p-3 border rounded text-left">
                {eventSelected
                  ? `${eventSelected?.name} - ${eventSelected?.duration} MIN`
                  : "Select a type"}
              </Listbox.Button>

              {/* Dropdown options */}
              <Listbox.Options className="absolute mt-1 w-full bg-white text-black rounded shadow-lg z-10 max-h-32 overflow-auto">
                {eventType.map((option) => (
                  <Listbox.Option
                    key={option.uri}
                    value={option.uri}
                    className="cursor-pointer p-2 hover:bg-purple-100 flex items-center gap-2"
                  >
                    {option.name + " - " + option.duration + " Min "}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
          : <Listbox>
            <div className="relative w-full">
              <label className="block mb-2 text-lg font-bold text-[#CB97FF]">
                Consultation not available now
              </label>
            </div>
          </Listbox>}

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
        {error && (
          <div className="mt-2 flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 border border-red-200">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
