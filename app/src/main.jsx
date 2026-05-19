import './posthog.js'
import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const page = window.location.pathname

const ProgramStart       = lazy(() => import('./ProgramStart.jsx'))
const App                = lazy(() => import('./App.jsx'))
const Confidentialitate  = lazy(() => import('./Confidentialitate.jsx'))
const TermeniConditii    = lazy(() => import('./TermeniConditii.jsx'))
const PoliticaCookies    = lazy(() => import('./PoliticaCookies.jsx'))

function Router() {
  if (page === '/confidentialitate') return <Confidentialitate />
  if (page === '/termeni-si-conditii') return <TermeniConditii />
  if (page === '/politica-cookies') return <PoliticaCookies />
  if (page === '/demonstratie') return <App />
  return <ProgramStart />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  </StrictMode>,
)
