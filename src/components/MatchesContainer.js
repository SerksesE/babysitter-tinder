import React, { Component } from 'react'
import Matches from './Matches'
import { connect } from 'react-redux'
import { addMatches } from '../actions/matches'

const initialState = {
  sitters: [
    {
      name: 'Jessica',
      age: 27,
      feeInEuros: 15,
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 1

    }, {
      name: 'Kim',
      age: 17,
      feeInEuros: 10,
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 2
    }, {
      name: 'Anna',
      age: 37,
      feeInEuros: 15,
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 3
    }, {
      name: 'Lisa',
      age: 47,
      feeInEuros: 85,
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 4
    }, {
      name: 'Rien',
      age: 73,
      feeInEuros: 15,
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 5
    }, {
      name: 'Asley',
      age: 41,
      feeInEuros: 15,
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 6
    }
  ]
}

class MatchesContainer extends Component {

  handleClick = () => {
    initialState.sitters.map(sitter => this.props.addMatches(sitter.name, sitter.age))
  }

  render() {
    return <Matches sitters={this.props.matches} onClick={this.handleClick} />
  }
}

const mapStateToProps = state => {
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps, { addMatches })(MatchesContainer)