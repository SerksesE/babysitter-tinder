export default (state = [], action = {}) => {
  switch (action.type) {
    case 'SELECT_NAME':
    return state.concat(action.payload)
    default:
      return state
  }
}