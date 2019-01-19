import React from 'react';
import './Resume.css'
// import ResumeImage from '../../images/matthieubourgois_resume_2019.jpg'
import ResumeFile from '../../files/matthieubourgois_resume.pdf'
import Footer from '../../components/Footer/Footer'


const Resume = () => (
    <div className="mainResume">
        <Footer/>

        <div className="top">
            <h1 className="introResume" >Resume</h1>

            <a href={ResumeFile} download>
                <button className="button">Download</button>
            </a>
        </div>
        {/* <div className="resume">
            <img  
                src={ResumeImage} 
                alt="resume"></img>
        </div> */}

    </div>
)

export default Resume
