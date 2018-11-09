import { combineReducers } from 'redux'

import matches from './matches'
import login from './loginreducer'
import currentUserList from './currentUserList'
import changeCityName from './changeCityName'
import displayData from './displayData'

export default combineReducers({
  matches,
  login,
  currentUserList,
  changeCityName,
  displayData
})