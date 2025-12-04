import React from 'react'
import { useParams } from 'react-router-dom'
import CardData from '../../Components/CardsData'
import Dp1 from '../../../Assets/Chats/CB2.png'
import Dp2 from '../../../Assets/Chats/CB3.png'
import Dp3 from '../../../Assets/Chats/Chats1.png'

export default function UserReview() {
  const { id } = useParams();
  const service = CardData.find((item) => item.id === Number(id))

  const reviews = [
    {image: Dp1,
     name:"William Sasha",
     comment:"is a true artist, my hair has never looked better. She understood exactly what I wanted and delivered perfection. Highly recommend!",
     time:"2 weeks ago"
    },
    {image: Dp2,
     name:"William Sasha",
     comment:"is a true artist, my hair has never looked better. She understood exactly what I wanted and delivered perfection. Highly recommend!",
     time:"2 weeks ago"
    },
    {image: Dp3,
     name:"William Sasha",
     comment:"is a true artist, my hair has never looked better. She understood exactly what I wanted and delivered perfection. Highly recommend!",
     time:"2 weeks ago"
    },
  ]

  return (
  <>
    <section className='p-2 border m-2 border-gray-400 rounded-md'>
      <div className=''>
      <h2 className='font-bold font-poppins text-center pb-3'>Customer Reviews</h2>
    {reviews.map(( review, i) => (
      <div key={i} className=''>
      <div className='flex gap-2 border-b border-b-gray-400 py-2'>
        <img src={review.image} alt='review.name' className='rounded-full w-12 h-12 border border-gray-400' />
      <div>
        <h1 className='font-semibold font-poppins text-sm'>{review.name}</h1>
        <p className='text-xs text-gray-500'>{review.time}</p>
        <p className='text-sm text-gray-700'>{service.brand} {review.comment}</p>
      </div>
      </div>
        
      </div>
    ))}
    </div>
    </section>
    
  </>
  )
}
