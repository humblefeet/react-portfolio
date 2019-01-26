import React, { Component } from 'react';
import './Homepage.css'
import portrait from '../../images/portrait.jpg'
import {Jumbotron, Button} from 'react-bootstrap'

class Homepage extends Component {
    render(){
        return(
            // <Jumbotron>
            //     <h1>Hello, world!</h1>
            //     <p>
            //         I am a full-stack web developer based in Seattle, Washington. <br></br>
            //         With a strong focus on Javascript for the front-end and an appreciation for design, I strive to accomplish my goals in web-development through an open and creative mindset.
            //     </p>
            //     <p>
            //         <Button bsStyle="primary">Learn more</Button>
            //     </p>
            // </Jumbotron>
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