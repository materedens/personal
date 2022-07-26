import React from 'react'
import Typed from "react-typed";

function Header() {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>DENNIS MATERE</h1>
            <Typed
            className="typed-text"
            strings={["I'm a Front End Software Developer", "I'm a Web Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
        </div>
    </div>
  )
}

export default Header