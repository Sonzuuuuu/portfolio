import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import CTA from './CTA'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { rightHeaderAnimation, aboutImageAnimation, aboutCardsAnimation, aboutParagraphAnimation } from '../../animations'
import { useScroll } from '../useScroll'

const About = () => {
  const [element, controls] = useScroll();
  return (
    <section id='about' ref={element}>
      <motion.h5 
      variants={rightHeaderAnimation}
      animate={controls}
      transition={{
        delay: 0.4,
        duration: 0.6,
        type: 'tween'
      }}>Get to know</motion.h5>
      <motion.h2
      variants={rightHeaderAnimation}
      animate={controls}
      transition={{
        delay: 0.3,
        duration: 0.6,
        type: 'tween'
      }}>About Me</motion.h2>
      <div className='container about__container'>
        <motion.div className='about__me'
        variants={aboutImageAnimation}
        animate={controls}
        transition={{
          delay: 0.3,
          duration: 0.6,
          type: 'tween'
        }}>
          <div className="about__me-image">
            <img src={ME} alt='About Image' /> 
          </div>
        </motion.div>

        <div className="about__content">
          <motion.div className="about__cards"
          variants={aboutCardsAnimation}
          animate={controls}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: 'tween'
          }}>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Freelancer</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Projects</small>
            </article>

          </motion.div>

          <motion.p 
          variants={aboutParagraphAnimation}
          animate={controls}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: 'tween'
          }}>
          IT graduate, a Philippine National I.T. Standards (PhilNITS) passer, quick to learn, keen with designs, and had experience with different application tools. I'm looking for a company that can broaden my
          experience with web development or programming skills. I'm also a freelance social media manager that provides organized visual content for social media pages that can easily be understood or managed
          along with my methodical procedure and calculations, your brand designs will have a competitive edge over its competitors.

          </motion.p>
          <CTA />
          {/*<a href="#contact" className='btn btn-primary'>Let's talk!</a>*/}

        </div>
      </div>  
    </section>
  )
}

export default About