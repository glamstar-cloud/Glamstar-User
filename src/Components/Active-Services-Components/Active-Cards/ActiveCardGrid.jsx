import React from 'react'
import Card from './ActiveCard'
import A1 from '../../../../Assets/Active_Services/Active1.png'
import A2 from '../../../../Assets/Active_Services/Active2.png'
import A3 from '../../../../Assets/Active_Services/Active3.png'
import A4 from '../../../../Assets/Active_Services/Active4.png'
import A5 from '../../../../Assets/Active_Services/Active5.png'

export default function ActiveCardGrid() {
  const cards = [
    {
      id: 1,
      image: A1,
      title: "Haircut & Styling",
      brand: "by Glamorous Locks",
      date: "August 10 2025",
      time: "1:00PM - 2:00PM",
      price: '₦50,000',
      status: "Pending",
    },
    {
      id: 2,
      image: A2,
      title: "Deep Tissue Massage",
      brand: "by Senerity Spa",
      date: "August 15 2025",
      time: "3:00PM - 4:00PM",
      price: '₦100,000',
      status: "Upcoming",
    },
    {
      id: 3,
      image: A3,
      title: "Classic Manicure & Pedicure",
      brand: "by Elegance Nails & Spa",
      date: "August 20 2025",
      time: "2:00PM - 2:30PM",
      price: '₦100,000',
      status: "Pending",
    },
    {
      id: 4,
      image: A4,
      title: "Bridal Makeup Trial",
      brand: "by Blissful Brides Studio",
      date: "September 20 2025",
      time: "10:00AM - 12:30PM",
      price: '₦130,000',
      status: "Upcoming",
    },
    {
      id: 5,
      image: A5,
      title: "Small Tattoo Session",
      brand: "by Ink Master Tattoo",
      date: "September 24 2025",
      time: "4:00AM - 5:30PM",
      price: '₦30,000',
      status: "Pending",
    },
  ]
  return (
    <>
    <div>
      <div className='grid md:grid-cols-3 gap-4'>
        {cards.map((card) => (
          <Card 
          key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          brand={card.brand}
          date={card.date}
          time={card.time}
          price={card.price}
          status={card.status}
          />
        ))}
      </div>
    </div>

    </>
  )
}
