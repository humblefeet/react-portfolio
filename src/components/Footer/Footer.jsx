import React from 'react';
import  './Footer.css'
import gmail from '../../images/gmail.png'
import github from '../../images/github.png'
import linkedIn from '../../images/linkedin.png'

const Contact = props => (
    <div className="Footer">
        <div className="lowContact">
            <a  href="https://www.linkedin.com/in/matthieu-bourgois/">
                <img className="icons"
                    target="_blank"
                    src={linkedIn}
                    alt="linkedIn Icon"></img>
            </a>
            <a  href="https://github.com/humblefeet">
                <img className="icons"
                    target="_blank"
                    src={github}
                    alt="github icon"></img>
            </a>
            <a  href="mailto:matthieu.bourgois89@gmail.com">
                <img className="icons"
                    target="_blank"
                    src={gmail}
                    alt="gmail icon"></img>
            </a>
        </div>
    </div>
)

export default Contact

