import React, { useRef, useState } from "react";
import BoxFood from "./Box-food";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function SliderBox({ data }: any) {

  return (
    <div dir="rtl">
      <Swiper
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          830: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        }}
        slidesPerView={1.8}
        spaceBetween={10}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item: any) => (
          <SwiperSlide key={crypto.randomUUID()}>
            <BoxFood {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
