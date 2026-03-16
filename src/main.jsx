import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import EventDemo from './EventDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventDemo/>
   </StrictMode>,
)
