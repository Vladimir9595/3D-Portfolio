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
import News from './views/News'
import Projects from './views/Projects'
import Mentions from './views/Mentions'
import Login from './views/Login'
import Error404 from './views/errors/Error404'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/mentions" element={<Mentions />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/news" element={<News />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </>,
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Navigate to="/404" />
    </RouterProvider>
  </React.StrictMode>,
)
