import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'

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
          <Link to='/login'>About Us</Link>
          <Link to='/login'>Careers</Link>
          <Link to='/login'>Blog</Link>
        </ul>

        <ul className='grid'>
          <h2 className='font-playfair font-bold pb-3'>Services</h2>
          <Link to='/login'>Hair Styling</Link>
          <Link to='/login'>Nails</Link>
          <Link to='/login'>Makeup</Link>
          <Link to='/login'>Bridal</Link>
          <Link to='/login'>Tattoos</Link>
          <Link to='/login'>Massage</Link>
        </ul>

        <ul className='grid self-start'>
          <h2 className='font-playfair font-bold pb-3'>Support</h2>
          <Link to='/login'>Help Center</Link>
          <Link to='/login'>Contact Us</Link>
          <Link to='/login'>FAQs</Link>
        </ul>

        <ul className='grid self-start'>
          <h2 className='font-playfair font-bold pb-3'>Legal</h2>
          <Link to='/login'>Privacy Policy</Link>
          <Link to='/login'>Terms Of Service</Link>
          <Link to='/login'>Cookie Policy</Link>
        </ul>
        </div>


      </div>
    </div>
    </>
  )
}
