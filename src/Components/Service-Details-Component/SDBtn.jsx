import React from 'react'
import { Link } from 'react-router-dom'

export default function SDBtn({ id }) {
  return (
  <>
    <Link to={`/Service-Flow/${id}`} className='bg-red-800 px-1.5 py-1 rounded text-white font-semibold font-poppins hover:bg-gray-800'>Book Now</Link>
  </>
  )
}
