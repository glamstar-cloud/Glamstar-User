import React from 'react'
import SDHero from '../../Components/Service-Details-Component/SDHero'
import SDDetails from '../../Components/Service-Details-Component/SDDetails'
import UserReview from '../../Components/Service-Details-Component/UserReview'

export default function ServiceDetails() {
  return (
    <>
  <section className='mt-21'>
    <div><SDHero /></div>
    <div><SDDetails /></div>
    <div><UserReview /></div>

  </section>

  </>
  )
}
