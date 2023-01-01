import { useReducer } from 'react'
import uiSlice, { defaultValues, actionTypes } from './ui-slice'

function uiReducer(state, action) {
  if (action.type === actionTypes.SHOW_SIGNIN)
    return { ...state, isSigninShow: true }
  else if (action.type === actionTypes.SHOW_SIGNUP)
    return { ...state, isSignupShow: true }
  else if (action.type === actionTypes.HIDE_ALL)
    return { ...state, isSignupShow: false, isSigninShow: false }
  else if (action.type === actionTypes.HIDE_SIGNIN)
    return { ...state, isSigninShow: false }
  else if (action.type === actionTypes.HIDE_SIGNUP)
    return { ...state, isSignupShow: false }
  else return state
}

export default function UIProvider({ children }) {
  const [uiState, uiDispatch] = useReducer(uiReducer, defaultValues)

  const showSigninHandler = () => {
    uiDispatch({ type: actionTypes.SHOW_SIGNIN })
  }
  const showSignupHander = () => {
    uiDispatch({ type: actionTypes.SHOW_SIGNUP })
  }
  const hideAllHandler = () => {
    uiDispatch({ type: actionTypes.HIDE_ALL })
  }
  const hideSigninHandler = () => {
    uiDispatch({ type: actionTypes.HIDE_SIGNIN })
  }
  const hideSignupHandler = () => {
    uiDispatch({ type: actionTypes.HIDE_SIGNUP })
  }

  const providerValue = {
    ...uiState,
    showSignin: showSigninHandler,
    showSignup: showSignupHander,
    hideAll: hideAllHandler,
    hideSignin: hideSigninHandler,
    hideSignup: hideSignupHandler,
  }

  return <uiSlice.Provider value={providerValue}>{children}</uiSlice.Provider>
}
