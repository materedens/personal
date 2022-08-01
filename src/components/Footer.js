import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <p><Icon icon="bx:map-alt" className='phone' /> Kitale, Kenya </p>
                                <div className="social-links mt-3">
                                    <a href="https://twitter.com/MatereDenis" className="twitter"><Icon icon="bx:bxl-twitter" /></a>
                                    <a href="https://web.facebook.com/osundwa.denis/" className="facebook"><Icon icon="bx:bxl-facebook" /></a>
                                    <a href="https://www.instagram.com/denismatere/" className="instagram"><Icon icon="bx:bxl-instagram" /></a>
                                    <a href="https://www.linkedin.com/in/denis-matere-56b00077/" className="linkedin"><Icon icon="bx:bxl-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <p><Icon icon="bx:phone-call" className='phone' />  +254 774 201 906 </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <p><Icon icon="bx:mail-send" className='mail' />  info@matere.com </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" align="center">
                <div class="copyright">
                    Copyright &copy; <strong><span>2022, </span></strong> Dennis Matere, All Rights Reserved.
                </div>
            </div>
        </footer>

    )
}

export default Footer