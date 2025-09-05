import GradientLine from "../Common/GradientLine";
import MainTitle from "../Common/MainTitle";
import ServiceList from "./ServiceList";



  export default function Services() {
    return (
      <section id="service" className="text-white px-4 md:px-20">
         <MainTitle children="OUR SERVICES" className="mb-16" />
         <ServiceList  />
        <GradientLine />
      </section>
    );
  }