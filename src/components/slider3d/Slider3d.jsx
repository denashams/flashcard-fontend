import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";
import "./Slider3d.css";

export default function Slider3d({ images, navigation, pagination }) {
  return (
    <div className="photo-container">
      <Swiper
        effect="coverflow"
        grabCursor={true} // Remove quotes around true to make it a boolean
        centeredSlides={true} // Remove quotes around true to make it a boolean
        loop={true} // Remove quotes around true to make it a boolean
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={pagination} // Pass pagination as a prop
        navigation={navigation} // Pass navigation as a prop
        modules={[Pagination, Navigation, EffectCoverflow]}
        spaceBetween={20}
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="d-block image-fluid"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Slider3d.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  navigation: PropTypes.bool,
  pagination: PropTypes.bool,
};
