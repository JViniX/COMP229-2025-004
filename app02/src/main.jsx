import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DemoComponent from './DemoComponent.jsx'
import Demo2Component from './Demo2Component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DemoComponent />
    <Demo2Component />
  </StrictMode>,
)
