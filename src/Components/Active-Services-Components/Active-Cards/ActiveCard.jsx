import React from 'react'
import ActiveBtn from './ActiveBtn'

export default function ActiveCard({ id, title, image, brand, date, time, status, price }) {
  const statusColors = {
    Upcoming: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };
  const statusClass = statusColors[status] || "bg-gray-100 text-gray-700"



  return (
  <>
    
    <div className='bg-white border border-gray-300 rounded-lg min-w-30 w-auto shadow overflow-hidden pb-2 my-5 mx-2'>
      <img src={image} alt={title} className='w-full h-fit object-cover'/>

    <div className='p-2 space-y-1.5 border-b-2 border-b-gray-300 pb-5'>
      <h1 className='font-semibold font-playfair text-lg truncate'>{title}</h1>
      <p className='text-gray-500 text-sm truncate'>{brand}</p>
      <h5 className='font-inter sm:text-sm '><b>Date:</b> {date}</h5>
      <h5 className='font-inter sm:text-sm'><b>Time:</b> {time}</h5>
      <h5 className='font-inter sm:text-sm'><b>Price:</b> {price}</h5>
      <span className={`py-1 px-2.5 font-semibold rounded ${statusClass}`}>{status}</span>
    </div>

    <div>
      <ActiveBtn id={id} />
    </div>
      
    </div>

  </>
  )
}
