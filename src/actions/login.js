export const LOGIN = 'LOGIN'

export function login () {
  return {
    type: 'LOGIN',
    payload: {
      user: this.parents.feeInEuros,
      pass: this.parents.experienceInYears,
      show: console.log('login action')
      }
      
  }
}