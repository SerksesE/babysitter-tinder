import React, { Component } from 'react'
import Matches from './Matches'
import { connect } from 'react-redux'
import { renderCityAlkmaar, renderCityAmsterdam, renderCityRotterdam, renderCityHaarlem, renderReset } from '../actions/matches'
import { displayData } from '../actions/displayData'

// import { changeCityName } from '../actions/changeCityName'


class MatchesContainer extends Component {
  // state = { displayData: false }

  toggleDisplay = () => {
    // this.setState({
    //   displayData: !this.state.displayData 
    // })
    this.props.displayData()
    // if (this.props.displayData === true) {
    //   return this.props.sitters.map(sitter => <li className='sitter' key={sitter.id}>
    //     {sitter.name} | {sitter.age} | {sitter.location} | {sitter.feeInEuros}</li>)
    // }
    // return null
  }

  renderCityAlkmaar = () => {
    this.props.renderReset()
    this.props.renderCityAlkmaar();
  }

  renderCityAmsterdam = () => {
    this.props.renderReset()
    this.props.renderCityAmsterdam();
  }

  renderCityRotterdam = () => {
    this.props.renderReset()
    this.props.renderCityRotterdam();
  }

  renderCityHaarlem = () => {
    this.props.renderReset()
    this.props.renderCityHaarlem();
  }

  renderReset = () => {
    this.props.renderReset();
  }

  renderMatches = () => {
      return this.props.sitters.map(sitter => <li onClick={alert} className='sitter' key={sitter.id}>
        {sitter.name} | {sitter.age} | {sitter.location} | {sitter.feeInEuros}</li>)
  }

  render() {
    console.log(displayData)
    return (
    <Matches
      sitters={this.props.sitters}
      toggleDisplay={this.toggleDisplay}
      renderMatches={this.renderMatches}
      displayDataActive={this.props.displayDataActive}
      city={this.props.city}
      renderCityAlkmaar={this.renderCityAlkmaar}
      renderAlkmaar={this.renderAlkmaar}
      renderCityRotterdam={this.renderCityRotterdam}
      renderCityAmsterdam={this.renderCityAmsterdam}
      renderCityHaarlem={this.renderCityHaarlem}
      renderReset={this.renderReset}
    />
    )
  }
}

const mapStateToProps = state => {
  return {
    sitters: state.matches,
    displayDataActive: state.displayData,
    city: state.changeCityName.cityName
  }
}

export default connect(mapStateToProps, { renderCityAlkmaar, renderCityAmsterdam, renderCityRotterdam, renderCityHaarlem, renderReset, displayData })(MatchesContainer)


  // handleClick = () => {
  //   this.props.sitters.map(sitter => this.props.addMatches(sitter.name, sitter.age, sitter.location, sitter.feeInEuros))
  // }
     // return this.props.sitters.map(sitter => this.props.renderCityAlkmaar(sitter.name, sitter.age, sitter.location, sitter.feeInEuros))