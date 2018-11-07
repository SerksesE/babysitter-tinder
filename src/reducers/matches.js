import { ADD_MATCHES } from '../actions/matches'

const initialState = [
    {
      name: 'Jessica',
      age: 27,
      feeInEuros: '15,-',
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 100,
      description: 'Hi! My name is ... and I like to watch kids.',
      gender: 'Female',
      birthday: 'Decemeber 5, 1989'
    }, {
      name: 'Kim',
      age: 17,
      feeInEuros: '10,-',
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 200,
      description: 'Hi! My name is ... and I like to watch kids.',
      gender: 'Female',
      birthday: 'Decemeber 5, 1989'
    }, {
      name: 'Anna',
      age: 37,
      feeInEuros: '15,-',
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 300,
      description: 'Hi! My name is ... and I like to watch kids.',
      gender: 'Female',
      birthday: 'Decemeber 5, 1989'
    }, {
      name: 'Lisa',
      age: 47,
      feeInEuros: '10,-',
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 400,
      description: 'Hi! My name is ... and I like to watch kids.',
      gender: 'Female',
      birthday: 'Decemeber 5, 1989'
    }, {
      name: 'Rien',
      age: 73,
      feeInEuros: '15,-',
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 500,
      description: 'Hi! My name is ... and I like to watch kids.',
      gender: 'Female',
      birthday: 'Decemeber 5, 1989'
    }, {
      name: 'Asley',
      age: 41,
      feeInEuros: '15,-',
      yearsOfExperience: 4,
      location: 'Amsterdam',
      id: 600,
      description: 'Hi! My name is ... and I like to watch kids.',
      gender: 'Female',
      birthday: 'Decemeber 5, 1989'
    }
  ]

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MATCHES:
      return state.concat(action.payload)
    default:
  return state
  }
}

