import React from 'react'
import Card from './CBCard'
import C1 from '../../../../Assets/Completed_Bookings/CB1.png'
import C2 from '../../../../Assets/Completed_Bookings/CB2.png'
import C3 from '../../../../Assets/Completed_Bookings/CB3.png'
import C4 from '../../../../Assets/Completed_Bookings/CB4.png'
import C5 from '../../../../Assets/Completed_Bookings/CB5.png'

export default function CBCardGrid() {
  const cards = [
    {
      id: 1,
      image: C1,
      title: "Haircut & Styling",
      brand: "Glamorous Locks",
      date: "August 10 2025",
    },
    {
      id: 2,
      image: C2,
      title: "Deep Tissue Massage",
      brand: "Senerity Spa",
      date: "August 15 2025",
    },
    {
      id: 3,
      image: C3,
      title: "Classic Manicure & Pedicure",
      brand: "Elegance Nails & Spa",
      date: "August 20 2025",
    },
    {
      id: 4,
      image: C4,
      title: "Bridal Makeup Trial",
      brand: "Blissful Brides Studio",
      date: "September 20 2025",
    },
    {
      id: 5,
      image: C5,
      title: "Small Tattoo Session",
      brand: "Ink Master Tattoo",
      date: "September 24 2025",
    },
  ]
  return (
    <>
    <div>
      <div className='grid md:grid-cols-3 gap-4'>
        {cards.map((card) => (
          <Card 
          key={card.id}
          title={card.title}
          image={card.image}
          brand={card.brand}
          date={card.date}
          time={card.time}
          status={card.status}
          />
        ))}
      </div>
    </div>

    </>
  )
}
