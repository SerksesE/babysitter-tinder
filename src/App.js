import React, { Component } from 'react';
import './App.css';
import { ParentsContainer } from './components/ParentsContainer'
import MatchesContainer from './components/MatchesContainer';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from './images/logo.png';
import './styles/matches.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} alt='logo' />
        </div>
        <Link to='/parentprofile'><button>Sign in!</button></Link>
        <Route exact path="/parentprofile" component={ParentsContainer} />
        <Route exact path="/matches" component={MatchesContainer} />
      </div>
    );
  }
}

export default App;
// <Route exact path="/parentprofile" component={ParentsContainer}/>

