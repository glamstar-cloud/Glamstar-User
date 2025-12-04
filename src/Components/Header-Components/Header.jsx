import React from 'react'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <>
    <div className='py-1 fixed w-full z-50 flex justify-center bg-[#d7d7f4]'>
      <Link to='/' className='text-sm font-semibold font-playfair hover:text-red-700'>Become a vendor</Link>
    </div>
    </>
  )
}
