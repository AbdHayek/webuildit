import Image from "next/image";
import Hero from "../components/Common/Hero";
import { Metadata } from "next";
import Background from "../components/Hero/Background";

export const metadata: Metadata = {
  title: "About Us | Your Brand Name",
  description: "Learn about our mission, team, and how we help clients launch successful projects within budget using agile development practices.",
};

export default  function AboutPage() {
  return (
    <div>
      <Hero content={<Background title="About Us" img="/assets/AboutUs/cover.jpg" />} />

      {/* Content Section */}
      <div className="pb-[10%] px-[10%] pt-[5%] relative border-t border-gray-700">

        {/* Right-side Gradient Background */}
        <div
          className="absolute right-0 top-[15%] h-[70%] w-[6%] 
            bg-gradient-to-b from-[#7300FF]/100 via-[#FF0084]/40 to-transparent 
            filter blur-3xl"
        ></div>

        {/* Left-side Gradient Background */}
        <div
          className="absolute left-0 bottom-[0%] h-[70%] w-[2.5%] 
            bg-gradient-to-b  via-[#FF0084]/100 to-transparent 
            filter blur-3xl"
        ></div>

        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-3/4 p-20">
            <p className="text-lg leading-loose text-left">
              We help our clients launch their projects within their budgets by breaking down complex development processes into achievable milestones. This method not only reduces costs but ensures visible progress at every stage.
            </p>
          </div>
          <div className="md:w-1/4">
            <Image src="/assets/AboutUs/shape-1.png" alt="Shape-2" width={208} height={178} />
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className=" md:w-1/4">
            <Image src="/assets/AboutUs/shape-2.png" alt="Shape-2" width={208} height={178} />
          </div>
          <div className="md:w-3/4 p-20">
            <p className="text-lg leading-loose text-right">
              Our team is composed of seasoned professionals who thrive in a remote-first environment. We believe that creativity and productivity flourish with flexible working hours and freedom from location constraints. Specializing in mobile apps, websites, backend development, UI/UX design, and project planning, we offer end-to-end solutions to meet your unique needs.
            </p>
          </div>
        </div>

      </div>


    </div>
  );
}
