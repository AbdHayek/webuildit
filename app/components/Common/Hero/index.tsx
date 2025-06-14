import Navbar from "../../Navbar";

type HeroProps = {
  content: React.ReactNode;
};

export default function Hero({content} : HeroProps) {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white">
      <Navbar /> 
      {content}
    </section>
  );
}
