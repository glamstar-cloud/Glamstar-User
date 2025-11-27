import React from 'react'
import Heading from '../../Components/Active-Services-Components/Active-Heading/ActiveHeading'
import ActiveCardGrid from '../../Components/Active-Services-Components/Active-Cards/ActiveCardGrid'

export default function ActiveServices() {
  return (
  <>
  <section className='mt-21'>
    <div className='py-5 px-2'><Heading /></div>
    <div className='py-5'><ActiveCardGrid /></div>

  </section>

  </>
  )
}
