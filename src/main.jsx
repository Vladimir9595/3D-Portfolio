import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Technologies from './Technologies'
import Mentions from './Mentions'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/mentions" element={<Mentions />} />
    </>,
  ),
  { basename: '/3D-Portfolio' },
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
