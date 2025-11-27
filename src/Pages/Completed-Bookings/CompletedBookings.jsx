import React from 'react'
import CBHeading from '../../Components/Completed-Bookings-Component/CB-Heading/CBHeading'
import CBCardGrid from '../../Components/Completed-Bookings-Component/CB-Cards/CBCardGrid'

export default function CompletedBookings() {
  return (
    <>
  <section className='mt-21'>
    <div className='py-5'><CBHeading /></div>
    <div className='py-5'><CBCardGrid /></div>

  </section>

  </>
  )
}
