export const ADD_MATCHES = 'ADD_MATCHES'

export function addMatches(name, age, yearsOfExperience) {
  return {
    type: 'ADD_MATCHES',
    payload: {
      name,
      age,
      yearsOfExperience,
      show: console.log('action')
    }
  }
}