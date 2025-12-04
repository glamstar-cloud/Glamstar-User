import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import CardsData from '../../../CardsData'
import ArrowRight from '../../../../../Icons/Arrow.svg'


export default function CardGrid() {
  const navigate = useNavigate();


  const numberOfCardsToShow = 14;
  const cardsToDisplay = CardsData.slice(0, numberOfCardsToShow)
  const handleClick = () => {
    navigate("/Sign-In")
  }
  return (
    <>
    <div className='mt-5'>
      <div className='flex items-center mx-3'>
        <h2 className=' font-bold font-playfair text-xl sm:text-2xl md:text-3xl  my-2'>Popular Services Near You</h2>
        <img src={ArrowRight} alt='Arrow right' onClick={handleClick} className='cursor-pointer pt-1 md:pt-1.5  w-8' />
      </div>
    <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
      {cardsToDisplay.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          brand={card.brand}
          rating={card.rating}
          price={card.price}
          image={card.image}
        />
      ))}
    </div>
    </div>

    </>
  )
}
