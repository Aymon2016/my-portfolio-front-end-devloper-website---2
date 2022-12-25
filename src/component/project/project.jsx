import React from 'react'
import portfolio1 from '../../Asset/img/amazo website.png'
import css from './project.module.css'

function Project
() {
  return (
    <div className="container" id='project' data-aos="fade-up"
    data-aos-duration="3000">
        <div className="row m-3 d-flex justify-content-center">
                <div className="col-md-8 my-skills p-3">
                    
                    <img className={css.img} src={portfolio1} alt='amazone website img' />
                </div>

                <div className="col-md-4 know-me mt-5 p-3">
                    <h1 className='text-center'>Amazon</h1>
                    <div>
                        <p className='text-center'>This is a amazon clone web application.This is a e-comerce web site.It's make for practise</p>
                        <div className='d-flex justify-content-center'>
                            <a href='#' type="button" class="btn p-3 glow-on-hover btn-warning">DEMO</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

export default Project
