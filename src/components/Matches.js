import React, { Component } from 'react';

export class Matches extends Component {
  render() {
    return (
      <div>
        <h1>Sitter matches!</h1>
        <button onClick={this.props.onClick}>Find my matches!</button>
      </div>
    )
  }
}