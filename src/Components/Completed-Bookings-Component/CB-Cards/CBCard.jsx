import React from 'react'
import Calendar from '../../../../Assets/Completed_Bookings/CB7.png'
import User from '../../../../Assets/Completed_Bookings/CB6.png'

export default function CBCard({ title, image, brand, date }) {
 



  return (
  <>
    
    <div className='bg-white border border-gray-300 rounded-lg min-w-30 w-auto shadow overflow-hidden pb-2 my-5 mx-2'>
      <img src={image} alt={title} className='w-full h-fit object-cover'/>

    <div className='p-2 space-y-1.5'>
      <h1 className='font-semibold font-playfair text-lg truncate'>{title}</h1>
      <p className='text-gray-600 truncate flex items-center gap-2'><img src={User} alt={brand} />{brand}</p>
      <h5 className='font-inter sm:text-sm text-gray-600 flex items-center gap-2'><img src={Calendar} alt='scheduled' /> {date}</h5>
    </div>
      
    </div>

  </>
  )
}
