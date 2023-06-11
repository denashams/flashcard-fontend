import React from 'react'
import './testimonials.css'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'

import {Navigation, Pagination} from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
    {
    avatar: user1,
    name: "Elahe Vosouq",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur dolores veniam hic est temporibus voluptas voluptatem et maxime id. Beatae quia odio magni aliquid possimus ullam cupiditate exercitationem amet!"
    
    }, {avatar: user2,
      name: "Ali Amiri",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur dolores veniam hic est temporibus voluptas voluptatem et maxime id. Beatae quia odio magni aliquid possimus ullam cupiditate exercitationem amet!"
      }, {avatar: user3,
        name: "Mohammad Amini",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur dolores veniam hic est temporibus voluptas voluptatem et maxime id. Beatae quia odio magni aliquid possimus ullam cupiditate exercitationem amet!"
        }
    
    
    ]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div className="testimonials__heading">
            <h5>Reviews from Users</h5>
      <h2>Testimonials</h2>
            </div>
            <Swiper className='testimonials__container'
        modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      
       {data.map(({avatar, name, review}, index) => {

        return(
          
          <SwiperSlide key={index} className='testimonials'>
          <div className='user__avatar'>

          <img src={avatar} alt="user avatar" />
          </div>
          <h5 className='user__name'>{name}</h5>
          <small className='user__review'>{review}</small>
        </SwiperSlide>
        )
      })}
      
         
      </Swiper>
        </section>
    )
}





export default Testimonials