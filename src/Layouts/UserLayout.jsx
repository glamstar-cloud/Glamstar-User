import React from 'react'
import UserNavbar from '../Components/User-NavBar-Components/UserNavbar'
import Footer from '../Components/Footer-Components/Footer'
import Header from '../Components/Header-Components/Header'
import FooterLinks from '../Components/FooterLinks-Components/FooterLinks'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <UserNavbar />
      

    <main className='grow'>
      <Outlet />
    </main>


    <FooterLinks />
    <Footer />
    </div>
    </>
  )
}
