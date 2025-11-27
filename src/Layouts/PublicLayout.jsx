import React from 'react'
import Header from '../Components/Header-Components/Header'
import PublicNavbar from '../Components/Public-NavBar-Components/PublicNavbar'
import Footer from '../Components/Footer-Components/Footer'
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <PublicNavbar />
    <main className='grow'>
      <Outlet />
    </main>
    <Footer />
    </div>
    </>
  )
}
