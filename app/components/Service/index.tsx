import Image from "next/image";

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
    <section
      id="service"
      className="bg-gradient-to-b from-[#070322] to-[#070322] text-white mt-[10%] px-4 md:px-20"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        OUR SERVICES
      </h2>

      {servicesData.map((service, index) => (
        <div key={index}>
          <div className=" h-[3px]  mx-auto bg-gradient-to-l from-transparent via-purple-900 to-transparent my-16" />
          <div className="flex flex-col md:flex-row items-center md:justify-between py-12 px-[5%]">
            {/* Text Content */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h3 className="text-3xl font-extrabold mb-4">{service.title}</h3>
              <p className="mb-8 text-gray-300">{service.description}</p>

              <div className="space-y-6">
                {["30%", "50%", "70%"].map((percent, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold text-lg">
                      {percent}
                    </div>
                    <p className="text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
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
      <div className=" h-[3px]  mx-auto bg-gradient-to-l from-transparent via-purple-900 to-transparent my-16" />
    </section>
  );
}
