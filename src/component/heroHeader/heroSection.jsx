import React from 'react'
import css from './heroSection.module.css'
import { Typewriter } from 'react-simple-typewriter'

function HeroSection() {



  return (
    <div className="container-fluid mt-5" style={{
      background: 'rgb(239,238,247)',
      background: 'linear-gradient(90deg, rgba(239,238,247,1) 0%, rgba(209,209,228,1) 35%, rgba(167,204,212,1) 100%)'
    }}>
      <div className="row">
        <div className=" icon-bar">
          <ul className='p-0' style={{
            marginTop: '200px'
          }}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="top-bottom">
            <li><a href="https://www.facebook.com/profile.php?id=100073785387517"><i class="fab fa-facebook-f"></i><span>Facebook</span></a></li>
            <li><a href="https://twitter.com/mohammad_aymon"><i class="fab fa-twitter"></i><span>Twitter</span></a></li>
            <li><a href="https://www.instagram.com/mdaymon2016/"><i class="fab fa-instagram"></i><span>Instagram</span></a></li>
            <li><a href="https://www.linkedin.com/in/mohammad-aymon-57a0541b8/"><i class="fab fa-linkedin-in"></i><span>Linkedin</span></a></li>
            <li><a href="https://github.com/Aymon2016?tab=repositories"><i class="fab fa-github"></i><span>Github</span></a></li>
            <li><a href="https://www.youtube.com/channel/UC1kb0Nx2v8O8jQETUwSSEUQ/about"><i class="fab fa-youtube"></i><span>Youtube</span></a></li>
          </ul>
        </div>
        <div className="">

          <div class="content" data-aos="fade-left"
            data-aos-offset="300"
          >
            <div className='pt-5'>
              <h1 className="text-center p-5">Hello, I'M <span style={{ color: 'rgb(227,27,109)' }} >MOHAMMAD AYMON</span></h1>
              <h2 className="text-center p-5">
                I'm <span style={{ color: 'red', fontWeight: 'bold' }}></span>
                <Typewriter
                  words={['A MERN Stack Web Developer', 'A Self Believer']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={90}
                  deleteSpeed={70}
                  delaySpeed={1000}

                />
              </h2>
              <div className='d-flex justify-content-center mb-5'>
                <a href='#project' type="button" class="btn p-3 glow-on-hover btn-warning">PROJECTS</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection