import React from 'react';
import './Resume.css'
import ResumeImage from '../../images/matthieubourgois_resume_2019.jpg'
import ResumeFile from '../../files/matthieubourgois_resume.pdf'

const Resume = () => (
    <div className="mainResume">
        <h1 className="introResume green" >Resume</h1>

        <a href={ResumeFile} download>
            <button className="button">Download</button>
        </a>

        <img className="resume" 
            src={ResumeImage} 
            alt="resume"></img>
    </div>
)

export default Resume
