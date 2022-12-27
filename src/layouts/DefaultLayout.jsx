import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

function DefaultLayout() {
  return (
    <Fragment>
      <Sidebar />
      <main className='pb-sidebar lg:pb-0 lg:ml-lg-sidebar text-gray-200'>
        <Outlet />
      </main>
    </Fragment>
  )
}

export default DefaultLayout
