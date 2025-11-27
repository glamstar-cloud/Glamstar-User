import React from 'react'
import { Link } from 'react-router-dom'


export default function CBBtn() {
  return (
  <>
  <div className='flex justify-end p-4'>
    <Link to='/Chats' className='bg-red-800 text-white font-semibold py-2 px-3 rounded-md hover:bg-gray-600 '>Leave a Review</Link>
  </div>
    

  </>
  )
}
