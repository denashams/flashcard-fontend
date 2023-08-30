import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/header-image1.jpg";
import image2 from "../../assets/header-image2.jpg";
import image3 from "../../assets/header-image3.jpg";

import "./Slider.css";

export default function Slider() {
  return (
    <div className="header-slider-container">
      <Carousel fade >
        <Carousel.Item>
          <img className="image-fluid" src={image1} alt="First slide" loading="lazy" />
          <Carousel.Caption>
            <h3>عنوان اسلاید اول</h3>
            <p> متن اسلاید اول-متن اسلاید اول-متن اسلاید اول</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="Second slide"className="image-fluid" loading="lazy" />

          <Carousel.Caption>
            <h3>عنوان اسلاید دوم</h3>
            <p>متن اسلاید دوم-متن اسلاید دوم-متن اسلید دوم</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="Third slide" className="image-fluid" loading="lazy" />

          <Carousel.Caption>
            <h3>عنوان اسلاید سوم</h3>
            <p>متن اسلاید سوم-متن اسلاید سوم-متن اسلید سوم</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </div>
  );
}
