import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRouter from './router/ReactRouter'
import UIProvider from './contexts/ui/UIProvider'
import UserProvider from './contexts/user/UserProvider'
import './assets/styles/tailwind.css'
import './assets/styles/transitions.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserProvider>
    <UIProvider>
      <ReactRouter />
    </UIProvider>
  </UserProvider>
)
