import React from 'react';
import './Resume.css'
import {PageHeader} from 'react-bootstrap'
import ResumeFile from '../../files/matthieubourgois_resume.pdf'
import Footer from '../../components/Footer/Footer'


const Resume = () => (
    <div className="mainResume">
        <Footer/>
        <PageHeader>
            <div className="top">
                <h1 className="introResume" >Resume</h1>
            </div>
        </PageHeader>
            <a href={ResumeFile} download>
                <button className="button">Download</button>
            </a>

    </div>
)

export default Resume
