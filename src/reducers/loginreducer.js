import {LOGIN} from '../actions/login'
const initState = {}

export default (state = {}, action = {}) => {
    switch (action.type) {
        case 'LOGIN':
        return action.payload
        default:
            return state
    }
}