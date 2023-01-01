import React, { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SigninModal from '../components/Authentication/SigninModal'
import SignupModal from '../components/Authentication/SignupModal'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import uiSlice from '../contexts/ui/ui-slice'

function DefaultLayout() {
  const uiCtx = useContext(uiSlice)

  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <main className='pb-sidebar lg:pb-0 mt-navbar lg:ml-lg-sidebar max-w-7xl text-gray-200'>
        <Outlet />
      </main>
      <SignupModal show={uiCtx.isSignupShow} onHide={uiCtx.hideSignup} />
      <SigninModal show={uiCtx.isSigninShow} onHide={uiCtx.hideSignin} />
    </Fragment>
  )
}

export default DefaultLayout
