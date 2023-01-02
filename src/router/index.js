import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../pages/Home'
import Search from '../pages/Search'

/** @type {[import("react-router-dom").RouteObject]} */
export const routes = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]

export default createBrowserRouter(routes)
