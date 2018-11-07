import { ADD_MATCHES } from '../actions/matches'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MATCHES:
      console.log('reducer')
      return state.concat(action.payload)
    default:
  return state
  }
}

