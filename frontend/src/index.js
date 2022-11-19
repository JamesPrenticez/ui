import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './components/App'
import './styles/globals.css'
import 'core-js/stable' // support older browsers
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('app'))

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60000 } },
})

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
