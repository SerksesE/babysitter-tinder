import React, { Component } from 'react'
import Matches from './Matches'
import { connect } from 'react-redux'
import { renderCityAlkmaar, renderCityAmsterdam, renderCityRotterdam, renderCityLutjebroek, renderReset } from '../actions/matches'


class MatchesContainer extends Component {
  state = { displayData: false }

  displayData = () => {
    this.setState({
      displayData: !this.state.displayData
    })
  }

  renderCityAlkmaar = () => {
    return this.props.sitters.map(sitter => this.props.renderCityAlkmaar(sitter.name, sitter.age, sitter.location, sitter.feeInEuros))
  }

  renderCityAmsterdam = () => {
    return this.props.sitters.map(sitter => this.props.renderCityAmsterdam(sitter.name, sitter.age, sitter.location, sitter.feeInEuros))
  }

  renderCityRotterdam = () => {
    return this.props.sitters.map(sitter => this.props.renderCityRotterdam(sitter.name, sitter.age, sitter.location, sitter.feeInEuros))
  }

  renderCityLutjebroek = () => {
    return this.props.sitters.map(sitter => this.props.renderCityLutjebroek(sitter.name, sitter.age, sitter.location, sitter.feeInEuros))
  }

  renderReset = () => {
    this.props.renderReset()
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
      displayData={this.displayData}
      renderMatches={this.renderMatches}
      status={this.state}
      renderCityAlkmaar={this.renderCityAlkmaar}
      renderCityRotterdam={this.renderCityRotterdam}
      renderCityAmsterdam={this.renderCityAmsterdam}
      renderCityLutjebroek={this.renderCityLutjebroek}
      renderReset={this.renderReset}
    />
    )
  }
}

const mapStateToProps = state => {
  return {
    sitters: state.matches
  }
}

export default connect(mapStateToProps, { renderCityAlkmaar, renderCityAmsterdam, renderCityRotterdam, renderCityLutjebroek, renderReset })(MatchesContainer)


  // handleClick = () => {
  //   this.props.sitters.map(sitter => this.props.addMatches(sitter.name, sitter.age, sitter.location, sitter.feeInEuros))
  // }