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
import { getSingleDonation, getSinglePendingDonation } from "../api/donations";
import Payment from "../Pages/Payment/Payment";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";
import DonationRequestDetail from "../Pages/DonationRequest/DonationRequestDetail";
import EditRequest from "../Pages/Dashboard/Donar/EditRequest";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import About from "../Pages/About/About";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import { getSingleService } from "../api/service";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path: 'Blogs',
        element: <Blogs />
      },
      {
       path:'service-details/:id',
       element:<ServiceDetails/>,
       loader:({params}) => getSingleService(params.id)
      },
      {
        path: 'Donation Requests',
        element: <DonationRequest />
      },
      {
        path: 'Donation Requests/donation-request/:id',
        element: <DonationRequestDetail />,
        loader: ({ params }) => getSinglePendingDonation(params.id)

      },
      {
        path: 'Payment',
        element: <Payment />
      }
    ]

  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <SignUp />
  },
  {
    path: '/Dashboard',
    element: <DashboardLayout />,
    children: [

      // common route for admin,donar,volunteer
      {
        index: true,
        element: <Dashboard_Home />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      // admin route
      {
        path: 'allUsers',
        element: <AllUsers />
      },
      // donar
      {
        path: 'create-donation-request',
        element: <CreateDonationRequest />
      },
      {
        path: 'my-donation-requests',
        element: <MyRequests />
      },
      {
        path: 'view-request/:id',
        element: <ViewRequest />,
        loader: ({ params }) => getSingleDonation(params.id)
      },
      {
        path: 'update-request/:id',
        element: <EditRequest />
      }
    ]
  }
]);
export default Router;