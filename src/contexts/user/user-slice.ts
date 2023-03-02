import { createContext } from 'react';

export type TDefaultState = {
  username: string;
  token: string;
  logged: boolean;
};
export type TDefaultFunctions = {
  setUser(username: string, token: string): void;
  logoutUser(): void;
};

export const defaultValues: TDefaultState = {
  username: '',
  token: '',
  logged: false,
};
export const defaultFunctions: TDefaultFunctions = {
  setUser: (username: string, token: string) => {},
  logoutUser: () => {},
};

const userSlice = createContext({ ...defaultValues, ...defaultFunctions });

export enum actionTypes {
  SET_USER,
  LOGOUT_USER,
}

export default userSlice;
