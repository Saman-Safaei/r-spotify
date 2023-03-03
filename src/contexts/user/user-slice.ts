import { createContext } from 'react';

export const defaultValues: CtxUserState = {
  username: '',
  email: '',
  logged: false,
};

export const defaultFunctions: CtxUserFunctions = {
  setUser: (username: string, token: string) => {},
  logoutUser: () => {},
  setLogged: (isLogged: boolean, token: string) => {},
};

const userSlice = createContext({ ...defaultValues, ...defaultFunctions });

export enum actionTypes {
  SET_USER,
  LOGOUT_USER,
  SET_LOGGED,
}

export default userSlice;
