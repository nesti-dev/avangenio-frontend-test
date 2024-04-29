import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"

import App from './components/App.jsx'

import './styles/globals.css'
import './styles/light.css'
import './styles/dark.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
)
