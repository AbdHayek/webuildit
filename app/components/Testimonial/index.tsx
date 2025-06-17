"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.scss";
import BorderCard from "../Common/BorderCard";
import { useRef } from "react";

const testimonials = [
  {
    title: "That was incredible !",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable. The project was delivered on time, and the quality was impeccable.",
    author: "Byeon Wo Soek",
  },
  {
    title: "Amazing work!",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable. The project was delivered on time, and the quality was impeccable.",
    author: "Jane Smith",
  },
  {
    title: "Highly Recommend!",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable. The project was delivered on time, and the quality was impeccable.",
    author: "Alex Johnson",
  },
  {
    title: "That was incredible !",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable. The project was delivered on time, and the quality was impeccable.",
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
  const swiperRef = useRef<any>(null);

  return (
    <section className="text-white py-16">
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
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
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
            1024: { slidesPerView: 2 },
          }}

        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <BorderCard />
              <div className="bg-[#4935824A] rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-3xl mb-4">{item.title}</h3>
                <p className="text-gray-300 text-[16px] mb-6">{item.content}</p>
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
