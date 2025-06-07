"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.scss";

const testimonials = [
  {
    title: "That was incredible !",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Byeon Wo Soek",
  },
  {
    title: "Amazing work!",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Jane Smith",
  },
  {
    title: "Highly Recommend!",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Alex Johnson",
  },
  {
    title: "That was incredible !",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Byeon Wo Soek",
  },
  {
    title: "Amazing work!",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Jane Smith",
  },
  {
    title: "Highly Recommend!",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Alex Johnson",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-[#070322] text-white py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl">HEAR FROM OUR</h2>
        <p className="text-2xl mt-2 text-gray-300">CUSTOMERS</p>
      </div>

      <div className="mx-auto px-4">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          watchSlidesProgress={true}
          slideActiveClass="swiper-slide-active"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#1a1042] rounded-2xl p-8 text-center border border-purple-500 shadow-lg">
                <h3 className="text-2xl  mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.content}</p>
                <hr className="border-gray-600 mb-4 w-1/2 mx-auto" />
                <p className="text-lg">{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
