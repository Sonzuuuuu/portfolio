import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Alberson Alejandrino</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100084250525622'><FaFacebookF /></a>
        <a href='https://www.instagram.com/alejandrinoson/'><FiInstagram /></a>
        <a href='https://twitter.com/alejandrinoson'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alberson Alejandrino. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer