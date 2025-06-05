
const steps = [
  {
    title: "WE LISTEN TO YOUR IDEA",
    text: "Tell us what you have in mind!",
    number: "1",
  },
  {
    title: "WE RESEARCH & ANALYZE",
    text: "We dig deep to understand the best approach",
    number: "2",
  },
  {
    title: "WE SHARE OUR SUGGESTIONS",
    text: "Honest advice to make your idea even better",
    number: "3",
  },
  {
    title: "WE DELIVER ON TIME",
    text: "Just as promised!",
    number: "6",
  },

  {
    title: "WE DESIGN & DEVELOP",
    text: "Bringing your vision to life, step by step",
    number: "5",
  },

  {
    title: "WE AGREE ON PRICING",
    text: "Transparent and fair, no surprises",
    number: "4",
  },
];

export default function HowWeWork() {
  return (
<section className="bg-[#070322] text-white px-6 py-20 relative">
  {/* Right-side Gradient Background */}
  {/* <div className="absolute right-0 top-20 h-[50%] w-20 bg-gradient-to-l from-[#7300FF]/30 via-[#FF0084]/30 to-transparent pointer-events-none"></div> */}

  <div className="max-w-7xl mx-auto"> {/* CONTAINER ADDED */}
    <h2 className="text-center text-4xl font-bold mb-16">HOW DO WE WORK</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-20 relative">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${
            (index === 1 || index === 4) && "md:top-[50%]"
          } flex flex-col items-center text-center px-4 sm:px-6 relative`}
        >
          <div className="relative w-[75%] z-[9999]  max-w-[90%] sm:max-w-[320px] lg:max-w-[360px]">
            {/* Corner Borders */}
            <div
              className="hidden sm:block absolute top-0 left-[0%] w-[20%] h-[20%] border-t border-l rounded-tl-md"
              style={{
                borderTopColor: "rgba(146, 84, 236, 1)",
                borderLeftColor: "rgba(146, 84, 236, 0.5)",
              }}
            />
            <div
              className="hidden sm:block absolute bottom-0 right-[0%] w-[20%] h-[20%] border-b border-r rounded-br-md"
              style={{
                borderBottomColor: "rgba(146, 84, 236, 1)",
                borderRightColor: "rgba(146, 84, 236, 0.5)",
              }}
            />

            {/* Step Box */}
            <div className="flex gap-4 sm:gap-2 bg-[#180F37] border border-[#180F37] text-left p-4 rounded-lg w-full">
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-bold">
                  {step.title}
                </h4>
                <p className="text-sm mt-2">{step.text}</p>
              </div>

              <div
                className="text-[48px] sm:text-[72px] md:text-[90px] font-bold opacity-50 -mt-2 sm:-mt-4"
                style={{
                  color: "#180F37",
                  WebkitTextStroke: "1px #9254EC",
                }}
              >
                {step.number}
              </div>
            </div>
          </div>

          {/* Line connectors (shown only on large screens) */}
          {(index === 0 || index === 3) && (
            <div className="hidden lg:block text-purple-600 absolute left-[79%] top-0 bottom-0">
              <svg width="400" height="400" viewBox="0 0 300 300" fill="none">
                <path
                  d="M 0 50 H 80 C 120 50, 120 150, 160 150"
                  stroke="#2E1158"
                  strokeWidth="3"
                />
              </svg>
            </div>
          )}
          {index === 2 && (
            <div className="hidden lg:block text-purple-600 absolute top-[50%] left-0 rotate-90">
              <svg width="400" height="300" viewBox="0 0 300 300" fill="none">
                <path
                  d="M 0 50 H 80 C 120 50, 120 150, 160 150"
                  stroke="#2E1158"
                  strokeWidth="3"
                />
              </svg>
            </div>
          )}
          {(index === 1 || index === 4) && (
            <div className="hidden lg:block text-purple-600 absolute left-[27%] top-[-47%]">
              <svg width="400" height="400" viewBox="0 0 300 300" fill="none">
                <path
                  d="M 0 50 H 80 C 120 50, 120 150, 160 150"
                  stroke="#2E1158"
                  strokeWidth="3"
                  transform="scale(-1, 1) translate(-300,0)"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
