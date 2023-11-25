import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from 'react-router-dom'
import MyRouter from './Compunets/Reout/Raout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={MyRouter}> </RouterProvider>
  </React.StrictMode>,
)