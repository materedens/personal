import React from 'react'

const About = () => {
  return (
    <section id='about' className='about section-bg'>
        <div className='container'>
               <div className='section-title'>
                <span>About Me</span>
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
    </section>
  )
}

export default About