import { RENDER_CITY_ALKMAAR, RENDER_CITY_AMSTERDAM, RENDER_CITY_ROTTERDAM, RENDER_CITY_HAARLEM, RENDER_RESET} from '../actions/matches'

const initialState = { cityName: 'total'}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RENDER_CITY_ALKMAAR:
      return { cityName: 'Alkmaar' }
    case RENDER_CITY_AMSTERDAM:
      return { cityName: 'Amsterdam' }
    case RENDER_CITY_ROTTERDAM:
      return { cityName: 'Rotterdam' }
    case RENDER_CITY_HAARLEM:
      return { cityName: 'Haarlem' }
    case RENDER_RESET:
      return { cityName: 'total' }
    default:
      return state
  }
}