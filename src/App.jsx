import React, { createContext, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import ReactSwitch from 'react-switch'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
      <div className='app' data-theme={theme}>
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
            {/*<div className="switch">
              <ReactSwitch onChange={switchTheme}/>
            </div>*/}
        </>
      </div>
  )
}

export default App