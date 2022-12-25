import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import css from './contact.module.css'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nre5wqd', 'template_gtlplsj', form.current, 'ETVQ_VGqcLvRE_ATb')
      .then((result) => {
          window.alert('message send successfull')
      }, (error) => {
          window.alert(error.message);
      });
      e.target.reset()
  };


  return (
    <div id="contact" className="container-fluid" data-aos="fade-up"
    data-aos-duration="300">
    <section  className={css.contact}>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2 className='text-center mb-5'>Contact</h2>
        </div>

        <div className="row mt-1">

          <div className="col-lg-4 d-flex align-items-center">
            <div className={css.info}>
              <div className={css.address}>
              <span><i class="fa-solid fa-location-dot"></i></span>
                <h4>Location:</h4>
                <p>Chawkbazer,Chittagong,Bangladesh</p>
              </div>

              <div className={css.email}>
              <span><i class="fa-solid fa-square-envelope"></i></span>
                <h4>Email:</h4>
                <p>mdaiman2016@outlook.com</p>
              </div>

              <div className={css.phone}>
              <span><i class="fa-solid fa-mobile-screen-button"></i></span>
                <h4>Call:</h4>
                <p>Please contact at email</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="" method="" role="form" className={css.phpEmailForm}  ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 "className={css.formGroup}>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required></input>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required></input>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required></input>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className={css.errorMessage}></div>
                <div className={css.sentMessage}>Your message has been sent. Thank you!</div>
              </div> */}
            <div className={css.sentMassage}>
              <button href='#' type="submit" value="Send" class="btn p-3 mb-5 glow-on-hover btn-warning">Messsage</button>
              
          </div>
            </form>
            
          </div>

        </div>

      </div>
    </section>
    </div>

  )
}

export default Contact