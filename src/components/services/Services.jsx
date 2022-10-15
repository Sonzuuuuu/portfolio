import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { motion } from 'framer-motion'
import { centerHeaderAnimation, servicesAnimation } from '../../animations'
import { useScroll } from '../useScroll'

const Services = () => {
  const [element, controls] = useScroll();
  return (
    <section id='services' ref={element}>
      <motion.h5
      variants={centerHeaderAnimation}
      animate={controls}
      transition={{
        delay: 0.3,
        duration: 0.6,
        type: 'tween'
      }}>What I offer</motion.h5>
      <motion.h2
      variants={centerHeaderAnimation}
      animate={controls}
      transition={{
        delay: 0.3,
        duration: 0.6,
        type: 'tween'
      }}>Services</motion.h2>

      <motion.div className="container services__container"
      variants={servicesAnimation}
      animate={controls}
      transition={{
        delay: 0.5,
        duration: 0.6,
        type: 'tween'
      }}>
        <article className="service">
          <div className="service__head">
            <h3>Social Media Management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Chat Support/Chatbot Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Active Engagement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Customer Relationship Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Marketing/Advertising</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Creation</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backend/Frontend</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive and up-to-trend design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Engaging quality content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accessibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Brand Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Layout Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Brochures/Cards</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Shirt Designs</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </motion.div>
    </section>
  )
}

export default Services