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
        
        <div className="button">
            <a href={ResumeFile} download>
                <button >Download</button>
            </a>
        </div>
    </div>
)

export default Resume
