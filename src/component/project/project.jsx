import React from 'react'
import portfolio1 from '../../Asset/img/amazo website.png'
import portfolio2 from '../../Asset/img/timezone.png'
import portfolio3 from '../../Asset/img/youtube.png'
import css from './project.module.css'

const project = [
    {
        name: 'Amazone',
        url: '',
        imageUrl: portfolio1,
        text: 'This is a amazon clone web application.This is a e-comerce web site.Its make for practise',
    },
    {
        name: 'YouTube API',
        url: 'https://endearing-lily-ef7c6d.netlify.app',
        imageUrl: portfolio3,
        text: 'This is a youtube api project.If we give a youtube playlistId in the serchbox.then we can see a youtube playlist.',
    },
    {
        name: 'TimeZone Watch',
        url: 'https://joyful-cucurucho-d0860b.netlify.app',
        imageUrl: portfolio2,
        text: 'This is a timezone project.you can see a local clock and set another timezone clock.',
    }
]

function Project
    () {
    return (
        project.map((item) => (
            <div className="container" id='project' data-aos="fade-up"
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
        ))

    )
}

export default Project

