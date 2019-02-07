import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
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
            <Switch>
              <Route exact path="/" component={Homepage}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              <Route exact path="/resume" component={Resume}></Route>
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}

export default App;
