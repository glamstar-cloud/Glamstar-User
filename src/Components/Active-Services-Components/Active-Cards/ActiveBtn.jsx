import React from 'react'
import { Link } from 'react-router-dom'


export default function ActiveBtn({ id }) {
  return (
  <>
  <div className='flex items-center justify-between p-4'>
    <Link to={`/service-confirmation/${id}`} className='font-inter font-semibold'>View Details</Link>
    <Link to='/chats' className='bg-red-800 text-white font-semibold py-2 px-3 rounded-md hover:bg-gray-600 '>Chat with Vendor</Link>
  </div>
    

  </>
  )
}
