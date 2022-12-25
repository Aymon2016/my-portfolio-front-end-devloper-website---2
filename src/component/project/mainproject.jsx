import React from 'react'
import Project from './project'

function MainProject() {
    return (
        <div className='container-fluid about' id='project' data-aos="fade-up"
        data-aos-duration="3000">
            <div className="row p-5 about-me" >
                <h1 className='text-center'>PROJECTS</h1>
                <hr className='hr m-auto' 
                    style={{width:'35px',height: '10px',textAlign:'center',
                    borderTop:' 5px solid rgb(221, 200, 44'}}/>
                <p className='text-center'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>
            <Project />
        </div>
    )
}

export default MainProject