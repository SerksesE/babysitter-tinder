export const DELETE_NAME = 'DELETE_NAME'

export function deleteFavorite(name) {
  return {
    type: 'DELETE_NAME',
    payload: name
  }
}