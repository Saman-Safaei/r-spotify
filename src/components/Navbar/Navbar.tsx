import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import userSlice from '../../contexts/user/user-slice';
import { useAppDispatch } from '../../store';
import { showSignin, showSignup } from '../../store/uiSlice';

function Navbar() {
  const dispatch = useAppDispatch();
  const userCtx = useContext(userSlice);

  return (
    <div className='fixed top-0 left-0 right-0 lg:left-lg-sidebar h-navbar bg-black text-white flex flex-row items-stretch justify-between z-50'>
      <div className='h-full'></div>
      <div className='h-full flex flex-row items-center px-4 font-bold'>
        {!userCtx.logged ? (
          <Fragment>
            <button className='rounded-full py-3 px-6 text-gray-300' onClick={() => dispatch(showSignup())}>
              Sign up
            </button>
            <button className='rounded-full py-3 px-6 bg-white text-gray-900' onClick={() => dispatch(showSignin())}>
              Log in
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <button className='rounded-full py-3 px-6 text-gray-300' onClick={userCtx.logoutUser}>
              Logout
            </button>
            <Link to='#' className='rounded-full py-3 px-6 bg-white text-gray-900'>
              {userCtx.username || 'Loading'}
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Navbar
