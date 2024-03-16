import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blog/Blogs";
import SignUp from "../Pages/SignUp/Register";
import DashboardLayout from "../Layout/DashboardLayout";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
           path:'/',
            element:<Home/>
        },
        {
            path:'Blogs',
            element:<Blogs/>
        }
      ]
      
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'register',
        element:<SignUp/>
    },
    {
      path:'/Dashboard',
      element:<DashboardLayout/>
    }
  ]);
export default Router;