import { DISPLAY_DATA } from '../actions/displayData'

export default (state = false, action = {}) => {
  switch (action.type) {
    case DISPLAY_DATA:
      return !state
      default:
          return state
  }
}