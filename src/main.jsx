import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Homelayout from './Layout/Homelayout.jsx';
import Home from './Page/Home.jsx';
import Details from './Page/Details.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/details/:id',
        element:<Details></Details>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
