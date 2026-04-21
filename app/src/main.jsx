import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProgramStart from './ProgramStart.jsx'
import Confidentialitate from './Confidentialitate.jsx'
import TermeniConditii from './TermeniConditii.jsx'
import PoliticaCookies from './PoliticaCookies.jsx'

const page = window.location.pathname

function Router() {
  if (page === '/confidentialitate') return <Confidentialitate />
  if (page === '/termeni-si-conditii') return <TermeniConditii />
  if (page === '/politica-cookies') return <PoliticaCookies />
  if (page === '/demonstratie') return <App />
  return <ProgramStart />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
