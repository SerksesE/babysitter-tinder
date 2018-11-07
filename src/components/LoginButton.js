import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/login'


// const currentList = {
//     parents: [
//         {
//             id: 1,
//             userName: 'user1',
//             userPassword: '123456',
//             ageOfChildren: 2,
//             numberOfChildren: 1,
//             feeInEuros: 12,
//             experienceInYears: 2,
//             locationAms: 'yes'
//         }, {
//             id: 2,
//             userName: 'user2',
//             userPassword: '123456',
//             ageOfChildren: 1,
//             numberOfChildren: 2,
//             feeInEuros: 6,
//             experienceInYears: 3,
//             locationAms: 'yes'
//         }, {
//             id: 3,
//             userName: 'user3',
//             userPassword: '123456',
//             ageOfChildren: 3,
//             numberOfChildren: 3,
//             feeInEuros: 12,
//             experienceInYears: 5,
//             locationAms: 'yes'
//         }, {
//             id: 4,
//             userName: 'user4',
//             userPassword: '123456',
//             ageOfChildren: 4,
//             numberOfChildren: 4,
//             feeInEuros: 8,
//             experienceInYears: 8,
//             locationAms: 'yes'
//         }, {
//             id: 5,
//             userName: 'user5',
//             userPassword: '123456',
//             ageOfChildren: 12,
//             numberOfChildren: 2,
//             feeInEuros: 15,
//             experienceInYears: 3,
//             locationAms: 'yes'
//         }, {
//             id: 6,
//             userName: 'user6',
//             userPassword: '123456',
//             ageOfChildren: 7,
//             numberOfChildren: 1,
//             feeInEuros: 10,
//             experienceInYears: 1,
//             locationAms: 'yes'
//         }
//     ]
// }

export class LoginButton extends Component {
    handleLogin = () => {
        // currentList.parents.map(parent => this.props.login(parent.userName, parent.userPassword))
        console.log(login('user1', '123456'))
    }

    // handleLogin = (id) => {
    //     const status = currentList.parents.filter(
    //         parent => { return parent.id === id }
    //     )
    //     this.setState({ parents: status })
    //     console.log(status)
    //     console.log(login('user1', '123456'))
    // }


    // checkLogin = (id) => {
    //     const status = currentList.parents.filter(
    //         parent => { return parent.id === id }
    //     )
    //     this.setState({ parents: status })
    // }

    render() {
        return (
            <div>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginOk: state.loginOk
    }
}

export default connect(mapStateToProps, { login })(LoginButton)