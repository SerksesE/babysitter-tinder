import React, { Component } from 'react';

export class Parents extends Component {
  render() {
    return <li>
    <p>Hello  <b>{this.props.userName}</b>, this is your requirements for babysitters:</p>
    <p>Age of your Child(ren): <b>{this.props.ageOfChildren}</b></p>
    <p>You agree to pay per hour: <b>{this.props.fee}</b></p>  
    <p>You want your babysitter has: <b>{this.props.expYears}</b> year(s) experience</p>
    <p>You want your babysitter lives in Amsterdam: <b>{this.props.location}</b></p>
    <p>Let's Click on "Find Your Match" to see</p>
    <button onclick = "findyourmatch">Find Your Match</button>  
    </li>
  }
}