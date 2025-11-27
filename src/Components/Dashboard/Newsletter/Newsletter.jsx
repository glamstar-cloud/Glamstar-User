import React from 'react'

export default function Newsletter() {
  return (
    <>
    <div className='text-center my-10 px-2 space-y-3'>
      <h1 className='text-2xl md:text-3xl font-black font-playfair'>Stay Updated with Glamstar</h1>
      <p className='text-gray-700 text-sm sm:text-base md:text-lg'>Subscribe to our newsletter for exclusive offers,new service alerts, and beauty tips delivered straight to your inbox.</p>
      <div className='space-x-4'>
        <input type="email" placeholder='Your email address' className='border border-gray-500 w-4xs sm:w-2xs lg:w-xs placeholder:text-gray-400 p-1.5 rounded-sm' />
        <button className='bg-red-800 text-white p-1.5 font-semibold rounded-md hover:bg-gray-600 shadow-md'>Subscribe</button>
      </div>
    </div>

    </>
  )
}
