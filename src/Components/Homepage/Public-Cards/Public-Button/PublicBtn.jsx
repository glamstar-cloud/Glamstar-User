import React from 'react'
import { Link } from 'react-router-dom'

export default function PublicBtn() {
  return (
    <>
    <Link to="/Login" className=' border border-red-800 mx-2 block text-center font-inter text-red-800 rounded-md shadow hover:bg-red-800 hover:text-white '>View Details</Link>

    </>
  )
}
