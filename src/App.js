import React, { Component } from 'react';
import './App.css';
import {ParentsContainer} from './components/ParentsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Babysitter App!</h1>
        <ParentsContainer />  
      </div>
    );
  }
}

export default App;
