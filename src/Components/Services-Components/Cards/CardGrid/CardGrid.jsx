import React, { useState } from 'react'
import CardsData from '../../../CardsData'
import Card from '../Card/Card'




export default function CardGrid() {

  const cards = CardsData;
  

  

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
              id={card.id}
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