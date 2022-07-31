import React from 'react'
import Typed from "react-typed";
import { Icon } from '@iconify/react';

function Header() {
  return (
    <div id='home' className='header-wrapper'>
      <div className='main-info'>
        <h1>DENNIS MATERE</h1>
        <Typed
          className="typed-text"
          strings={["I'm a Front End Software Developer", "I'm a Web Developer", "I'm a Freelancer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#about" className='btn-scroll scrollto'>
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </a>
      </div>

    </div>
  )
}

export default Header
