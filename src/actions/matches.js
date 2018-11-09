export const RENDER_CITY_ALKMAAR = 'RENDER_CITY_ALKMAAR'
export const RENDER_CITY_AMSTERDAM = 'RENDER_CITY_AMSTERDAM'
export const RENDER_CITY_ROTTERDAM = 'RENDER_CITY_ROTTERDAM'
export const RENDER_CITY_HAARLEM = 'RENDER_CITY_HAARLEM'
export const RENDER_RESET = 'RENDER_RESET'

export function renderCityAlkmaar() {
  return {
    type: 'RENDER_CITY_ALKMAAR',
  }
}

export function renderCityAmsterdam() {
  return {
    type: 'RENDER_CITY_AMSTERDAM',
  }
}

export function renderCityRotterdam() {
  return {
    type: 'RENDER_CITY_ROTTERDAM',
  }
}

export function renderCityHaarlem() {
  return {
    type: 'RENDER_CITY_HAARLEM',
  }
}

export function renderReset() {
  return {
    type: 'RENDER_RESET'
  }
}