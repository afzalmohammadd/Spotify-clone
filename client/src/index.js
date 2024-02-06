import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Layout/rootLayout';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/> ,
    errorElement:<Error/> ,
    children:[
      {
        path:"/login",
        element:<Login/>
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

