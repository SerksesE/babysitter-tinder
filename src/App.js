import React, { Component } from 'react';
import './App.css';
import {ParentsContainer} from './components/ParentsContainer'

class App extends Component {

  // handleOnClick = () => {
  //   this.props.showParents(user,pass)
    
  // }
//   updateSelection = (event) => {
//     const value = event.target.value;
//     this.setState({
//       name: value
//     })
//   }

//   addModel = () => {
//     data[this.state.name].name = this.state.name
//     this.props.dispatch({
//       type: 'ADD_MODEL',
//       payload: data[this.state.name]
//     })
//   }
//   showParents = (user,pass) => {
//     const updatedPlayers = this.state.players.map(
//         player => {
//             if (player.id === id) {
//                 return {
//                     ...player,
//                     score
//                 }
//             }
//             else {
//                 return player
//             }
//         }
//     )
//     this.setState({ players: updatedPlayers })
// }


  render() {
    return (
      <div className="App">
        <h1>Babysitter App!</h1>
        <button onClick={this.handleOnClick}>Login</button>
        <button>Signup</button>
        <ParentsContainer />
      </div>
    );
  }
}

export default App;