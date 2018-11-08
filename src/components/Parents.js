import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Parents extends Component {
  render() {
    return <div>
      <div className='parents'>
        <p>Hello  <b>{this.props.userName}</b>, this is your requirements for babysitters:</p>
        <p>Age of your Child(ren): <b>{this.props.ageOfChildren}</b></p>
        <p>You agree to pay <b>€ {this.props.fee}</b> per hour</p>
        <p>You want your babysitter has: <b>{this.props.expYears}</b> year(s) experience</p>
        <p>You want your babysitter lives in Amsterdam: <b>{this.props.location}</b></p>
        <p>Let's Click on "Find Your Match" to see</p>
      </div>
      <div>
        <Link to={'/matches'} ><button onclick="findyourmatch">Find Your Match</button></Link>
      </div>
    </div>
  }
}