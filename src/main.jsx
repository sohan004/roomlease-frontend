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
import StripePayment from './components/Pricing/StripePayment.jsx'
import PaypalPayment from './components/Pricing/PaypalPayment.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import Profile from './components/Profile/Profile.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import ListingHomeOwnerUpdate from './components/HomeListingUpdate/ListingHomeOwnerUpdate.jsx'
import ListingRoomSeekerUpdate from './components/HomeListingUpdate/ListingRoomSeekerUpdate.jsx'
import ListingPrivate from './components/PrivateRoute/ListingPrivate.jsx'
import PrivateListingPage from './components/PrivateRoute/PrivateListingPage.jsx'
import DigitalVerify from './components/DigitalVerify/DigitalVerify.jsx'
import About from './components/About/About.jsx'
import HowToList from './components/HowToList/HowToList.jsx'
import FindYourPerfectRoom from './components/FindYourPerfectRoom/FindYourPerfectRoom.jsx'
import Agreement from './components/Agreement/Agreement.jsx'
import DigitalIdChecks from './components/DigitalIdChecks/DigitalIdChecks.jsx'
import Faq from './components/Faq/Faq.jsx'
import Tos from './components/Tos/Tos.jsx'
import Privacy from './components/Privacy/Privacy.jsx'
import Blog from './components/Blog/Blog.jsx'
import Career from './components/Career/Career.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Contact from './components/Contact/Contact.jsx'
import Matches from './components/Matches/Matches.jsx'
import MessageList from './components/MessageList/MessageList.jsx'
import EmtyMessage from './components/MessageDashboard/EmtyMessage.jsx'
import HomeOwnerListingCardDetails from './components/Details/HomeOwnerListingCardDetails.jsx'
import RoomSeekerListingDetails from './components/Details/RoomSeekerListingDetails.jsx'
import AllListing from './components/AllListing/AllListing.jsx'
import ListingAddPrivateRoute from './components/ListingAddPrivateRoute/ListingAddPrivateRoute.jsx'
import CardPayment from './components/CardPayment/CardPayment.jsx'
import BenifitsOfUpgrade from './components/BenifitsOfUpgrade/BenifitsOfUpgrade.jsx'
import Payment from './components/Payment/Payment.jsx'
import BlogDetails from './components/Blog/BlogDetails.jsx'
import TestimonialDetails from './components/Testimonial/TestimonialDetails.jsx'
import CareerDetails from './components/Career/CareerDetails.jsx'
import SiteMap from './components/SiteMap/SiteMap.jsx'


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
        element: <ListingPrivate><PrivateRoute><Register></Register></PrivateRoute></ListingPrivate>
      },
      {
        path: '/homeowner',
        element: <ListingAddPrivateRoute><HomeWoner></HomeWoner></ListingAddPrivateRoute>
      },
      {
        path: '/roomseeker',
        element: <ListingAddPrivateRoute><RoomSeeker></RoomSeeker></ListingAddPrivateRoute>
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
        path: '/stripe-payment',
        element: <StripePayment></StripePayment>
      },
      {
        path: '/paypal-payment',
        element: <PaypalPayment></PaypalPayment>
      },
      {
        path: '/profile',
        element: <PrivateListingPage><Profile></Profile></PrivateListingPage>
      },
      {
        path: '/homeowner-update',
        element: <ListingHomeOwnerUpdate></ListingHomeOwnerUpdate>
      },
      {
        path: '/roomseeker-update',
        element: <ListingRoomSeekerUpdate></ListingRoomSeekerUpdate>
      },
      {
        path: '/digital-verify',
        element: <DigitalVerify></DigitalVerify>
      },

      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/how-to-list',
        element: <HowToList></HowToList>
      },
      {
        path: '/find-your-perfect-room',
        element: <FindYourPerfectRoom></FindYourPerfectRoom>
      },
      {
        path: '/agreement',
        element: <Agreement></Agreement>
      },
      {
        path: '/digital-id-checks',
        element: <DigitalIdChecks></DigitalIdChecks>
      },
      {
        path: '/card-payment',
        element: <CardPayment></CardPayment>
      },


      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/terms-&-conditions',
        element: <Tos></Tos>
      },
      {
        path: '/privacy-policy',
        element: <Privacy></Privacy>
      },
      {
        path: '/site-map',
        element: <SiteMap></SiteMap>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/pay',
        element: <Payment></Payment>
      },
      {
        path: '/Benifits-of-upgrade',
        element: <BenifitsOfUpgrade></BenifitsOfUpgrade>
      },
      {
        path: '/career',
        element: <Career></Career>
      },
      {
        path: '/career/:id',
        element: <CareerDetails></CareerDetails>
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/testimonial',
        element: <Testimonial></Testimonial>
      },
      {
        path: '/testimonial/:id',
        element: <TestimonialDetails></TestimonialDetails>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/matches',
        element: <PrivateRoute><Matches></Matches></PrivateRoute>
      },
      {
        path: '/home-listing/:id',
        element: <HomeOwnerListingCardDetails></HomeOwnerListingCardDetails>
      },
      {
        path: '/room-seeker/:id',
        element: <RoomSeekerListingDetails></RoomSeekerListingDetails>
      },
      {
        path: '/all-listing',
        element: <AllListing></AllListing>
      },
      {
        path: '/setting_profile',
        element: <SettingProfile></SettingProfile>
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
    path: '/message',
    element: <MessageDashboard></MessageDashboard>,
    children: [
      {
        path: '/message',
        element: <EmtyMessage></EmtyMessage>
      },
      {
        path: '/message/:id',
        element: <MessageList></MessageList>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
