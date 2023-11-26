import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from 'react-router-dom'
import MyRouter from './Compunets/Reout/Raout'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={MyRouter}> </RouterProvider>
</AuthProvider>
  </React.StrictMode>,
)
