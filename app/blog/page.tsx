import Image from "next/image";
import Hero from "../components/Common/Hero";
import { Metadata } from "next";
import Background from "../components/Hero/Background";

export const metadata: Metadata = {
  title: "Blog | Your Brand Name",
  description: "Explore insightful articles on web design, development, UI/UX tips, and more. Stay updated with the latest trends in the digital space.",
};

export default function BLog() {
  return (
    <div>
      <Hero content={<Background title="Blog" img="/assets/Blog/cover.jpg" />} />

      {/* Content Section */}
      <div className="pb-[15%] px-[10%] pt-[5%] relative">

        {/* Right-side Gradient Background */}
        <div
          className="absolute right-0 top-[15%] h-[70%] w-[4%] 
            bg-gradient-to-b from-[#7300FF]/100 via-[#FF0084]/40 to-transparent 
            filter blur-3xl"
        ></div>

        {/* Left-side Gradient Background */}
        <div
          className="absolute left-0 bottom-[0%] h-[70%] w-[2%] 
            bg-gradient-to-b  via-[#FF0084]/100 to-transparent 
            filter blur-3xl"
        ></div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div>
            <Image
              src="/assets/AboutUs/cover.jpg"
              alt="Illustration"
              className="rounded-2xl"
              width={367.5}
              height={339.4}
            />
            <div className="pt-3">
              <h3 className="text-xl font-semibold mb-2">
                How to make a website look more attractive with illustrations.
              </h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
              </p>
              <a
                href="#"
                className="text-[#8A3EFF] font-medium inline-flex items-center hover:underline"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <Image
              src="/assets/AboutUs/cover.jpg"
              alt="UI/UX Portfolio"
              className="rounded-2xl"
              width={367.5}
              height={339.4}
            />
            <div className="pt-3">
              <h3 className="text-xl font-semibold mb-2">
                How to build strong portfolio and get a Job in UI/UX
              </h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
              </p>
              <a
                href="#"
                className="text-[#8A3EFF] font-medium inline-flex items-center hover:underline"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <Image
              src="/assets/AboutUs/cover.jpg"
              alt="Illustration"
              className="rounded-2xl"
              width={367.5}
              height={339.4}
            />
            <div className="pt-3">
              <h3 className="text-xl font-semibold mb-2">
                How to make a website look more attractive with illustrations.
              </h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
              </p>
              <a
                href="#"
                className="text-[#8A3EFF] font-medium inline-flex items-center hover:underline"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div>
            <Image
              src="/assets/AboutUs/cover.jpg"
              alt="UI/UX Portfolio"
              className="rounded-2xl"
              width={367.5}
              height={339.4}
            />
            <div className="pt-3">
              <h3 className="text-xl font-semibold mb-2">
                How to build strong portfolio and get a Job in UI/UX
              </h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
              </p>
              <a
                href="#"
                className="text-[#8A3EFF] font-medium inline-flex items-center hover:underline"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

