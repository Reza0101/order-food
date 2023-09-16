import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function sliderNavbar() {
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
        <SwiperSlide>
          <img className='w-[100%] h-[176px] sm:h-[220px] md:h-[336px]' src="./Images/slider1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[176px] sm:h-[220px] md:h-[336px]' src="./Images/slider2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[176px] sm:h-[220px] md:h-[336px]' src="./Images/slider3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[176px] sm:h-[220px] md:h-[336px]' src="./Images/slider4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[176px] sm:h-[220px] md:h-[336px]' src="./Images/slider5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[100%] h-[176px] sm:h-[220px] md:h-[336px]' src="./Images/slider6.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
