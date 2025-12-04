import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../../Assets/Logo.png'

export default function FooterLinks() {
  return (
    <>
    <div className='bg-gray-700 text-white'>
      <div className='px-2 py-5 lg:grid lg:grid-cols-2'>
        <div className='space-y-2'>
          <img src={Logo} alt="Company logo" className='w-30' />
          <p className='text-sm lg:w-4/5 lg:text-base'>Discover and book the best beauty services with Glamstar. Your one-stop solution for all beauty needs</p>
        </div>

        <div className='grid grid-cols-2 space-y-5 pt-5 sm:grid-cols-3 md:flex md:justify-between md:px-10 lg:px-0'>
          <ul className='grid self-start '>
          <h2 className='font-playfair font-bold pb-3'>Company</h2>
          <Link to='/Login'>About Us</Link>
          <Link to='/Login'>Careers</Link>
          <Link to='/Login'>Blog</Link>
        </ul>

        <ul className='grid'>
          <h2 className='font-playfair font-bold pb-3'>Services</h2>
          <Link to='/Login'>Hair Styling</Link>
          <Link to='/Login'>Nails</Link>
          <Link to='/Login'>Makeup</Link>
          <Link to='/Login'>Bridal</Link>
          <Link to='/Login'>Tattoos</Link>
          <Link to='/Login'>Massage</Link>
        </ul>

        <ul className='grid self-start'>
          <h2 className='font-playfair font-bold pb-3'>Support</h2>
          <Link to='/Login'>Help Center</Link>
          <Link to='/Login'>Contact Us</Link>
          <Link to='/Login'>FAQs</Link>
        </ul>

        <ul className='grid self-start'>
          <h2 className='font-playfair font-bold pb-3'>Legal</h2>
          <Link to='/Login'>Privacy Policy</Link>
          <Link to='/Login'>Terms Of Service</Link>
          <Link to='/Login'>Cookie Policy</Link>
        </ul>
        </div>


      </div>
    </div>
    </>
  )
}
