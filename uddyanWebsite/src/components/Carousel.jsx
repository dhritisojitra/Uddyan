import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img5 from "../assets/img5.jpeg"
import img4 from "../assets/img4.jpeg"
import img3 from "../assets/img3.jpeg"

export default function Carousel() {
  const slides = [
    { id: 1, img: img5, title: "Fun Learning" },
    { id: 2, img: img3, title: "Explore Science" },
    { id: 3, img: img4, title: "Creative Arts" },
  ];

  return (
    <div className="max-w-8xl  max-h-4xl mx-auto p-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-2xl shadow-lg bg-white p-4"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="rounded-2xl overflow-hidden shadow-md bg-white">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-600">{slide.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
