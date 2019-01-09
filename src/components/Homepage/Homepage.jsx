import React, { Component } from 'react';
import './Homepage.css'

class Homepage extends Component {
    render(){
        return(
            <div className="Homepage">
                <div className="intro green">
                    <h2>My name is</h2> <br></br><h1 className="name">Matthieu Bourgois</h1> <br></br>
                    <h3>I am a full-stack web developer based in Seattle, Washington. <br></br>
                    With a strong focus on Javascript for the front-end and an appreciation for design, I strive to accomplish my goals in web-development through an open and creative mindset.
                    </h3>
                </div>
            </div>
        )
    }
}
export default Homepage