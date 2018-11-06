import React, { Component } from 'react'
import { Matches } from './Matches'
import { connect } from 'react-redux'
import { showMatches } from '../actions/showMatches'

class MatchesContainer extends Component {
  state = {
    parents: {
      id: 1,
      ageOfChildren: 2,
      numberOfChildren: 1,
      feeInEuros: 12,
      experienceInYears: 2,
      location: 1
    }
  }

  renderMatches = () => {
    console.log('Looking for matches!')
    console.log(this.props.showMatches())
    this.props.showMatches();

  }

  render() {
    return <Matches sitters={this.props.sitters} onClick={this.renderMatches} />
  }
}

const mapStateToProps = state => {
  return {
    sitters: state.sitters
  }
}

export default connect(mapStateToProps, {showMatches})(MatchesContainer)