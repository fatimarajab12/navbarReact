import React from "react";
import Home from "./pages/Home/components/Home";
import About from "./pages/About/components/About";
import Root from "./routes/Root.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Login from "./pages/Login/Login.jsx"
import { Outlet } from 'react-router-dom';

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
   
    element: <Root />,
    errorElement:<h4>not found</h4>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      
      // Add more routes here...
      


      
     
    ]


  }

]);
export default function App() {
  return (
    <>
         <RouterProvider router={router} />


    </>
  );
}
