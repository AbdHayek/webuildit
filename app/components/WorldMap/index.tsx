import Image from "next/image";
import MainTitle from "../Common/MainTitle";

export default function WorldMap() {
  const pins = [
    { top: "43.5%", left: "67.8%", label: "UAE, Dubai: 4 Happy Clients" },
    { top: "43%", left: "64%", label: "Saudi Arabia, Riyadh: 2 Happy Clients" },
    { top: "15%", left: "15%", label: "Canada, Vancouver: 1 Happy Client" },
    { top: "37%", left: "63%", label: "Syria, Damascus: 3 Happy Clients" },
    { top: "38%", left: "65%", label: "Iraq, Erbil: 1 Happy Client" },
    { top: "27%", left: "56%", label: "Germany: 2 Happy Client" },
    { top: "31%", left: "58.5%", label: "Serbia: Negotiations in progress" },
  ];


  return (
    <main className="relative">
      <div
        className="absolute left-[0%]  bottom-[25%] h-[70%] w-[5%] 
            bg-gradient-to-b from-[#7300FF]/100 via-[#FF0084]/40 to-transparent 
            filter blur-3xl"
      ></div>
      <div className="w-full max-w-7xl mx-auto">
        {/* Left-side Gradient Background */}
        <div>
          <MainTitle children="CLIENTS AROUND" className="mb-2" />
          <MainTitle children="THE WORLD" className="text-gray-300" />
        </div>

        <div className="relative mt-12">
          {/* World Map Image */}
          <Image
            width="1200"
            height="1200"
            src="/assets/World/map.svg"
            alt="World Map"
            className="w-full object-cover"
          />

          {/* Pins */}
          {pins.map((pin, idx) => (
            <div
              key={idx}
              className="absolute group max-440-hidden" // group for hover behavior
              style={{ top: pin.top, left: pin.left }}
            >
              {/* Tooltip text */}
              <div className="absolute w-[230px] z-20 mb-2 right-[0%] left-[90%] -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {pin.label}
              </div>

              {/* Outer ping effect */}
              <div className="absolute animate-ping w-6 h-6 bg-purple-500 rounded-full opacity-75"></div>

              {/* Inner glowing dot */}
              <Image
                width="10"
                height="10"
                src="/assets/World/pin_location.svg"
                alt="World Map"
                className="relative w-7 h-7"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
