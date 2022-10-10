import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/alejandrinoson-b01b98209/" target="__blank"><BsLinkedin /></a>
        <a href="https://github.com/Sonzuuuuu" target="__blank"><FaGithub /></a>
        <a href="https://dribble.com" target="__blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials