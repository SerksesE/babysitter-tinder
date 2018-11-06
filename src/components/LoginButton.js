import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/login'
import { ParentsContainer } from './components/ParentsContainer'

class LoginButton extends Component {
    renderlogin = () => {
        console.log('Looking for matches!')
        console.log(this.props.login())
        this.props.loginOk();

        render() {
            return (
                <ParentsContainer />
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
          login: state.login
        }
      }
      
      export default connect(mapStateToProps, {login})(LoginButton)


// import { Matches } from './Matches'
// import { connect } from 'react-redux'
// import { showMatches } from '../actions/showMatches'

// class MatchesContainer extends Component {
//   state = {
//     parents: {
//       id: 1,
//       ageOfChildren: 2,
//       numberOfChildren: 1,
//       feeInEuros: 12,
//       experienceInYears: 2,
//       location: 1
//     }
//   }

//   renderMatches = () => {
//     console.log('Looking for matches!')
//     console.log(this.props.showMatches())
//     this.props.showMatches();

//   }

//   render() {
//     return <Matches sitters={this.props.sitters} onClick={this.renderMatches} />
//   }
// }

// const mapStateToProps = state => {
//   return {
//     sitters: state.sitters
//   }
// }

// export default connect(mapStateToProps, {showMatches})(MatchesContainer)