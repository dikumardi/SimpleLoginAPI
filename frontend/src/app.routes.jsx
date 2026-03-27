import {  createBrowserRouter } from "react-router-dom";
import Home from "./features/auth/pages/Home"
import Register from "./features/auth/pages/Register"
import Login from "./features/auth/pages/Login"
import Dashboard from "./features/auth/pages/Dashboard"

export const  router =  createBrowserRouter([
     {
      path:"/",
      element: <Home />
    },
    {
      path:"/register",
      element:<Register />
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
])