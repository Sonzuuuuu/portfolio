import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/CertIP-Alejandrino_page-0001.jpg'
import IMG2 from '../../assets/CERT-OF-COMPLETION_SMM_ALBERSONsigned.png'
import IMG3 from '../../assets/thejmag.JPG'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'PhilNITS (former JITSE-Phil) Passer Certificate',
    github: 'https://github.com',
    imglink: 'https://ibb.co/LSjmXWz',
    text: 'View'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Social Media Marketing & Advertising Certificate',
    github: 'https://github.com',
    imglink: 'https://ibb.co/23789sb',
    text: 'View'
  },
  {
    id: 3,
    image: IMG3,
    title: 'The Josephinian Magazine 2020-2021',
    github: 'https://github.com',
    imglink: 'https://drive.google.com/file/d/1rRn25nfFejI7UlnxzYuOnvOUpef81Jkm/view',
    text: 'View'
  }/*,
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    imglink: '',
    text: 'Github'
  },
  {
    id: 5,
    image: IMG5,
    title:'Charts templates & Infographics in Figma',
    github: 'https://github.com',
    imglink: '',
    text: 'Github'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & Infographics in Figma',
    github: 'https://github.com',
    link: '',
    text: 'Github'
  }*/
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Achievements</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, imglink, text}) => {
            return (
              <article key= {id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={imglink === '' ? github : imglink} className='btn' target='_blank'>{text}</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio