import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactRouter from './router/ReactRouter'
import UIProvider from './contexts/ui/UIProvider'
import UserProvider from './contexts/user/UserProvider'
import './assets/styles/tailwind.css'
import './assets/styles/transitions.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({ mutationCache: false })
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <UIProvider>
        <ReactRouter />
      </UIProvider>
    </UserProvider>
  </QueryClientProvider>
)
