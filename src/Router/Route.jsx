import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blog/Blogs";
import SignUp from "../Pages/SignUp/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard_Home from "../Pages/Dashboard/Common/Dashboard_Home";
import Profile from "../Pages/Dashboard/Common/Profile";
import CreateDonationRequest from "../Pages/Dashboard/Donar/CreateDonationRequest";
import MyRequests from "../Pages/Dashboard/Donar/MyRequests";
import ViewRequest from "../Pages/Dashboard/Donar/ViewRequest";
import { getSingleDonation } from "../api/donations";

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
      element:<DashboardLayout/>,
      children:[
        // common route for admin,donar,volunteer
        {
          index:true,
          element:<Dashboard_Home/>
        },
        {
          path:'profile',
          element:<Profile/>
        },
        // donar
        {
    path:'create-donation-request',
    element:<CreateDonationRequest/>
        },
        {
          path:'my-donation-requests',
          element:<MyRequests/>
        },
        {
          path:'view-request/:id',
          element:<ViewRequest/>,
          loader:({params}) =>getSingleDonation(params.id)
        }
      ]
    }
  ]);
export default Router;