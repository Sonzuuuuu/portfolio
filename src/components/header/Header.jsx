import React from 'react'
import './header.css'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <h1 className='name'>Alberson<br></br>Alejandrino</h1>
          <div className="subheading">
            <h4 className='subheading1'>/ Designer</h4> 
            <h4 className='subheading2'>/ Manager</h4> 
            <h4 className='subheading3'>/ Developer</h4> 
          </div>
          <HeaderSocials />
        </div>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header