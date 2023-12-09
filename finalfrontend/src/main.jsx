import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/authContext.jsx'
import { ThemeContextProvider } from './context/themeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>  {/* funcion que hace el toggle dark light  */}
    <App />
    </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
