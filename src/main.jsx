import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import NetworkSecurity from './pages/NetworkSecurity.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NetworkSecurity />
  </StrictMode>,
)
