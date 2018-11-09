import React, { Component } from 'react';
import './App.css';
import { ParentsContainer } from './components/ParentsContainer'
import MatchesContainer from './components/MatchesContainer';
import { Route } from 'react-router-dom'
import logo from './images/logo.png';
import './styles/matches.css'
import { Link } from 'react-router-dom'

class App extends Component {
state = { showButton: true}

signButton = () => {
  this.setState({
    showButton: !this.state.showButton
  })
}

  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} alt='logo' />
        </div>
        {this.state.showButton && <Link to='/parentprofile'><button onClick={this.signButton}>Sign in!</button></Link>}
        <Route exact path="/parentprofile" component={ParentsContainer} />
        <Route exact path="/matches" component={MatchesContainer} />
      </div>
    );
  }
}

export default App;


