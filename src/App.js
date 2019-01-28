import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
// import NavBar from './components/NavBar/NavBar'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
// import { Button } from 'react-bootstrap';


class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
        {/* <NavBar/> */}
          <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
          </nav>
          <div className="main">
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/resume" component={Resume}></Route>
          </div>

        </div>
      </Router>
    )
  }
}

export default App;
