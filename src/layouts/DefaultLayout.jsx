import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

function DefaultLayout() {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <main className='pb-sidebar lg:pb-0 mt-navbar lg:ml-lg-sidebar max-w-7xl text-gray-200'>
        <Outlet />
      </main>
    </Fragment>
  )
}

export default DefaultLayout
