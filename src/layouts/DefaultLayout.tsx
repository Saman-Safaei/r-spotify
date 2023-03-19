import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import SigninModal from '../components/Authentication/SigninModal';
import SignupModal from '../components/Authentication/SignupModal';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import MusicBar from '../components/Music/MusicBar';
import { useAppDispatch, useAppSelector } from '../store';
import { hideSignin, hideSignup, selectSignIn, selectSignUp } from '../store/uiSlice';

function DefaultLayout() {
  const dispatch = useAppDispatch();
  const isSignUpShow = useAppSelector(selectSignUp);
  const isSignInShow = useAppSelector(selectSignIn);

  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <main className='pb-sidebar lg:pb-0 mt-navbar mb-28 lg:ml-lg-sidebar max-w-7xl text-gray-200'>
        <Outlet />
      </main>
      <MusicBar />
      <SignupModal show={isSignUpShow} onHide={() => dispatch(hideSignup())} />
      <SigninModal show={isSignInShow} onHide={() => dispatch(hideSignin())} />
    </Fragment>
  );
}

export default DefaultLayout;
