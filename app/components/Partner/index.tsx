"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Partner() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/partners")
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="pt-[10%] pb-[10%] text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-[40px] font-medium md:text-4xl">OUR PARTNERS</h2>
      </div>

      {/* Swiper Slider */}
      <div className="px-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-10">Loading partners...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : partners.length === 0 ? (
          <div className="text-center py-10">No partners found.</div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={40}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partners.map((partner: any) => (
              <SwiperSlide
                key={partner.id}
                className="flex justify-center items-center"
              >
                <Image
                  src={partner.img}
                  alt={partner.id}
                  width={200}
                  height={200}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="mt-24 h-[2px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

      {/* Right-side Gradient Background */}
      <div
        className="absolute right-0 top-[40%] h-[60%] w-[6%] 
        bg-gradient-to-b from-[#7300FF]/100 via-[#FF0084]/40 to-transparent 
        filter blur-3xl"
      ></div>
    </section>
  );
}
