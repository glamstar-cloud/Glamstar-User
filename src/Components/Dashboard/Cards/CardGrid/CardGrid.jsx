import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import H1 from '../../../../../Assets/Homepage/H1.png'
import H2 from '../../../../../Assets/Homepage/H2.png'
import H3 from '../../../../../Assets/Homepage/H3.png'
import H4 from '../../../../../Assets/Homepage/H5.png'
import H5 from '../../../../../Assets/Homepage/H6.png'
import H6 from '../../../../../Assets/Homepage/H7.png'
import H7 from '../../../../../Assets/Homepage/H8.png'
import H8 from '../../../../../Assets/Homepage/H9.png'
import ArrowRight from '../../../../../Icons/Arrow.svg'


export default function CardGrid() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      tag: 'Hair',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
    },
    {
      id: 2,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      tag: 'Nails',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
    },
    {
      id: 3,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      tag: 'Makeup',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
    },
    {
      id: 4,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      tag: 'Tattoos',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
    },
    {
      id: 5,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      tag: 'Skincare',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
    },
    {
      id: 6,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      tag: 'Hair',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
    },
    {
      id: 7,
      image: H7,
      title: 'Spa Pedicure Deluxe',
      brand: 'Foot Haven',
      tag: 'Nails',
      rating: '4.4⭐ (180 reviews)',
      price: '₦50,000',
    },
    {
      id: 8,
      image: H8,
      title: 'Evening Glam Makeup',
      brand: 'Event Ready Makeup',
      tag: 'Hair',
      rating: '4.8⭐ (130 reviews)',
      price: '₦80,000',
    },
    {
      id: 9,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      tag: 'Hair',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
    },
    {
      id: 10,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      tag: 'Nails',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
    },
    {
      id: 11,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      tag: 'Makeup',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
    },
    {
      id: 12,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      tag: 'Tattoos',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
    },
    {
      id: 13,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      tag: 'Skincare',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
    },
    {
      id: 14,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      tag: 'Hair',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
    },
  ]

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
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          brand={card.brand}
          rating={card.rating}
          price={card.price}
          image={card.image}
          tag={card.tag}
        />
      ))}
    </div>
    </div>

    </>
  )
}
