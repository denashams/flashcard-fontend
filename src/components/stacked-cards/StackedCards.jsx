import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import building1 from "../../assets/building1.png"
import building2 from "../../assets/building2.png"
import building3 from "../../assets/building3.png"


import "swiper/css";
import "swiper/css/effect-cards";
import "./SrackedCards.css";

// required modules
import { EffectCards } from "swiper";

export default function StackedCards() {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={building1} alt="building facade" className="w-100 p-2" /></SwiperSlide>
        <SwiperSlide><img src={building2} alt="building facade" className="w-100 p-2" /></SwiperSlide>
        <SwiperSlide><img src={building3} alt="building facade" className="w-100 p-2" /></SwiperSlide>
        <SwiperSlide><img src={building1} alt="building facade" className="w-100 p-2" /></SwiperSlide>
        <SwiperSlide><img src={building2} alt="building facade" className="w-100 p-2" /></SwiperSlide>
        <SwiperSlide><img src={building3} alt="building facade" className="w-100 p-2" /></SwiperSlide>
        

      </Swiper>
    </div>
  )
}
