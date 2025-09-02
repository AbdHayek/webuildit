"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.scss";
import BorderCard from "../Common/BorderCard";
import { useRef, useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function Testimonial() {
  const swiperRef = useRef<any>(null);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        return res.json();
      })
      .then((data) => setTestimonials(data.length < 4 && data.length !== 1 ? [...data, ...data] : data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="text-white py-16 swiper-testimonial">
      <div className="text-center mb-12">
        <h2 className="font-medium text-[40px]">HEAR FROM OUR</h2>
        <p className="font-medium text-[40px] mt-2 text-gray-300">CUSTOMERS</p>
      </div>

      <div className="mx-auto relative ">
        <div
          className="absolute left-0 top-0 h-full w-[20%] z-10 cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <div
          className="absolute right-0 top-0 h-full  w-[20%] z-10 cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        />
        <div className="absolute left-0 top-0 h-full w-[5%] bg-gradient-to-r from-[#070322]  via-[#070322]/500 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-[5%] bg-gradient-to-l from-[#070322] via-[#070322]/500 to-transparent z-10 pointer-events-none" />
        {loading ? (
          <div className="text-center py-10">Loading testimonials...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-10">No testimonials found.</div>
        ) : (
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            watchSlidesProgress={true}
            slideActiveClass="swiper-slide-active"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 }
            }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <BorderCard />
                <div className="bg-[#4935824A] rounded-2xl p-8 text-center shadow-lg">
                  <h3 className="text-3xl mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-[16px] mb-6"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content || '') }}>
                  </p>
                  <hr className="border-gray-600 mb-4 w-1/2 mx-auto" />
                  <div className="relative flex items-center">
                    <p className="text-lg mx-auto">{item.author}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-0 flex items-center p-5"
                    >
                      <img
                        src="/assets/testimonial/link.svg"
                        alt="link"
                        className="w-5 h-5"
                      />
                    </a>
                  </div>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
