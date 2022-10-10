import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About Image' /> 
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Freelance</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4 Personal Projects</small>
            </article>

          </div>

          <p>
          IT graduate, a Philippine National I.T. Standards (PhilNITS) passer, quick to learn, keen with designs, and had experience with different application tools. I'm looking for a company that can broaden my
          experience with web development or programming skills. I'm also a freelance social media manager that provides organized visual content for social media pages that can easily be understood or managed
          along with my methodical procedure and calculations, your brand designs will have a competitive edge over its competitors.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk!</a>

        </div>
      </div>  
    </section>
  )
}

export default About