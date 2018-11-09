export const SELECT_NAME = 'SELECT_NAME'
export const DELETE_NAME = 'DELETE_NAME'

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

export function deleteName(name) {
  return {
    type: 'DELETE_NAME',
    payload: {
      name
    }
  }
}