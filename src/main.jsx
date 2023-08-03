import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Rent from './components/Rent/Rent.jsx'
import Details from './components/Details/Details.jsx'
import SignIn from './components/Account/SignIn.jsx'
import SignUp from './components/Account/SignUp.jsx'
import Map from './components/Map/Map.jsx'
import NewListingPage1 from './components/NewListing/NewListingPage1.jsx'
import NewListingPage2 from './components/NewListing/NewListingPage2.jsx'
import SettingProfile from './components/Setting/SettingProfile.jsx'
import MessageDashboard from './components/MessageDashboard/MessageDashboard.jsx'
import OtpSend from './components/Account/OtpSend.jsx'
import Register from './components/Account/Register.jsx'
import HomeWoner from './components/Account/HomeWoner.jsx'
import RoomSeeker from './components/Account/RoomSeeker.jsx'
import HomeownerPricing from './components/Pricing/HomeownerPricing.jsx'
import RoomSeekerPricing from './components/Pricing/RoomSeekerPricing.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import Profile from './components/Profile/Profile.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/rent',
        element: <Rent></Rent>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: '/map',
        element: <Map></Map>
      },
      {
        path: '/otp-send',
        element: <OtpSend></OtpSend>
      },
      {
        path: '/register',
        element: <PrivateRoute><Register></Register></PrivateRoute>
      },
      {
        path: '/homeowner',
        element: <PrivateRoute><HomeWoner></HomeWoner></PrivateRoute>
      },
      {
        path: '/roomseeker',
        element: <PrivateRoute><RoomSeeker></RoomSeeker></PrivateRoute>
      },
      {
        path: '/sign-in',
        element: <SignIn></SignIn>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/homeowner-pricing',
        element: <HomeownerPricing></HomeownerPricing>
      },
      {
        path: '/roomseeker-pricing',
        element: <RoomSeekerPricing></RoomSeekerPricing>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
    ]
  },
  {
    path: '/new_listing1',
    element: <NewListingPage1></NewListingPage1>
  },
  {
    path: '/new_listing2',
    element: <NewListingPage2></NewListingPage2>
  },
  {
    path: '/setting_profile',
    element: <SettingProfile></SettingProfile>
  },
  {
    path: '/message-deshboard',
    element: <MessageDashboard></MessageDashboard>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
