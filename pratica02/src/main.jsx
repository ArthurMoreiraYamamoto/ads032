import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ContatosContextProvider} from './contexts/ContatosContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ContatosContextProvider>
      <App/>
    </ContatosContextProvider>
    
  </React.StrictMode>,
)
