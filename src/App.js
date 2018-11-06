// class App extends Component {

//   handleOnClick = () => {
//     this.props.login()
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Babysitter App!</h1>
//         <button onClick={this.handleOnClick}>Login</button>
//         <button>Signup</button>
//         <ParentsContainer />
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import './App.css';
import {ParentsContainer} from './components/ParentsContainer'
import MatchesContainer from './components/MatchesContainer';
import { Route } from 'react-router-dom'

class App extends Component {
  handleOnClick = () => {
    this.props.login()
  }


  render() {
    return (
      <div className="App">
        <h1>Babysitter App!</h1>
        <ParentsContainer />  
        <Route exact path="/matches" component={MatchesContainer}/>
      </div>
    );
  }
}

export default App;