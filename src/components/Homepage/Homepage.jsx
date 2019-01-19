import React, { Component } from 'react';
import './Homepage.css'
import portrait from '../../images/portrait.jpg'

class Homepage extends Component {
    render(){
        return(
            <div className="homepage">
                    <h1 className="name">Matthieu Bourgois</h1>

                    <div className="faceWrapper">
                        <img 
                            className="myFace" 
                            src={portrait}
                            alt="portrait">
                        </img>
                    </div>
                    <h3 className="description">I am a full-stack web developer based in Seattle, Washington. <br></br>
                    With a strong focus on Javascript for the front-end and an appreciation for design, I strive to accomplish my goals in web-development through an open and creative mindset.
                    </h3>
            </div>
        )
    }
}
export default Homepage