import { createBrowserRouter, RouteObject } from 'react-router-dom'
// Pages
import DefaultLayout from '../layouts/DefaultLayout'
import ErrorPage from '../pages/ErrorPage'
import Genre from '../pages/Genre'
import Home from '../pages/Home'
import Playlist from '../pages/Playlist'
import Search from '../pages/Search'
import Song from '../pages/Song'

const routes: RouteObject[] = [
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

export default createBrowserRouter(routes, {basename: '/r-spotify'})
