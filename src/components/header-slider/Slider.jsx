import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import architecture from "../../assets/architecture.jpg"
import garden from "../../assets/garden.png"
import landscape from "../../assets/landscape.jpg"




export default function Slider() {
  return (
    <div>
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-25 mx-auto rounded"
          src={architecture}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>عنوان اسلاید اول</h3>
          <p> متن اسلاید اول-متن اسلاید اول-متن اسلاید اول</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 mx-auto rounded"
          src={garden}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>عنوان اسلاید دوم</h3>
          <p>متن اسلاید دوم-متن اسلاید دوم-متن اسلید دوم</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 mx-auto rounded"
          src={landscape}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>عنوان اسلاید سوم</h3>
        <p>متن اسلاید سوم-متن اسلاید سوم-متن اسلید سوم</p>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>    </div>
  )
}
