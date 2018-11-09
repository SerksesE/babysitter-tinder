export const SELECT_NAME = 'SELECT_NAME'

export function selectName(name, age, location, feeInEuros) {
  return {
    type: 'SELECT_NAME',
    payload: {
      name,
      age,
      location,
      feeInEuros
    }
  }
}