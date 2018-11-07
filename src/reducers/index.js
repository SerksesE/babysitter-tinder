import { combineReducers } from 'redux'

import matches from './matches'
import database from './database'

export default combineReducers({
  matches,
  database
})