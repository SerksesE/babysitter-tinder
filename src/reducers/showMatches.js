import { SHOW_MATCHES } from '../actions/showMatches'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SHOW_MATCHES:
      console.log('reducer')
      return action.payload
      // .map(sitter => ({sitter}))
    default:
  return state
  }
}