import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/biboy.PNG'
import AVTR2 from '../../assets/sir_tabs.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'
import { testimonialsAnimation } from '../../animations'
import { useScroll } from '../useScroll'

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Leonardo Torrible III',
    position: "FCSO School President",
    review: "Alberson is a creative powerhouse - a real asset to forming the school's first social campaign."
  },
  {
    avatar: AVTR2,
    name: 'Edgar Tabinas',
    position: "Josephinian Magazine",
    review: "Alberson's approach is incredibly positive person to work with. His knowledge of content distribution and social media was key to kickstarting our publication club."
  }/*,
  {
    avatar: AVTR3,
    name: 'Kurame Despite',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis, nunc at viverra laoreet, ligula lectus suscipit est, sed sollicitudin eros urna eget libero. Donec id risus est. Nulla dignissim ligula risus, a molestie sem efficitur sollicitudin. Fusce quis rutrum libero, vitae fermentum metus.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ana Mcbrown',
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis, nunc at viverra laoreet, ligula lectus suscipit est, sed sollicitudin eros urna eget libero. Donec id risus est. Nulla dignissim ligula risus, a molestie sem efficitur sollicitudin. Fusce quis rutrum libero, vitae fermentum metus."
  }*/
]

const Testimonials = () => {
  const [element, controls] = useScroll();
  return (
    <motion.section id='testimonials' ref={element}
      variants={testimonialsAnimation}
      animate={controls}
      transition={{
        delay: 0.4,
        duration: 0.6,
        type: 'tween'
      }}>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, position, review}, index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h4 className="client__name">{name}</h4>
              <h5 className="client__position">{position}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }      
      </Swiper>
    </motion.section>
  )
}

export default Testimonials