import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
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
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
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
            <a href='https://www.facebook.com/profile.php?id=100084250525622' target='_blank'>Send a message.</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>N/A</h5>
            <a href='' target='_blank'>Unavailable</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact