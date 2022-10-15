import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaDiscord} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'
import { contactOptionsAnimation, contactFormAnimation, centerHeaderAnimation } from '../../animations'
import { useScroll } from '../useScroll'

const Contact = () => {
  const [element, controls] = useScroll();
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5z1uczr', 'template_ls28l0b', form.current, 'pcHTKe1j0XYHjP3rC')

    e.target.reset();

    toast.success('Message sent!', {
      position: toast.POSITION.TOP_CENTER,
      className: 'toast-message',
      bodyClassName: 'toast-body',
      autoClose: 1500
    });
    
  };

  return (
    <section id='contact' ref={element}>
      <motion.h5
      variants={centerHeaderAnimation}
      animate={controls}
      transition={{
        delay: 0.4,
        duration: 0.6,
        type: 'tween'
      }}>Get in touch</motion.h5>
      <motion.h2
      variants={centerHeaderAnimation}
      animate={controls}
      transition={{
        delay: 0.4,
        duration: 0.6,
        type: 'tween'
      }}>Contact Me</motion.h2>

      <div className="container contact__container">
        <motion.div className="contact__options"
        variants={contactOptionsAnimation}
        animate={controls}
        transition={{
          delay: 0.4,
          duration: 0.6,
          type: 'tween'
        }}>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sonzualejandrino@gmail.com</h5>
            <a href='mailto:sonzualejandrino@gmail.com'>Send a message.</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Alberson Alejandrino</h5>
            <a href='https://m.me/sonzualejandrino' target='_blank'>Send a message.</a>
          </article>
          <article className="contact__option">
            <FaDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>sonzuuu#0425</h5>
            <a href='https://discord.com' target='_blank'>Send a message.</a>
          </article>
        </motion.div>

        {/* END OF CONTACT OPTIONS */}
        <motion.form ref={form} onSubmit={sendEmail} 
        variants={contactFormAnimation}
        animate={controls}
        transition={{
          delay: 0.4,
          duration: 0.6,
          type: 'tween'
        }}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <ToastContainer />
        </motion.form>
      </div>
    </section>
  )
}

export default Contact