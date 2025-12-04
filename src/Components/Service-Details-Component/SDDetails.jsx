import React from 'react'
import CardData from '../CardsData';
import { useParams } from 'react-router-dom'

export default function SDDetails() {
  const { id } = useParams();

  const service = CardData.find((item) => item.id === Number(id))
  return (
  <>
    <section className='p-2 border m-2 border-gray-400 rounded-md'>
      <div className='space-y-2'>
        <h1 className='font-bold font-poppins text-center'>About Me</h1>
        <p className='text-sm text-justify'><b>{service.brand}</b> is a premier beauty salon located in the heart of Port Harcourt, Nigeria. With over a decade of experience in the beauty industry, I have honed my skills in hairstyling, makeup artistry, and skincare treatments. My passion for enhancing natural beauty and making clients feel confident is what drives me every day. At Bella Beauty Haven, we offer a wide range of services tailored to meet the unique needs of each client. From trendy haircuts and vibrant color treatments to flawless makeup applications for special occasions, we strive to provide exceptional service in a welcoming and relaxing environment. Our team of skilled professionals is dedicated to staying updated with the latest beauty trends and techniques to ensure that our clients receive top-notch care. We believe that beauty is not just about appearance but also about self-expression and confidence. I invite you to visit Bella Beauty Haven and experience the transformative power of beauty. Whether you're looking for a fresh new look or simply want to pamper yourself, we're here to make your beauty dreams come true. Thank you for considering Bella Beauty Haven for your beauty needs. We look forward to welcoming you and helping you shine! </p>
      </div>
    </section>
  </>
  )
}
