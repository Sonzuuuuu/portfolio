import React from 'react'
import CV from '../../assets/cv.pdf'
import { motion } from 'framer-motion'
import { rightHeaderAnimation, aboutImageAnimation, aboutCardsAnimation, ctaAnimation } from '../../animations'
import { useScroll } from '../useScroll'

const CTA = () => {
  const [element, controls] = useScroll();
  return (
    <div className='cta' ref={element}>
        <motion.a href={CV} download className='btn btn-primary'
        variants={ctaAnimation}
        animate={controls}
        transition={{
          delay: 0.1,
          duration: 0.4,
          type: 'tween'
        }}>Download CV</motion.a>

        <motion.a href="#contact" className='btn btn-primary'
        variants={ctaAnimation}
        animate={controls}
        transition={{
          delay: 0.1,
          duration: 0.4,
          type: 'tween'
        }}>Let's Talk!</motion.a>
    </div>
  )
}

export default CTA