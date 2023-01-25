import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import ErrorPage from '../pages/ErrorPage'
import Genre from '../pages/Genre'
import Home from '../pages/Home'
import Playlist from '../pages/Playlist'
import Search from '../pages/Search'
import Song from '../pages/Song'

/** @type {[import("react-router-dom").RouteObject]} */
export const routes = [
  {
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: '/playlist/:id',
        element: <Playlist />,
      },
      {
        path: '/genre/:name',
        element: <Genre />,
      },
      {
        path: '/song/:id',
        element: <Song />,
      },
    ],
  },
]

export default createBrowserRouter(routes)
