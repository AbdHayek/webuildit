import HowWeWork from "./components/HowWeWork";
import Partner from "./components/Partner";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import WorldMap from "./components/WorldMap";

export default function Home() {
  return (
    <div>
      <HowWeWork />
      <Service  />
      <Testimonial />
      <Partner />
      <WorldMap />
    </div>
  );
}
