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
import Notification from './Pages/Notification/Notification'


export default function PageRoutes() {
  
  return (
    <>
    <Router  basename="/Glamstar-User">
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        
        <Route element={<PublicLayout />}>
        <Route path='/' element={<Homepage />} />
          
        </Route>

          <Route element={<UserLayout />}>
          <Route path='/home' element={<Dashboard />} />
          <Route path='/services' element={<Services />} />
          <Route path='/active-services' element={<ActiveServices />} />
          <Route path='/completed-bookings' element={<CompletedBookings />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/profile' element={<UserAccount />} />
          <Route path='/service-details/:id' element={<ServiceDetails />} />
          <Route path='/service-flow/:id' element={<ServiceFlow />} />
          <Route path='/service-confirmation/:id' element={<ServiceConfirmation />} />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='notification' element={<Notification />} />
            
          </Route>
        
      </Routes>
    </Router>
    </>
  )
}
