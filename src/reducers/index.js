import { combineReducers } from 'redux'

import matches from './matches'
import changeCityName from './changeCityName'
import displayData from './displayData'
import addFavorite from './addFavorite'

export default combineReducers({
  matches,
  changeCityName,
  displayData,
  addFavorite
})