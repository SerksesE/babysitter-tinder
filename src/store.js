import { createStore } from 'redux'
import sitters from './reducers/sitters'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(sitters, enhancer)

export default store
