import { useReducer } from 'react'
import userSlice, { actionTypes } from './user-slice'

function userReducer(state, action) {
  if (action.type === actionTypes.SET_USER) {
    return {
      ...state,
      username: action.payload.username,
      token: action.payload.token,
      logged: true,
    }
  }
  if (action.type === actionTypes.LOGOUT_USER) {
    return {
      ...state,
      username: '',
      token: '',
      logged: false,
    }
  } else return state
}

export default function UserProvider({ children }) {
  const [userState, userDispatch] = useReducer(userReducer, null, () => ({
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || '',
    logged:
      !!localStorage.getItem('username') && !!localStorage.getItem('token'),
  }))

  const setUserHandler = (username, token) => {
    localStorage.setItem('username', username)
    localStorage.setItem('token', token)

    userDispatch({ type: actionTypes.SET_USER, payload: { username, token } })
  }
  const logoutUserHandler = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('token')

    userDispatch({ type: actionTypes.LOGOUT_USER })
  }

  return (
    <userSlice.Provider
      value={{
        ...userState,
        logoutUser: logoutUserHandler,
        setUser: setUserHandler,
      }}>
      {children}
    </userSlice.Provider>
  )
}
