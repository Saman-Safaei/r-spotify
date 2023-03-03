import { createContext } from 'react';

export type TDefaultState = {
  username: string;
  email: string;
  logged: boolean;
};
export type TDefaultFunctions = {
  setUser(username: string, email: string): void;
  logoutUser(): void;
  setLogged(isLogged: boolean): void;
};

export const defaultValues: TDefaultState = {
  username: '',
  email: '',
  logged: false,
};
export const defaultFunctions: TDefaultFunctions = {
  setUser: (username: string, token: string) => {},
  logoutUser: () => {},
  setLogged: (isLogged: boolean) => {},
};

const userSlice = createContext({ ...defaultValues, ...defaultFunctions });

export enum actionTypes {
  SET_USER,
  LOGOUT_USER,
  SET_LOGGED,
}

export default userSlice;
