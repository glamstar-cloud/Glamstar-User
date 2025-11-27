import React from 'react'
import { Link } from 'react-router-dom'
import PublicBtn from '../Public-Button/PublicBtn'

export default function Card({ title, rating, price, brand, image, tag}) {
  return (
    <>
    <div className='bg-white rounded-lg min-w-30 w-auto shadow-xl overflow-hidden pb-2 my-2 mx-2' >
        <img src={image} alt={title} className='w-full h-fit object-cover' />
        

      <div className='p-2 space-y-1.5'>
        <span className='bg-red-300/30 text-red-800 text-sm font-medium px-2.5 rounded-md'>{tag}</span>
        <h5 className='font-semibold font-playfair truncate'>{title}</h5>
        <p className='text-gray-500 text-xs truncate'>{brand}</p>
        <p className='text-xs font-inter'>{rating}</p>
        <h2 className='font-semibold font-poppins text-red-800'>{price}</h2>
      </div>

      <PublicBtn />

    </div>
    </>
  )
}
