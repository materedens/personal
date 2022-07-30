import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

export const Contact = () => {
 const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xxbjzan', 'template_hqdys1b', form.current, 'C-tjjnqV8g8SNPU3g')
      .then((result) => {
          console.log(result.text);
        //   console.log("message sent");
        swal({
            title: "Thank you!",
            text: "I will contact you!",
            icon: "success",
            button: "Ok",
          });
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
  return (
    <section id='contact' className='contact section-bg'>
        <div className='container'>
            <div className='section-title'>
                <span>Contact</span>
                <h2>Get in Touch</h2>
            </div>
            <div className='row justify-content-center'>
                <div className='col-xl-12 col-lg-12 mt-4'>
                    <form className='form' ref={form} onSubmit={sendEmail}>
                        <div className='row'>
                            <div className='col-md-6 form-group'>
                                <input type='text' name='user_name' className='form-control' placeholder='Name' required></input>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
								<input type="email" className="form-control" name="user_email" placeholder="Your Email" required />
							</div>
                        </div>
                        <div className="form-group mt-3">
							<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
						</div>
						<div className="form-group mt-3">
							<textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
						</div><br></br>
                        <div className="text-center">
                            <button type="submit" value='Send'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact