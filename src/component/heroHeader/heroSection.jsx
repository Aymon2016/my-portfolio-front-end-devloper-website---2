import React from 'react'
import css from './heroSection.module.css'
import { Typewriter } from 'react-simple-typewriter'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function HeroSection() {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
    return (
        <div className="container-fluid mt-5" style={{background: 'rgb(239,238,247)',
          background: 'linear-gradient(90deg, rgba(239,238,247,1) 0%, rgba(209,209,228,1) 35%, rgba(167,204,212,1) 100%)'}}>

        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 6,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
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
                <h1 className="text-center p-5">Hello, I'M <span style={{color:'rgb(227,27,109)'}} >MOHAMMAD AYMON</span></h1>
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
                  <a  href='#project' type="button" class="btn p-3 glow-on-hover btn-warning">PROJECTS</a>
                </div>

              </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection