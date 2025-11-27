import React from 'react'
import SCHeading from '../../Components/Service-Confirmation-components/SCHeading/SCHeading'
import SCDetails from '../../Components/Service-Confirmation-components/SCDetails/SCDetails'

export default function ServiceConfirmation() {
  return (
  <>
    <section className='mt-21'>
     <div className='py-5 px-2'><SCHeading /></div>
     <div className='py-5 px-2'><SCDetails /></div>
 
    </section>

  </>
  )
}
