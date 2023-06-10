import React from 'react'
import Project from '../component/project/project'
import Header from '../component/header/header'
import Footer from '../component/footer/footer';
import project from '../db/db';

const Projectpage = () => {


    return (
        <>
            <Header />
            <div>
                {
                    project.map((item, index) => {
                        return (
                            <Project key={index} item={item} />
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Projectpage