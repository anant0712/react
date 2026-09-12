import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseContextProvider from './context/UseContextProvider'

createRoot(document.getElementById('root')).render(
  <UseContextProvider>
    <App />
  </UseContextProvider>,
)
