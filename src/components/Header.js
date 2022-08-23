import React from 'react'
import Typed from "react-typed";
import { Link } from 'react-scroll';

function Header() {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
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
        <div className='header-btns'>
          <Link to='contact' smooth={true} className='cv-btn' duration={1000}>Hire Me</Link>
          <span
            onClick={() => opengithub("https://github.com/materedens")}
            className='cv-btn1'>
            GitHub
          </span>
        </div>
        {/* <a href="about" className='btn-scroll scrollto'>
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </a> */}

      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Header
