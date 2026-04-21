import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Confidentialitate from './Confidentialitate.jsx'

const page = window.location.pathname

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {page === '/confidentialitate' ? <Confidentialitate /> : <App />}
  </StrictMode>,
)
