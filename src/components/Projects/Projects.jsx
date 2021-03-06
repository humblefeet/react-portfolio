import React from 'react';
import {PageHeader} from 'react-bootstrap'
import './Projects.css'
const whatch = "https://imgur.com/EfAzTDM.png"
const hikeHitch = "https://i.imgur.com/2R9Tcvd.jpg?1.png"
const unscrambler = "https://i.imgur.com/IuXeeJh.png?1.png"
const rainOrShine = "https://i.imgur.com/lLBHBc4.png?1.png"
const weather = "https://i.imgur.com/ys6pNdZ.png?2"

const Projects = props =>(
    <div className="projects">
        <PageHeader>
            <h1 className="projectsIntro">Some of my recent developments...</h1>
        </PageHeader>

        <div className="grid-container">

            <div className="row featurette">
                <div className="whatch col-md-5 order-md-1">
                    <div className="module">
                        <a      target="_blank"
                                rel="noopener noreferrer"
                                href="https://thawing-retreat-16282.herokuapp.com/">
                            <img className="images " src={whatch} alt="whatch screenshot"></img>
                        </a>
                    </div>
                </div>
                <div className="infoWhatch info col-md-7 order-md-2">
                    <h3 className="featurette-heading appTitle">Whatch</h3>
                    <h5>Front-End Developer  |  Concept Designer  |  Style</h5>
                    <p className="appDescription">A full stack web application in which users are given movie suggestions based on images they select.
                        These images are associated with genres of film, which are then used to make an API call to The Movie Database. 
                        When the user selects a title from the list to movies, they are given a synopsis of the title as well as where it is streaming online.</p>
                    <ul>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Mongoose</li>
                        <li>MongoDB</li>
                        <li>Heroku</li>
                        <li>Google OAuth</li>
                    </ul>
                </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="hike col-md-5 order-md-1">
                    <div className="module">
                        <a  target="_blank"
                                rel="noopener noreferrer"
                                href="https://pacific-falls-21296.herokuapp.com/">
                            <img className="images " src={hikeHitch} alt="Hike Hitch screenshot"></img>
                        </a>
                    </div>
                </div>

                <div className="infoHike info col-md-7 order-md-2">
                    <h3 className="featurette-heading appTitle">HikeHitch</h3>
                    <h5>Full-Stack Developer</h5>
                    <p className="appDescription">A full stack hiking trail organizer. User has the opportunity to add trails to the database based on difficulty and length.
                        User can see other users hiking similar trails in order to organize ride shares. 
                    </p>
                    <ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>PostgresSQL</li>
                        <li>Heroku</li>
                    </ul>
                </div>
            </div>

            <hr className="featurette-divider"/>
        
            <div className="row featurette">
                <div className="rain col-md-5 order-md-1">
                    <div className="module ">
                        <div className="rainPics" >
                            <a    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://glacial-wave-90784.herokuapp.com/"> 
                            <img className="images" src={weather} alt="Rain or Shine Weather screenshot"></img>
                            </a>
                        </div>
                        <div className="rainPics">
                            <a    target="_blank"
                                rel="noopener noreferrer"
                                href="https://glacial-wave-90784.herokuapp.com/"> 
                                    <img className="images" src={rainOrShine} alt="Rain or Shine screenshot"></img>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="infoRain info col-md-7 order-md-2">
                    <h3 className="featurette-heading appTitle">Rain-or-Shine</h3>
                    <h5>Full-Stack Developer</h5>
                    <p className="appDescription">A full stack MERN application built using React. 
                        Activity and venue recommendations are given based on the weather of the user's current location. 
                        Dark Sky's API was used for the weather and FourSquare was used for the venue recommendations.
                    </p>
                    <ul>
                        <li>React</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Node</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Heroku</li>
                        <li>Dark Sky API</li>
                        <li>FourSquare API</li>
                    </ul>
                </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="word col-md-5 order-md-1">
                    <div className="module">
                        <a      target="_blank"
                                rel="noopener noreferrer"
                                href="https://keen-kalam-6d17d9.netlify.com/">
                            <img className="images " src={unscrambler} alt="unscrambler screenshot"></img>
                        </a>
                    </div>
                </div>

                <div className="infoWord info col-md-7 order-md-2">
                    <h3 className="featurette-heading appTitle">Unscrambler</h3>
                    <h5>Front-End Developer</h5>
                    <p className="appDescription">A front-end education word game. Users must spell out words which are scrambled on a grid on the screen.
                        Difficulty progresses with each level. This is the first project I created using Javascript.</p>
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>DOM-Manipulation</li>
                        <li>Netlify</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Projects