import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App/index'

// normalize and basic styles for application
import 'normalize.css'
import './sources/styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
