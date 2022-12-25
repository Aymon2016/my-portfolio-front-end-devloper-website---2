import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about container-fluid' id='about'>
            <div className="row p-5 about-me" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h1 className='text-center'>ABOUT ME</h1>
                <hr className='hr m-auto' 
                    style={{width:'35px',height: '10px',textAlign:'center',borderTop:'5px solid rgb(221, 200, 44'}}/>
                <p className='text-center'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="row m-3 d-flex justify-content-center" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="col-md-6 know-me p-3">
                    <h1 className='text-center'>Get to know me!</h1>
                    <div>
                        <p className='text-center'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <p className='text-center'>I'm a Backend Web Developer building the Backend of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <p className='text-center'>I'm a Full Stack Web Developer building the full Stack of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                    </div>
                    <div className='mt-5 d-flex justify-content-center'>
                        <a href='#' id='#contact' type="button" class="btn p-3 glow-on-hover btn-warning">CONTACT</a>
                    </div>
                </div>
                <div className="col-md-6 my-skills p-3" data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1>My Skills</h1>
                    
                        
                        <div class="bar learning" data-skill="html5"></div>
                        <div class="bar back basic" data-skill="css3"></div>
                        <div class="bar back intermediate" data-skill="javascript"></div>
                        <div class="bar front advanced" data-skill="react"></div>
                        <div class="bar front expert" data-skill="node js"></div>
                        <div class="bar front expert" data-skill="express"></div>
                        <div class="bar front expert" data-skill="mongodb"></div>
                        <div class="bar front redux" data-skill="redux"></div>

                    
                </div>
            </div>
            
        </div>
    )
}

export default About