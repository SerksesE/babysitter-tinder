import React, { Component } from 'react';

export class Parents extends Component {
  render() {
    return <li>
    <p>Hello {this.props.userName}, this is your requirements for babysitters:</p>
    <p>Age of your Child(ren): <b>{this.props.ageOfChildren}</b></p>
    <p>You agree to pay per hour: <b>{this.props.fee}</b></p>  
    <p>You want your babysitter has: <b>{this.props.expYears}</b> year(s) experience</p>
    <p>You want your babysitter lives in Amsterdam: <b>{this.props.location}</b></p>
    <p>Let's Click on "Find Your Match" to see</p>
    <button onclick = "findyourmatch">Find Your Match</button>  
    </li>
  }
}
// <ul>
// { props.pizzas.map(pizza =>
//   <li key={pizza.id} onClick={() => props.selectPizza(pizza.id)}>
//     { pizza.name }
//   </li>
// ) }
// </ul>

// value={model.name}>{model.name} ({model.year}