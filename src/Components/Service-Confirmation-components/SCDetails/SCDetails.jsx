import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import A1 from '../../../../Assets/Active_Services/Active1.png'
import A2 from '../../../../Assets/Active_Services/Active2.png'
import A3 from '../../../../Assets/Active_Services/Active3.png'
import A4 from '../../../../Assets/Active_Services/Active4.png'
import A5 from '../../../../Assets/Active_Services/Active5.png'
import Rating from './Rating'

export default function SCDetails() {
  const { id } = useParams();

   const cards = [
       {
         id: 1,
         image: A1,
         title: "Haircut & Styling",
         brand: "with Glamorous Locks",
         date: "August 10 2025",
         price: '₦50,000',
       },
       {
         id: 2,
         image: A2,
         title: "Deep Tissue Massage",
         brand: "with Senerity Spa",
         date: "August 15 2025",
         price: '₦100,000',
       },
       {
         id: 3,
         image: A3,
         title: "Classic Manicure & Pedicure",
         brand: "with Elegance Nails & Spa",
         date: "August 20 2025",
         price: '₦100,000',
       },
       {
         id: 4,
         image: A4,
         title: "Bridal Makeup Trial",
         brand: "with Blissful Brides Studio",
         date: "September 20 2025",
         price: '₦130,000',
       },
       {
         id: 5,
         image: A5,
         title: "Small Tattoo Session",
         brand: "with Ink Master Tattoo",
         date: "September 24 2025",
         price: '₦30,000',
       },
     ]

    const service = cards.find(item => item.id === parseInt(id));


    //Rating
    const navigate = useNavigate();
      const handleSubmitRating = async ({ rating, review }) => {
        console.log("Rating:", rating);
        console.log("Review:", review);
      
        navigate("/thank-you")

      }


  return (
  <>
    <section className='border-b border-b-gray-400 mb-5'>
      <section className='sm:flex sm:flex-col sm:items-center sm:justify-center px-2 sm:px-4'>

  {/* Service Info */}
  <div className='flex items-center gap-3 mb-5 pb-4'>
    <img 
      src={service?.image} 
      alt={service?.title} 
      className='w-30 sm:w-45 rounded border-2 border-gray-400' 
    />
    <div>
      <h2 className='font-playfair font-bold text-lg sm:text-3xl'>{service?.title}</h2>
      <p className='text-gray-600 font-normal sm:text-lg'>{service?.brand}</p>
      <p className='text-gray-600 text-sm sm:text-base'>{service?.date}</p>
      <h2 className='font-bold sm:text-lg'>{service?.price}</h2>
    </div>
  </div>
</section>
    </section>

<section className='border-t border-t-gray-400'>
  {/* Rating */}
  <div className=' w-full sm:flex sm:justify-center pt-4'>
    <Rating onSubmit={handleSubmitRating} />
  </div>
</section>

  </>
  )
}
