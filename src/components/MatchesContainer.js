import React, { Component } from 'react'
import Matches from './Matches'
import { connect } from 'react-redux'
import { addMatches } from '../actions/matches'

class MatchesContainer extends Component {
  state = { displayData: false }

  displayData = () => {
    this.setState({
      displayData: !this.state.displayData
    })
  }

  renderMatches = () => {
    if (this.state.displayData === true) {
      return this.props.sitters.map(sitter => <li className='sitter' key={sitter.id}>
        {sitter.name} | {sitter.age} | {sitter.location} | {sitter.feeInEuros}</li>)
    }
    return null
  }

  render() {
    return (
    <Matches
      sitters={this.props.sitters}
      onClick={this.displayData}
      renderMatches={this.renderMatches}
      status={this.state}
    />
    )
  }
}

const mapStateToProps = state => {
  return {
    sitters: state.matches
  }
}

export default connect(mapStateToProps, { addMatches })(MatchesContainer)


  // handleClick = () => {
  //   this.props.sitters.map(sitter => this.props.addMatches(sitter.name, sitter.age, sitter.location, sitter.feeInEuros))
  // }