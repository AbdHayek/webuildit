import GradientLine from "../Common/GradientLine";
import ServiceList from "./ServiceList";



  export default function Services() {
    return (
      <section id="service" className="text-white px-4 md:px-20">
        <h2 className="text-center text-[40px] font-medium mb-12">
          OUR SERVICES
        </h2>
         <ServiceList  />
        <GradientLine />
      </section>
    );
  }