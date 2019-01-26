import React, {Component} from 'react'
import { Nav,NavItem } from 'react-bootstrap';


class NavBar extends Component{
    render(){
        return(
              <Nav bsStyle="tabs "  >
                <NavItem eventKey={1} href="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="/projects">
                    Projects
                </NavItem>
                <NavItem eventKey={3} href="/resume">
                    Resume
                </NavItem>
            </Nav>
        )
    }
}

export default  NavBar