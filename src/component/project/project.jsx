import React from 'react'
import css from './project.module.css'

function Project({ item }) {
    return (
        <div className="container" id={css.project} data-aos="fade-up"
            data-aos-duration="3000">
            <div className="row m-3 d-flex justify-content-center">
                <div className="col-md-8 my-skills p-3">

                    <img className={css.img} src={item.imageUrl} alt='amazone website img' />
                </div>

                <div className="col-md-4 know-me mt-5 p-3">
                    <h1 className='text-center'>{item.name}</h1>
                    <div>
                        <p className='text-center'>{item.text}</p>
                        <div className='d-flex justify-content-center'>
                            <a href={item.url} type="button" class="btn p-3 glow-on-hover btn-warning">DEMO</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project

