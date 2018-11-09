import { RENDER_CITY_ALKMAAR, RENDER_CITY_AMSTERDAM, RENDER_CITY_ROTTERDAM, RENDER_CITY_HAARLEM, RENDER_RESET} from '../actions/matches'

const initialState = [
  {
    name: 'Jessica',
    age: 27,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Alkmaar',
    id: 50,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Kim',
    age: 17,
    feeInEuros: '10,-',
    yearsOfExperience: 4,
    location: 'Alkmaar',
    id: 51,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Anna',
    age: 37,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Alkmaar',
    id: 52,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Lisa',
    age: 47,
    feeInEuros: '10,-',
    yearsOfExperience: 4,
    location: 'Alkmaar',
    id: 53,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Rien',
    age: 73,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Alkmaar',
    id: 54,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Asley',
    age: 41,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Amsterdam',
    id: 55,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Jessica',
    age: 27,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Amsterdam',
    id: 56,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Kim',
    age: 17,
    feeInEuros: '10,-',
    yearsOfExperience: 4,
    location: 'Amsterdam',
    id: 57,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Anna',
    age: 37,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Amsterdam',
    id: 58,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Lisa',
    age: 47,
    feeInEuros: '10,-',
    yearsOfExperience: 4,
    location: 'Amsterdam',
    id: 59,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Rien',
    age: 73,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Rotterdam',
    id: 60,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Asley',
    age: 41,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Rotterdam',
    id: 61,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Jessica',
    age: 27,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Rotterdam',
    id: 62,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Kim',
    age: 17,
    feeInEuros: '10,-',
    yearsOfExperience: 4,
    location: 'Rotterdam',
    id: 63,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Anna',
    age: 37,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Rotterdam',
    id: 64,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Lisa',
    age: 47,
    feeInEuros: '10,-',
    yearsOfExperience: 4,
    location: 'Haarlem',
    id: 65,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Rien',
    age: 73,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Haarlem',
    id: 66,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Asley',
    age: 41,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Haarlem',
    id: 67,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Rien',
    age: 73,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Haarlem',
    id: 68,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }, {
    name: 'Asley',
    age: 41,
    feeInEuros: '15,-',
    yearsOfExperience: 4,
    location: 'Haarlem',
    id: 69,
    description: 'Hi! My name is ... and I like to watch kids.',
    gender: 'Female',
    birthday: 'Decemeber 5, 1989'
  }
]

export default (state = [...initialState], action = {}) => {
  switch (action.type) {
    case RENDER_CITY_ALKMAAR:
      return state.filter(sitter => sitter.location === 'Alkmaar')
    case RENDER_CITY_AMSTERDAM:
      return state.filter(sitter => sitter.location === 'Amsterdam')
    case RENDER_CITY_ROTTERDAM:
      return state.filter(sitter => sitter.location === 'Rotterdam')
    case RENDER_CITY_HAARLEM:
      return state.filter(sitter => sitter.location === 'Haarlem')
    case RENDER_RESET:
      return [...initialState]
    default:
      return state
  }
}

