import React from 'react'
import { Icon } from '@iconify/react';
const Services = () => {
    return (
        <section id='services' className='services section-bg'>
            <div className='container'>
                <div className='section-title'>
                    <span>Services</span>
                    <h2>Services</h2>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='icon-box'>
                            <i><Icon icon='carbon:application-web' /></i>
                            <h4><a href='#'>Web Design</a></h4>
                            <p>Web design services comprise the processes of user interface (UI) and user experience (UX) design of any web-based solution.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i><Icon icon="bx:bx-code-block" /></i>
                            <h4><a href="#">Software Development</a></h4>
                            <p>Software development services are aimed at designing, engineering, deploying, supporting, and evolving various software types.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i><Icon icon="bx:bx-support" /></i>
                            <h4><a href="#">IT Support</a></h4>
                            <p>IT support comprises procedures intended to maintain failsafe IT workflows and reduce IT costs. Business world uses IT support on daily.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i><Icon icon="icon-park:adjacent-item" /></i>
                            <h4><a href="#">IT Consultancy</a></h4>
                            <p>Information technology (IT) consulting services allow companies to implement IT strategies and solutions to achieve business-IT alignment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services