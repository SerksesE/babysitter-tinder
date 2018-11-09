import { combineReducers } from 'redux'

import matches from './matches'
import changeCityName from './changeCityName'
import displayData from './displayData'

export default combineReducers({
  matches,
  changeCityName,
  displayData
})