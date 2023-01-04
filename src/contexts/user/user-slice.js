import { createContext } from 'react'

export const defaultValues = {
  username: '',
  token: '',
}
export const defaultFunctions = {
  setUser: (username, token) => {},
  logoutUser: () => {}
}

const userSlice = createContext({ ...defaultValues, ...defaultFunctions })

export const actionTypes = {
  SET_USER: 'SET_USER',
  LOGOUT_USER: 'LOGOUT_USER',
}

export default userSlice
