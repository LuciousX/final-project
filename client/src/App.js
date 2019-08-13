import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Registration';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Project from './pages/CreateProject';

import './App.scss';

class App extends Component {



  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/dashboard/:id' component={Dashboard} />

          <Route exact path='/AboutUs' component={AboutUs}/>
          <Route exact path='/createProject' component={Project}/>
        </div>
      </Router>
    );
  }
}

export default App;
