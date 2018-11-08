export const RENDER_CITY_ALKMAAR = 'RENDER_CITY_ALKMAAR'
export const RENDER_CITY_AMSTERDAM = 'RENDER_CITY_AMSTERDAM'
export const RENDER_CITY_ROTTERDAM = 'RENDER_CITY_ROTTERDAM'
export const RENDER_CITY_LUTJEBROEK = 'RENDER_CITY_LUTJEBROEK'
export const RENDER_RESET = 'RENDER_RESET'

export function renderCityAlkmaar(name, age, location, feeInEuros) {
  return {
    type: 'RENDER_CITY_ALKMAAR',
    payload: {
      name,
      age,
      location, 
      feeInEuros
    }
  }
}

export function renderCityAmsterdam(name, age, location, feeInEuros) {
  return {
    type: 'RENDER_CITY_AMSTERDAM',
    payload: {
      name,
      age,
      location, 
      feeInEuros
    }
  }
}

export function renderCityRotterdam(name, age, location, feeInEuros) {
  return {
    type: 'RENDER_CITY_ROTTERDAM',
    payload: {
      name,
      age,
      location, 
      feeInEuros
    }
  }
}

export function renderCityLutjebroek(name, age, location, feeInEuros) {
  return {
    type: 'RENDER_CITY_LUTJEBROEK',
    payload: {
      name,
      age,
      location, 
      feeInEuros
    }
  }
}

export function renderReset() {
  return {
    type: 'RENDER_RESET'
  }
}