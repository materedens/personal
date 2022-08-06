import React from 'react'
import { Icon } from '@iconify/react';

const About = () => {
  return (
    <section id='about' className='about section-bg'>
      <div className='container'>
        <div className='section-title'>
          <span>Get to know me.</span>
          <h2>About Me</h2>
          {/* <p>Get to know me.</p> */}
        </div>
        <div className='row'>
          <div className='image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start'></div>
          <div className='col-lg-8 d-flex flex-column align-items-stretch'>
            <div className='content ps-lg-4 d-flex flex-column justify-content-center'>
              <div className='row'>
                <div className='col-12 col-lg-12 content'>
                  <h2>Who am I?</h2>
                  <h4>I'm Dennis, A Front End Software Developer.</h4>
                  <h5>
                    I'm a self-motivated, creative programmer, open source contributor and IT specialist looking for an opportunity to work as a remote and full-time Full-stack software, web developer and IT professional.
                    I love to bring ideas to life by creating modern and responsive web experiences. I enjoy being challenged and love working on projects that require working out of my comfort zone and skill set.
                    I’m looking for remote job opportunities to put my excellent problem-solving skills to use.
                  </h5>
                </div>
              </div><br></br><br></br>
            </div> <hr></hr>
          </div>

        </div>
      </div>
      {/* Tech Stack */}
      <div className='stack container'>
        <div className='section-title'>
          <span>Skills</span>
          <h2>Skills</h2>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-4'>
            <div className='icon-box'>
              <i><Icon icon="vscode-icons:file-type-html" /></i>
              <h3>HTML</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
            <div className='icon-box'>
              <i><Icon icon="vscode-icons:file-type-css" /></i>
              <h3>CSS</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
            <div className='icon-box'>
              <i><Icon icon="logos:javascript" /></i>
              <h3>JAVASCRIPT</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4 mt-lg-0'>
            <div className='icon-box'>
              <i><Icon icon="logos:mysql" /></i>
              <h3>mysql</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <i><Icon icon="vscode-icons:file-type-php2" /></i>
              <h3>php</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <i><Icon icon="vscode-icons:file-type-reactjs" /></i>
              <h3>reactjs</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <i><Icon icon="logos:bootstrap" /></i>
              <h3>bootstrap</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 mt-4'>
            <div className='icon-box'>
              <i><Icon icon="logos:material-ui" /></i>
              <h3>material ui</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About