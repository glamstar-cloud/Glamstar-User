import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Layouts
import PublicLayout from './Layouts/PublicLayout'
import UserLayout from './Layouts/UserLayout'

//Public Pages
import Homepage from './Pages/Homepage/Homepage'
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import ForgotPassword from './Components/Login-Components/ForgotPassword'

//User Pages
import Dashboard from './Pages/Dashboard/Dashboard'
import Services from './Pages/Services/Services'
import ActiveServices from './Pages/Active-Services/ActiveServices'
import CompletedBookings from './Pages/Completed-Bookings/CompletedBookings'
import Chats from './Pages/Chats/Chats'
import UserAccount from './Pages/User-Account/UserAccount'
import ServiceDetails from './Pages/Service-Details/ServiceDetails'
import ServiceFlow from './Pages/Service-Flow/ServiceFlow'
import ServiceConfirmation from './Pages/Service-Confirmation/ServiceConfirmation'
import ThankYou from './Pages/Thank-You-Page/ThankYou'


export default function PageRoutes() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Register' element={<SignUp />} />
        <Route path='/Login' element={<SignIn />} />
        <Route path='/Forgot-Password' element={<ForgotPassword />} />
        
        <Route element={<PublicLayout />}>
        <Route path='/' element={<Homepage />} />
          
        </Route>

          <Route element={<UserLayout />}>
          <Route path='/Home' element={<Dashboard />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Active-Services' element={<ActiveServices />} />
          <Route path='/Completed-Bookings' element={<CompletedBookings />} />
          <Route path='/Chats' element={<Chats />} />
          <Route path='/Profile' element={<UserAccount />} />
          <Route path='/Service-Details' element={<ServiceDetails />} />
          <Route path='/Service-Flow' element={<ServiceFlow />} />
          <Route path='/Service-Confirmation/:id' element={<ServiceConfirmation />} />
          <Route path='/thank-you' element={<ThankYou />} />
            
          </Route>
        
      </Routes>
    </Router>
    </>
  )
}
