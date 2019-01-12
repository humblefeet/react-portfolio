import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
          </nav>
          <div className="main">
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/resume" component={Resume}></Route>
          </div>
          <Footer/>

        </div>
      </Router>
    )
  }
}

export default App;
