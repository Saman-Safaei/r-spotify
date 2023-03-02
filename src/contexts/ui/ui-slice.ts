import { createContext } from 'react';

export type TDefaultState = {
  isSignupShow: boolean;
  isSigninShow: boolean;
};
export type TDefaultFunctions = {
  showSignup(): void;
  showSignin(): void;
  hideAll(): void;
  hideSignup(): void;
  hideSignin(): void;
};

export const defaultValues: TDefaultState = {
  isSignupShow: false,
  isSigninShow: false,
};
export const defaultFunctions: TDefaultFunctions = {
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
