import { createSlice } from '@reduxjs/toolkit';
import { StoreState } from './index';

const userSlice = createSlice({
  name: 'user',
  initialState: (): CtxUserState => ({
    username: '',
    email: '',
    logged: !!localStorage.getItem('token'),
  }),
  reducers: {
    setUser: {
      prepare: (username: string, email: string): Omit<SetUserAction, 'type'> => ({
        payload: {
          username: username,
          email: email,
        },
      }),
      reducer(state, action: SetUserAction) {
        state.email = action.payload.email;
        state.username = action.payload.username;
      },
    },
    logoutUser: state => {
      state.email = '';
      state.username = '';
      state.logged = false;
    },
    setLogged: {
      prepare: (logged: boolean): Omit<SetLoggedAction, 'type'> => ({
        payload: {
          logged: logged,
        },
      }),
      reducer(state, action: SetLoggedAction) {
        state.logged = action.payload.logged;
      },
    },
  },
});

export default userSlice;

export const { setUser, logoutUser, setLogged } = userSlice.actions;
export const selectEmail = (state: StoreState) => state.user.email;
export const selectUsername = (state: StoreState) => state.user.username;
export const selectLogged = (state: StoreState) => state.user.logged;
