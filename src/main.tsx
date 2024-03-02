import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {   RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import OpenedProd from './components/OpenedProd.tsx'
import AllProducts from './pages/AllProducts.tsx'
import InCart from './pages/InCart.tsx'

const router = createBrowserRouter([
  {
    path: "/Living-furniture/",
    element: <App />,
    children: [
      {
        path: "/Living-furniture/",
        element: <Home />,
      },
      {
        path: "/Living-furniture/product",
        element: <OpenedProd />,
      },
      {
        path: "/Living-furniture/AllProducts",
        element: <AllProducts />,
      },
      {
        path: "/Living-furniture/InCart",
        element: <InCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
