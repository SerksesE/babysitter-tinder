import React, { Component } from 'react';
import './App.css';
import {ParentsContainer} from './components/ParentsContainer'
import MatchesContainer from './components/MatchesContainer';
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>city sitter</h1>
        <Route exact path="/parentprofile" component={ParentsContainer}/>
        <Route exact path="/matches" component={MatchesContainer}/>
      </div>
    );
  }
}

export default App;
// <Route exact path="/parentprofile" component={ParentsContainer}/>