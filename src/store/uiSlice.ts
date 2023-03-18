import { createSlice } from '@reduxjs/toolkit';
import { StoreState } from '.';

const initialState: CtxUIState = {
  isSignupShow: false,
  isSigninShow: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    showSignup: state => {
      state.isSignupShow = true;
    },
    showSignin: state => {
      state.isSigninShow = true;
    },
    hideAll: state => {
      state.isSignupShow = false;
      state.isSigninShow = false;
    },
    hideSignup: state => {
      state.isSignupShow = false;
    },
    hideSignin: state => {
      state.isSigninShow = false;
    },
  },
});

export default uiSlice;
export const { showSignup, hideSignup, hideAll, showSignin, hideSignin } = uiSlice.actions;
export const selectSignIn = (store: StoreState) => store.ui.isSigninShow;
export const selectSignUp = (store: StoreState) => store.ui.isSignupShow;
