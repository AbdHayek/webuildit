import Hero from "../components/Common/Hero";
import ContactBg from "../components/Hero/ContactBg";
import Form from "./Form";

export default  function ContactPage() {

  return (
    <div>
      <Hero content={<ContactBg />} />

      {/* Content Section */}
      <section className="text-white px-[10%] py-[10%] border-t border-gray-700 relative">

        {/* Right-side Gradient Background */}
        <div
          className="absolute right-0 top-[0%] h-[50%] w-[6%] 
            bg-gradient-to-b from-[#7300FF]/100 via-[#FF0084]/40 to-transparent 
            filter blur-3xl"
        ></div>

        {/* Left-side Gradient Background */}
        <div
          className="absolute left-0 top-[0%] h-[50%] w-[2.5%] 
            bg-gradient-to-b  via-[#FF0084]/100 to-transparent 
            filter blur-3xl"
        ></div>


        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Talk About<span> :</span>
          </h2>
          <p className="text-lg mb-12 text-gray-300">
            Have a project in mind that you think we’d be a great fit for it? We’d love to know what you’re thinking
          </p>
        </div>

        <Form  />

         
      </section>


    </div>
  );
}
