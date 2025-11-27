import React from 'react'
import PublicHero from '../../Components/Homepage/Hero/Hero'
import PublicSearchBarGroup from '../../Components/Homepage/Search-Bar-Group/Index'
import PublicCard from '../../Components/Homepage/Public-Cards/CardGrid/CardGrid'
import PublicDescription from '../../Components/Homepage/Description/Decription'
import PublicFooterLink from '../../Components/Homepage/FooterLinks-Components/FooterLinks'

export default function Homepage() {
  return (
    <>
    <div className='mt-20'>
      <PublicHero />
      <PublicSearchBarGroup />
      <PublicCard />
      <PublicDescription />
      <PublicFooterLink />
    </div>

    </>
  )
}
