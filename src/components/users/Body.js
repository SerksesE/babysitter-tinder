import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../users/Body.css'

class Body extends Component {
  render () {
    console.log(this.props.sitters)
    return(
      <div className='user'>
        <div className='top'>
          <h2>Sinterklaas</h2>
          <h3>Spanje</h3>
          <hr />
          <p>Male | Decemeber 5, 1905</p>
        </div>
        <div className='bottom'>
          <h4>Biography</h4>
          <p>Elk jaar op mijn verjaardag geef ik cadeautjes aan kinder. 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. 
            Blanditiis repellat velit eligendi."</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sitters: state.matches
  }
}

export default connect(mapStateToProps)(Body)