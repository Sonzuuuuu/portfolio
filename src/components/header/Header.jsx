import React from 'react'
import './header.css'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'
import { motion } from 'framer-motion';
import { headerAnimation, headerImageAnimation } from '../../animations';

const Header = () => {
  return (
    <header>
      <motion.div className="container header__container"
        variants={headerAnimation}
        transition={{
          delay:0.3, 
          duration:0.8, 
          type:"tween"
        }}>
          
        <div className="header__content">
          <h1 className='name'>Alberson<br></br>Alejandrino</h1>
          <div className="subheading">
            <h4 className='subheading1'>/ Designer</h4> 
            <h4 className='subheading2'>/ Manager</h4> 
            <h4 className='subheading3'>/ Developer</h4> 
          </div>
          <HeaderSocials />
        </div>

        <motion.div className="me" variants={headerImageAnimation}
        transition={{
          delay:0.3, 
          duration:0.8, 
          type:"tween"
        }}>
          <img src={ME} alt="me" />
        </motion.div>

      </motion.div>
    </header>
  )
}

export default Header