import React from 'react';
import hikeHitch from '../../images/hikeHitch.png'
import rainOrShine from '../../images/rainOrShine.png'
import unscrambler from '../../images/unscrambler.png'
import whatch from '../../images/whatch.png'
import './Projects.css'

const Projects = props =>(
    <div className="projects">

        <h1 className="projectsIntro">Some of my recent developments...</h1>

        <div className="grid-container">
            <div className="module whatch">
                <a      target="_blank"
                        rel="noopener noreferrer"
                        href="https://thawing-retreat-16282.herokuapp.com/">
                    <img className="images " src={whatch} alt="whatch screenshot"></img>
                </a>
            </div>
            <div className="module hike">
                <a  target="_blank"
                        rel="noopener noreferrer"
                        href="https://pacific-falls-21296.herokuapp.com/">
                    <img className="images " src={hikeHitch} alt="Hike Hitch screenshot"></img>
                </a>
            </div>
            <div className="module rain">
                <a    target="_blank"
                        rel="noopener noreferrer"
                        href="https://glacial-wave-90784.herokuapp.com/"> 
                    <img className="images " src={rainOrShine} alt="Rain or Shine screenshot"></img>
                </a>
            </div>
            <div className="module word">
                <a      target="_blank"
                        rel="noopener noreferrer"
                        href="https://keen-kalam-6d17d9.netlify.com/">
                    <img className="images " src={unscrambler} alt="unscrambler screenshot"></img>
                </a>
            </div>
        </div>
    </div>

)

export default Projects