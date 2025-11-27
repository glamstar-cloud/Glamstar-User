import React from 'react'
import { useParams } from 'react-router-dom'

export default function SCHeading() {
  const { id } = useParams();

  const cards = [
      {
        id: 1,
        title: "Haircut & Styling",
        brand: "Glamorous Locks",
        date: "August 10 2025",
        time: "1:00PM - 2:00PM",
        status: "Pending",
      },
      {
        id: 2,
        title: "Deep Tissue Massage",
        brand: "Senerity Spa",
      },
      {
        id: 3,
        title: "Classic Manicure & Pedicure",
        brand: "Elegance Nails & Spa",
      },
      {
        id: 4,
        title: "Bridal Makeup Trial",
        brand: "Blissful Brides Studio",
      },
      {
        id: 5,
        title: "Small Tattoo Session",
        brand: "Ink Master Tattoo",
      },
    ]

    const service = cards.find(item => item.id === parseInt(id));


  return (
  <>
    <div className='border-b border-b-gray-400 pb-4'>
      <h1 className=' font-bold font-playfair text-xl sm:text-2xl md:text-3xl text-center'>Confirm Service & Leave a Review</h1>
      <p className='text-xs text-center'>We hope you enjoyed your service with {service?.brand}!. Please share your experience</p>
    </div>

  </>
  )
}
