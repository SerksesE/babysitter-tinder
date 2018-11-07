import { combineReducers } from 'redux'

import matches from './matches'
import login from './loginreducer'
import currentUserList from './currentUserList'

export default combineReducers({
  matches,
  login,
  currentUserList
})