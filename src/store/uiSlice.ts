import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isSignupShow: false,
    isSigninShow: false,
  },
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
      state.isSigninShow = true;
    },
  },
});

export default uiSlice;
export const { showSignup, hideSignup, hideAll, showSignin, hideSignin } = uiSlice.actions;
