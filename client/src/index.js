import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Layout/rootLayout';
import Home from './Routes/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/> , 
    children: [
      {
        path:"/home",
        element: <Home/>
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

