import React from 'react';
import './Resume.css'
import ResumeFile from '../../files/matthieubourgois_resume_2019_February.pdf'
import Footer from '../../components/Footer/Footer'


const Resume = () => (
    <div className="mainResume">
        <Footer/>
            <h1 className="introResume" >Resume</h1>

        <div className="buttonContainer">
            <a href={ResumeFile} download>
                <button className="button">Download</button>
            </a>
        </div>

        <div className="resumePrint" >
            <div className="resumePrintHeader">
                <h1 className="resumeName">Matthieu Bourgois</h1>
                <h3>Front-End Web Developer</h3>
            </div>
            <div class="resumeSummary">
                <p>With a passion for discovery, I'm drawn to the taking the road less traveled.
                    Making websites more interactive and attractive is a continuous goal.
                    Building fun web applications is a creative outlet I enjoy exercising.
                </p>  
            </div>

            <div className="skills">
                <h2>Skills</h2>
                <button  className="skillsButton btn-info btn">HTML</button>
                <button  className="skillsButton btn-info btn">CSS</button>
                <button  className="skillsButton btn-info btn">Javascript</button>
                <button  className="skillsButton btn-info btn">React</button>
                <button  className="skillsButton btn-info btn">Node</button>
                <button  className="skillsButton btn-info btn">MongoDB</button>
                <button  className="skillsButton btn-info btn">Mongoose</button>
                <button  className="skillsButton btn-info btn">Bootstrap</button>
                <button  className="skillsButton btn-info btn">Materialize</button>
                <button  className="skillsButton btn-info btn">Python</button>
                <button  className="skillsButton btn-info btn">Django</button>
                <button  className="skillsButton btn-info btn">PostgresQL</button>
                <button  className="skillsButton btn-info btn">Postman</button>
                <button  className="skillsButton btn-info btn">PHP</button>
                <button  className="skillsButton btn-info btn">jQuery</button>
                <button  className="skillsButton btn-info btn">Heroku</button>
                <button  className="skillsButton btn-info btn">Netlify</button>
                <button  className="skillsButton btn-info btn">Git</button>
                <button  className="skillsButton btn-info btn">Github</button>
                <button  className="skillsButton btn-info btn">Adobe XD</button>
                <button  className="skillsButton btn-info btn">Adobe Lightroom</button>


            </div>
        </div>
        
    </div>
)

export default Resume
