import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import profile from '../images/profile.png';
import favour from '../images/favour.png'

export class Parents extends Component {
  render() {
    return <div>
      <div className='parents'>
        <div className='profile'>
          <img src={profile} className='ava' alt='profile' />
          <p>Hello  <b>{this.props.userName}</b></p>
          <p>{this.props.description}</p>
        </div>
        <div className='profile'>
          <p><b>My Preferences</b></p>
          <p>Age of my Child(ren): <b>{this.props.ageOfChildren}</b></p>
          <p>I can pay <b>€ {this.props.fee}</b> per hour</p>
          <p>I want my babysitter has: <b>{this.props.expYears}</b> year(s) experience</p>
          <p>I want my babysitter lives in Amsterdam: <b>{this.props.location}</b></p>
          <p>Let's Click on "Find Your Match" to see</p>
          <img src={favour} className='ava' alt='favour' />
        </div>
      </div>
      <div>
        <Link to={'/matches'} ><button onclick="findyourmatch">Find Your Match</button></Link>
      </div>
    </div>
  }
}