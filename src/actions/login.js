export const LOGIN = 'LOGIN'

export function login(user, password) {
  return {
    type: 'LOGIN',
    payload: {
      user,
      password,
      } 
  }
}