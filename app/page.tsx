import Consultion from "./components/Consultion";
import GrowYourBusiness from "./components/GrowYourBusiness";
import HowWeWork from "./components/HowWeWork";
import Partner from "./components/Partner";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import WorldMap from "./components/WorldMap";

export default function Home() {
  return (
    <div>
      <HowWeWork />
      <GrowYourBusiness />
      <Service  />
      <Testimonial />
      <Partner />
      <WorldMap />
      <Consultion />
    </div>
  );
}
