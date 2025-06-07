export default function WorldMap() {
  const pins = [
    { top: "43%", left: "23%" }, // USA
    { top: "44%", left: "75%" }, // Russia
    { top: "54%", left: "67%" }, // Middle East
    { top: "63%", left: "55%" }, // Africa
    { top: "52%", left: "78%" }, // Asia (e.g. India)
  ];

  return (
    <main className="bg-[#0b0423] min-h-screen text-white">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="pb-16">
          <h2 className="text-3xl md:text-4xl text-center text-white">
            OUR CLIENTS AROUND
          </h2>
          <p className="text-xl text-center text-white/80">THE WORLD</p>
        </div>

        <div className="relative mt-12">
          {/* World Map Image */}
          <img
            src="/assets/World/world.svg"
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
              <div className="absolute -top-2 -left-2 animate-ping w-6 h-6 bg-purple-500 rounded-full opacity-75"></div>

              {/* Inner glowing dot */}
              <div className="relative w-4 h-4 bg-purple-400 rounded-full border-2 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
