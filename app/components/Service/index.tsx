import Image from "next/image";
import GradientLine from "../Common/GradientLine";
import AnimatedPercent from "../Common/AnimatedPercent";

const servicesData = [
  {
    title: "MOBILE APP DEVELOPMENT",
    description: "iOS & Android applications, cross-platform solutions.",
    image: "/assets/Service/mobile_app.png",
    imageAlt: "Mobile App Illustration",
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Scalable and secure web solutions, eCommerce, CMS platforms.",
    image: "/assets/Service/web_development.png",
    imageAlt: "Web Development Illustration",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "Creating seamless user experiences through wireframing & prototyping",
    image: "/assets/Service/ux_design.png",
    imageAlt: "UX Design Illustration",
  },
  {
    title: "CLOUND SOLUTIONS",
    description: "Optimized and secure cloud infrastructures DevOps services",
    image: "/assets/Service/cloud_solution.png",
    imageAlt: "Cloud Solutions Illustration",
  },
  {
    title: "CONSULTATION & STRATEGY",
    description:
      "Helping businesses shape their tech roadmap and digital transformation",
    image: "/assets/Service/consultation.png",
    imageAlt: "Consultation Illustration",
  },
];

export default function Services() {
  return (
    <section id="service" className="text-white mt-[10%] px-4 md:px-20">
      <h2 className="text-center text-[40px] font-medium mb-12">
        OUR SERVICES
      </h2>

      {servicesData.map((service, index) => (
        <div key={index}>
          <GradientLine />
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-20 py-12 px-[5%]">
            {/* Text Content */}
            <div className="md:w-3/4 mb-10 md:mb-0">
              <h3 className="text-[40px] font-bold mb-4">{service.title}</h3>
              <p className="mb-8 text-[#F6F3F8] text-[28px]">
                {service.description}
              </p>

              <div className="space-y-6">
                {["30%", "50%", "70%"].map((percent, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="relative flex items-center justify-center font-bold text-xl">
                      {/* Ring with conic-gradient */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `conic-gradient(#CB97FF ${percent}, #7320E35E ${percent})`,
                          maskImage:
                            "radial-gradient(circle, transparent 60%, black 61%)",
                          WebkitMaskImage:
                            "radial-gradient(circle, transparent 60%, black 61%)",
                        }}
                      />

                      {/* Center number */}
                      <AnimatedPercent value={parseInt(percent)} />
                    </div>

                    <p className="text-[16px">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/4 flex justify-center">
              <Image
                src={service.image}
                width={250}
                height={250}
                alt={service.imageAlt}
              />
            </div>
          </div>
        </div>
      ))}

      <GradientLine />
    </section>
  );
}
