import React from 'react'
import SFHeading from '../../Components/Service-Flow-Component/SFHeading/SFHeading'
import ScheduleService from '../../Components/Service-Flow-Component/Schedule-Service/ScheduleService'
import ServicePayment from '../../Components/Service-Flow-Component/Service-Payment/Payment'
import ConfirmBookingButton from '../../Components/Service-Flow-Component/Confirm-Booking-Button/ConfirmBooking'

export default function ServiceFlow() {
  

  return (
    <>
  <section className='mt-21'>
    <div className='py-5 px-2'><SFHeading /></div>
    <div className='py-5 px-2'><ScheduleService /></div>

  </section>

  </>
  )
}
