import { createContext } from 'react'

export const defaultValues = {
  isSignupShow: false,
  isSigninShow: false,
}
export const defaultFunctions = {
  showSignup: () => {},
  showSignin: () => {},
  hideAll: () => {},
  hideSignup: () => {},
  hideSignin: () => {},
}

const uiSlice = createContext({ ...defaultValues, ...defaultFunctions })

export const actionTypes = {
  SHOW_SIGNUP: 'SHOW_SIGNUP',
  SHOW_SIGNIN: 'SHOW_SIGNIN',
  HIDE_ALL: 'HIDE_ALL',
  HIDE_SIGNUP: 'HIDE_SIGNUP',
  HIDE_SIGNIN: 'HIDE_SIGNIN',
}
export default uiSlice
