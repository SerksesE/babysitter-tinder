const initialState = []

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SELECT_NAME':
    return state.concat(action.payload)
    case 'DELETE_NAME':
    return state.filter(sitter =>  sitter.name === action.payload)
    default:
      return state
  }
}