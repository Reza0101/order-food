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
  console.log(data);

  return (
    <div dir="rtl">
      <Swiper
        breakpoints={{
          500: {
            slidesPerView: 3,
          },
          771: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        }}
        slidesPerView={1.8}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item: any) => (
          <SwiperSlide>
            <BoxFood {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
