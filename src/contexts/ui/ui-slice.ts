import { createContext } from 'react';

export const defaultValues: CtxUIState = {
  isSignupShow: false,
  isSigninShow: false,
};
export const defaultFunctions: CtxUIFunctions = {
  showSignup: () => {},
  showSignin: () => {},
  hideAll: () => {},
  hideSignup: () => {},
  hideSignin: () => {},
};

const uiSlice = createContext({ ...defaultValues, ...defaultFunctions });

export enum actionTypes {
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  HIDE_ALL,
  HIDE_SIGNUP,
  HIDE_SIGNIN,
}
export default uiSlice;
