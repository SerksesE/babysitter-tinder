export const ADD_MATCHES = 'ADD_MATCHES'

export function addMatches(name, age, location, feeInEuros) {
  return {
    type: 'ADD_MATCHES',
    payload: {
      name,
      age,
      location, 
      feeInEuros
    }
  }
}