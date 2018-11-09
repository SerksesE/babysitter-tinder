import { combineReducers } from 'redux'

import matches from './matches'
import login from './loginreducer'
import currentUserList from './currentUserList'
import changeCityName from './changeCityName'
import displayData from './displayData'
import addFavorite from './addFavorite'

export default combineReducers({
  matches,
  login,
  currentUserList,
  changeCityName,
  displayData,
  addFavorite
})