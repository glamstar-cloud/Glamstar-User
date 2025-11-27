import React, { useState } from 'react'

import Card from '../Card/Card'
import H1 from '../../../../../Assets/Homepage/H1.png'
import H2 from '../../../../../Assets/Homepage/H2.png'
import H3 from '../../../../../Assets/Homepage/H3.png'
import H4 from '../../../../../Assets/Homepage/H5.png'
import H5 from '../../../../../Assets/Homepage/H6.png'
import H6 from '../../../../../Assets/Homepage/H7.png'
import H7 from '../../../../../Assets/Homepage/H8.png'
import H8 from '../../../../../Assets/Homepage/H9.png'
import S1 from '../../../../../Assets/Services/S1.png'
import S2 from '../../../../../Assets/Services/S2.png'
import S3 from '../../../../../Assets/Services/S3.png'
import S4 from '../../../../../Assets/Services/S4.png'
import S5 from '../../../../../Assets/Services/S5.png'
import S6 from '../../../../../Assets/Services/S6.png'


export default function CardGrid() {
  

  const cards = [
    {
      id: 1,
      image: S1,
      title: 'Trendy Haircut & Style',
      brand: 'Glamour Locks Salon',
      rating: '4.8⭐ (96 reviews)',
      price: '₦30,000',
    },
    {
      id: 2,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
    },
    {
      id: 3,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
    },
    {
      id: 4,
      image: S2,
      title: 'Deluxe Manicure & Pedicure',
      brand: 'Nail Artistry Studio',
      rating: '4.5⭐ (90 reviews)',
      price: '₦50,000',
    },
    {
      id: 5,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
    },
    {
      id: 6,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
    },
    {
      id: 7,
      image: S3,
      title: 'Bridal Makeup Package',
      brand: 'Beauty Brush Pros',
      rating: '4.9⭐ (98 reviews)',
      price: '₦300,000',
    },
    {
      id: 8,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
    },
    {
      id: 9,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
    },
    {
      id: 10,
      image: S4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      rating: '4.7⭐ (92 reviews)',
      price: '₦40,000',
    },
    {
      id: 11,
      image: H7,
      title: 'Spa Pedicure Deluxe',
      brand: 'Foot Haven',
      rating: '4.4⭐ (180 reviews)',
      price: '₦50,000',
    },
    {
      id: 12,
      image: H8,
      title: 'Evening Glam Makeup',
      brand: 'Event Ready Makeup',
      rating: '4.8⭐ (130 reviews)',
      price: '₦80,000',
    },
    {
      id: 13,
      image: S5,
      title: 'Full Hair Color & Highlights',
      brand: 'Chic Hair Gallery',
      rating: '4.6⭐ (92 reviews)',
      price: '₦30,000',
    },
    {
      id: 14,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
    },
    {
      id: 15,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      tag: 'Nails',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
    },
    {
      id: 16,
      image: S6,
      title: 'Lash Extensions',
      brand: 'Lash Envy Studio',
      rating: '4.4⭐ (88 reviews)',
      price: '₦20,000',
    },
    {
      id: 17,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
    },
    {
      id: 18,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      tag: 'Tattoos',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
    },
    {
      id: 19,
      image: S1,
      title: 'Trendy Haircut & Style',
      brand: 'Glamorous Lock Salon',
      rating: '4.8⭐ (96 reviews)',
      price: '₦10,000',
    },
    {
      id: 20,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      tag: 'Skincare',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
    },
    {
      id: 21,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      tag: 'Hair',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
    },
    {
      id: 22,
      image: S1,
      title: 'Trendy Haircut & Style',
      brand: 'Glamour Locks Salon',
      rating: '4.8⭐ (96 reviews)',
      price: '₦30,000',
    },
    {
      id: 23,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
    },
    {
      id: 24,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
    },
    {
      id: 25,
      image: S2,
      title: 'Deluxe Manicure & Pedicure',
      brand: 'Nail Artistry Studio',
      rating: '4.5⭐ (90 reviews)',
      price: '₦50,000',
    },
    {
      id: 26,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
    },
    {
      id: 27,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
    },
    {
      id: 28,
      image: S3,
      title: 'Bridal Makeup Package',
      brand: 'Beauty Brush Pros',
      rating: '4.9⭐ (98 reviews)',
      price: '₦300,000',
    },
    {
      id: 29,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
    },
    {
      id: 30,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
    },
    {
      id: 31,
      image: S4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      rating: '4.7⭐ (92 reviews)',
      price: '₦40,000',
    },
    {
      id: 32,
      image: H7,
      title: 'Spa Pedicure Deluxe',
      brand: 'Foot Haven',
      rating: '4.4⭐ (180 reviews)',
      price: '₦50,000',
    },
    {
      id: 33,
      image: H8,
      title: 'Evening Glam Makeup',
      brand: 'Event Ready Makeup',
      rating: '4.8⭐ (130 reviews)',
      price: '₦80,000',
    },
    {
      id: 34,
      image: S5,
      title: 'Full Hair Color & Highlights',
      brand: 'Chic Hair Gallery',
      rating: '4.6⭐ (92 reviews)',
      price: '₦30,000',
    },
    {
      id: 35,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
    },
    {
      id: 36,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      tag: 'Nails',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
    },
    {
      id: 37,
      image: S6,
      title: 'Lash Extensions',
      brand: 'Lash Envy Studio',
      rating: '4.4⭐ (88 reviews)',
      price: '₦20,000',
    },
    {
      id: 38,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
    },
    {
      id: 39,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      tag: 'Tattoos',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
    },
    {
      id: 40,
      image: S1,
      title: 'Trendy Haircut & Style',
      brand: 'Glamorous Lock Salon',
      rating: '4.8⭐ (96 reviews)',
      price: '₦10,000',
    },
    {
      id: 41,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      tag: 'Skincare',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
    },
    {
      id: 42,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      tag: 'Hair',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
    },
    
  ]

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 14; // change this to how many cards you want per page
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);


  const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleNext = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const handlePrev = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};


  return (
    <>
      <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4'>
          {currentCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              brand={card.brand}
              rating={card.rating}
              price={card.price}
              image={card.image}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-center items-center mt-6 gap-2'>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className='px-3 py-1 bg-gray-300 rounded disabled:opacity-50 cursor-pointer'
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === i + 1 ? 'bg-red-800 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className='px-3 py-1 bg-gray-300 rounded disabled:opacity-50 cursor-pointer'
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}