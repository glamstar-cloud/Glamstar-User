import React from 'react'
import Hero from '../../Components/Dashboard/Hero/Hero'
import SearchBar from '../../Components/Dashboard/Search-Bar-Group/Index'
import Card from '../../Components/Dashboard/Cards/CardGrid/CardGrid'
import Newsletter from '../../Components/Dashboard/Newsletter/Newsletter'


export default function Dashboard() {
  return (
   <>
   <div className='mt-21'>
    <Hero />
   <SearchBar />
   <Card />
   <Newsletter />  
   
   </div>
    
   </>
  )
}
