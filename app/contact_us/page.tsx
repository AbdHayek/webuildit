import Hero from "../components/Common/Hero";
import ContactBg from "../components/Hero/ContactBg";
import Options from "./Options";

export default function ContactPage() {

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

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left Side */}
          <div className="md:w-1/2">
            <div className="space-y-6 text-xl font-medium">
              <Options />
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block text-sm mb-1">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray focus:outline-none py-2" />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray focus:outline-none py-2" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-gray focus:outline-none py-2" />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-gray focus:outline-none py-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message.."
                className="w-full bg-transparent border-b border-gray focus:outline-none py-2 resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 border cursor-pointer text-white border-[#8A3EFF] rounded-full hover:bg-[#8A3EFF] hover:text-white transition-all">
                Send message
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
