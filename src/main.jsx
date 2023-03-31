import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import Technologies from './views/Technologies'
import Articles from './views/Articles'
import Projs from './views/Proj'
import Mentions from './views/Mentions'
import Error404 from './views/errors/Error404'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/mentions" element={<Mentions />} />
      <Route path="/projects" element={<Projs />} />
      <Route path="/news" element={<Articles />} />
      <Route path="*" element={<Error404 />} />
    </>,
  ),
  { basename: '/' },
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Navigate to="/404" />
    </RouterProvider>
  </React.StrictMode>,
)
