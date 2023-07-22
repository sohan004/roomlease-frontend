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
        path: '/sign-in',
        element: <SignIn></SignIn>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
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
