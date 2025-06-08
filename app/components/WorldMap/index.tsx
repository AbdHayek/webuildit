import Image from "next/image";

export default function WorldMap() {
  const pins = [
    { top: "23%", left: "13%" }, // USA
    { top: "24%", left: "75%" }, // Russia
    { top: "44%", left: "67%" }, // Middle East
    { top: "43%", left: "55%" }, // Africa
    { top: "42%", left: "78%" }, // Asia (e.g. India)
  ];

  return (
    <main className="bg-[#0b0423] text-white">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="pb-16">
          <h2 className="text-3xl md:text-4xl text-center text-white">
            OUR CLIENTS AROUND
          </h2>
          <p className="text-xl text-center text-white/80">THE WORLD</p>
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
              className="absolute z-20"
              style={{ top: pin.top, left: pin.left }}
            >
              {/* Outer ping effect */}
              <div className="absolute   animate-ping w-6 h-6 bg-purple-500 rounded-full opacity-75"></div>

              {/* Inner glowing dot */}
              <Image
                width="50"
                height="50"
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
