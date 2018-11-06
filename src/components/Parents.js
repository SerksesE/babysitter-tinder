import React, { Component } from 'react';

export class Parents extends Component {
  render() {
    return <li>
      <b>ageOfChildren:</b>{this.props.ageOfChildren}
      <b>fee:</b>{this.props.fee}
      <b>expYears:</b>{this.props.expYears}
      <b>location:</b>{this.props.location}
    </li>
  }
}