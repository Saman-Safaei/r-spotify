import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactRouter from './router/ReactRouter'
import UIProvider from './contexts/ui/UIProvider'
import UserProvider from './contexts/user/UserProvider'
import MusicProvider from './contexts/music/MusicProvider'
import './assets/styles/tailwind.css'
import './assets/styles/transitions.css'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <MusicProvider>
        <UIProvider>
          <ReactRouter />
        </UIProvider>
      </MusicProvider>
    </UserProvider>
  </QueryClientProvider>
)
