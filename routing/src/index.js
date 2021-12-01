import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  //1. Instrucciones: importamos BrowserRouter como Router y envolvemos
  //    App con él
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)