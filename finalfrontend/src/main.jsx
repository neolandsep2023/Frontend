import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/authContext.jsx'
import { ThemeContextProvider } from './context/themeContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     

      <AuthContextProvider> 
      <RouterProvider router={router}/>
      </AuthContextProvider> 

    
  </React.StrictMode>,
)
