import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([{
  
  path: '/',
  element: <App />,
},
{
path: '*',
element: <div>404 Page Not Found</div>,
}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
