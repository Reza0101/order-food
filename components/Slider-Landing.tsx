import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SliderNavbar() {
  const sliderItems = [
    {
      id: 1,
      title: "یک ماجراجویی آشپزی برای تمام حواس",
      img: "./Images/slider1.jpg",
    },
    { id: 2, title: "هر روز، یک تجربه مزه جدید", img: "./Images/slider2.jpg" },
    {
      id: 3,
      title: "تجربه ای که فراموش نخواهید کرد",
      img: "./Images/slider3.jpg",
    },
    { id: 4, title: "طعم بی نظیر طبیعت!", img: "./Images/slider4.jpg" },
    { id: 5, title: "یک وعده غدایی ساده با هم", img: "./Images/slider5.jpg" },
    { id: 6, title: "طعمی که به یاد خواهید آورد", img: "./Images/slider6.jpg" },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderItems.map((slider) => (
          <SwiperSlide className="relative bg-black">
            <img
              className="w-[100%] opacity-[0.5] bg-black object-cover h-[176px] sm:h-[220px] md:h-[336px] lg:h-[400px]"
              src={slider.img}
              alt=""
            />
            <p className="absolute top-0 w-[100%] h-[100%] flex justify-center items-center text-white text-2xl font-bold">
              {slider.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
