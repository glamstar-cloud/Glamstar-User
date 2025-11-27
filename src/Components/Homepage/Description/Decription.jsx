import React from 'react'
import Rate from '../../../../Icons/rate.png'
import Book from '../../../../Icons/Calendar.png'
import Discover from '../../../../Icons/discover.png'
import Confirm from '../../../../Icons/confirm.png'


export default function Decription() {
  return (
    <>
    <div className='mx-2 mt-5 space-y-1'>
      <h1 className='font-inter font-bold text-lg'>Glamstar - No. 1 Beauty Marketplace</h1>
      <p className='text-gray-800 text-sm text-justify font-inter'>
Glamstar connects you with top hairstylists and makeup artists near you. Discover, compare, and book trusted beauty experts by location, price, and ratings. With secure escrow payments and verified vendors, you can glam up with confidence. 
At Glamstar, we believe beauty should be easy, accessible, and trustworthy. Whether it's a casual makeover, a special event, or your big day, Glamify helps you find the right stylist or makeup artist nearby. Browse portfolios, compare prices, check ratings, and book instantly — all in one place. Payments are held safely in escrow until you're satisfied.
Glamstar is a beauty marketplace designed to bring clients and vendors together. Customers can easily search for hairstylists and makeup artists based on service type, location, and budget. Vendors showcase their work, manage bookings, and get paid securely after service completion. Our escrow system ensures fair transactions, while ratings and reviews build trust across the community.
At Glamstar, we make it effortless to look and feel your best. From flawless makeup to stunning hairstyles, discover trusted beauty experts right in your neighborhood.
      </p>

    <div className='my-5'>
      <h1 className='font-inter font-bold text-lg text-center my-2'>How Glamstar Works</h1>
      <div className='space-y-2 md:grid md:grid-cols-2 md:gap-2 xl:flex'>
        <div className='bg-white p-4 rounded-md space-y-1 shadow-md'>
          <img src={Discover} alt='Discover' className='w-8 mx-auto' />
          <h1 className='text-center font-semibold font-poppins'>1. Discover</h1>
          <p className='text-center font-inter text-gray-700 text-sm'>Search for hairstylists and makeup artists by location, service type, and price. Browse portfolios and read reviews to find the perfect match.</p>
        </div>

        <div className='bg-white p-4 rounded-md space-y-1 shadow-md'>
          <img src={Book} alt='Book' className='w-8 mx-auto' />
          <h1 className='text-center font-semibold font-poppins'>2. Book</h1>
          <p className='text-center font-inter text-gray-700 text-sm'>Instantly schedule an appointment with our chosen beauty expert through our secure platform. Select your date, time, and service details with ease.</p>
        </div>

        <div className='bg-white p-4 rounded-md space-y-1 shadow-md'>
          <img src={Confirm} alt='Confirm' className='w-8 mx-auto' />
          <h1 className='text-center font-semibold font-poppins'>3. Pay Securely</h1>
          <p className='text-center font-inter text-gray-700 text-sm'>Make payments through our escrow system. Funds are held securely until you confirm satisfaction with the service provided.</p>
        </div>

        <div className='bg-white p-4 rounded-md space-y-1 shadow-md'>
          <img src={Rate} alt='Rate' className='w-8 mx-auto' />
          <h1 className='text-center font-semibold font-poppins'>4. Rate & Review</h1>
          <p className='text-center font-inter text-gray-700 text-sm'>After your appointment, leave a rating and review to help others find trusted beauty professionals. Your feedback builds our community.</p>
        </div>

      </div>
    </div>
    </div>

    </>
  )
}
