import React from "react";

import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Slider3d.css";

import pic1 from "../../assets/flashcards/1.jpg";
import pic2 from "../../assets/flashcards/2.jpg";
import pic3 from "../../assets/flashcards/3.jpg";
import pic4 from "../../assets/flashcards/4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Slider3d() {
  return (
    <div className="photo-container">
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        loop="true"
        modifier={2.5}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 300,
        }}
        breakpoints={{
          700: {
            spaceBetween: 0,
            slidesPerView: 4,
          },
          500: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          411: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          300: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img src={pic1} alt="pic1" className="d-block image-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="pic2" className=" d-block image-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="pic3" className="d-block image-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt="pic4" className=" d-block image-fluid" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
