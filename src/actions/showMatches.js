export const SHOW_MATCHES = 'SHOW_MATCHES'

export function showMatches () {
  return {
    type: 'SHOW_MATCHES',
    payload: {
      feeInEuros: this.sitters.feeInEuros,
      experienceInYears: this.sitters.experienceInYears,
      location: this.sitters.location,
      show: console.log('action')
      }
      
  }
}