import { LOGIN } from '../actions/login'
// const currentUser =
//     [
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
//             is: 3,
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

// export default (state = currentUser, action = {}) => {
//     switch (action.type) {
//         case LOGIN:
//             return [
//                 ...state,
//                 action.payload
//             ]

//         default:
//             return state
//     }
// }

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOGIN:
        console.log('reducer')
            return state.concat(action.payload)
        default:
            return state
    }
}