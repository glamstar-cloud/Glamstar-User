import React from 'react'
import Heading from '../../Components/Services-Components/Heading/Heading'
import SearchBarGroup from '../../Components/Services-Components/Search-Bar-Group/Index'
import Cardgrid from '../../Components/Services-Components/Cards/CardGrid/CardGrid'


export default function Services() {
  return (
    <>
  <section className='mt-21'>
  <div className='py-5 px-2'><Heading /></div>
  <div className='py-5'><SearchBarGroup /></div>
  <div className='py-5'><Cardgrid /></div>

  </section>

  </>
  )
}
