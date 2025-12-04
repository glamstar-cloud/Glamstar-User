import H1 from '../../Assets/Homepage/H1.png'
import H2 from '../../Assets/Homepage/H2.png'
import H3 from '../../Assets/Homepage/H3.png'
import H4 from '../../Assets/Homepage/H5.png'
import H5 from '../../Assets/Homepage/H6.png'
import H6 from '../../Assets/Homepage/H7.png'
import H7 from '../../Assets/Homepage/H8.png'
import H8 from '../../Assets/Homepage/H9.png'
import S1 from '../../Assets/Services/S1.png'
import S2 from '../../Assets/Services/S2.png'
import S3 from '../../Assets/Services/S3.png'
import S4 from '../../Assets/Services/S4.png'
import S5 from '../../Assets/Services/S5.png'
import S6 from '../../Assets/Services/S6.png'


const CardsData = [
    {
      id: 1,
      image: S1,
      title: 'Trendy Haircut & Style',
      brand: 'Glamour Locks Salon',
      rating: '4.8⭐ (96 reviews)',
      price: '₦30,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 2,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
      location: 'Lagos, Nigeria'
    },
    {
      id: 3,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
      location: 'Abuja, Nigeria'
    },
    {
      id: 4,
      image: S2,
      title: 'Deluxe Manicure & Pedicure',
      brand: 'Nail Artistry Studio',
      rating: '4.5⭐ (90 reviews)',
      price: '₦50,000',
      location: 'Benin, Nigeria'
    },
    {
      id: 5,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
      location: 'Delta, Nigeria'
    },
    {
      id: 6,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
      location: 'Delta, Nigeria'
    },
    {
      id: 7,
      image: S3,
      title: 'Bridal Makeup Package',
      brand: 'Beauty Brush Pros',
      rating: '4.9⭐ (98 reviews)',
      price: '₦300,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 8,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 9,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 10,
      image: S4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      rating: '4.7⭐ (92 reviews)',
      price: '₦40,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 11,
      image: H7,
      title: 'Spa Pedicure Deluxe',
      brand: 'Foot Haven',
      rating: '4.4⭐ (180 reviews)',
      price: '₦50,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 12,
      image: H8,
      title: 'Evening Glam Makeup',
      brand: 'Event Ready Makeup',
      rating: '4.8⭐ (130 reviews)',
      price: '₦80,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 13,
      image: S5,
      title: 'Full Hair Color & Highlights',
      brand: 'Chic Hair Gallery',
      rating: '4.6⭐ (92 reviews)',
      price: '₦30,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 14,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 15,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      tag: 'Nails',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 16,
      image: S6,
      title: 'Lash Extensions',
      brand: 'Lash Envy Studio',
      rating: '4.4⭐ (88 reviews)',
      price: '₦20,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 17,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 18,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      tag: 'Tattoos',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 19,
      image: S1,
      title: 'Trendy Haircut & Style',
      brand: 'Glamorous Lock Salon',
      rating: '4.8⭐ (96 reviews)',
      price: '₦10,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 20,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      tag: 'Skincare',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 21,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      tag: 'Hair',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 22,
      image: S1,
      title: 'Trendy Haircut & Style',
      brand: 'Glamour Locks Salon',
      rating: '4.8⭐ (96 reviews)',
      price: '₦30,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 23,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 24,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 25,
      image: S2,
      title: 'Deluxe Manicure & Pedicure',
      brand: 'Nail Artistry Studio',
      rating: '4.5⭐ (90 reviews)',
      price: '₦50,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 26,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 27,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 28,
      image: S3,
      title: 'Bridal Makeup Package',
      brand: 'Beauty Brush Pros',
      rating: '4.9⭐ (98 reviews)',
      price: '₦300,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 29,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 30,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 31,
      image: S4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      rating: '4.7⭐ (92 reviews)',
      price: '₦40,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 32,
      image: H7,
      title: 'Spa Pedicure Deluxe',
      brand: 'Foot Haven',
      rating: '4.4⭐ (180 reviews)',
      price: '₦50,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 33,
      image: H8,
      title: 'Evening Glam Makeup',
      brand: 'Event Ready Makeup',
      rating: '4.8⭐ (130 reviews)',
      price: '₦80,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 34,
      image: S5,
      title: 'Full Hair Color & Highlights',
      brand: 'Chic Hair Gallery',
      rating: '4.6⭐ (92 reviews)',
      price: '₦30,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 35,
      image: H1,
      title: 'Elegant Updo by Sarah',
      brand: 'Sarah’s styles',
      rating: '4.8⭐ (120 reviews)',
      price: '₦150,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 36,
      image: H2,
      title: 'Luxury Gel Manicure',
      brand: 'Polished Perfection',
      tag: 'Nails',
      rating: '4.5⭐ (200 reviews)',
      price: '₦50,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 37,
      image: S6,
      title: 'Lash Extensions',
      brand: 'Lash Envy Studio',
      rating: '4.4⭐ (88 reviews)',
      price: '₦20,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 38,
      image: H3,
      title: 'Bridal Glow Makeup',
      brand: 'Glamorous Brides',
      rating: '4.9⭐ (150 reviews)',
      price: '₦100,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 39,
      image: H4,
      title: 'Custom Tattoo Design',
      brand: 'Ink Master Studio',
      tag: 'Tattoos',
      rating: '4.7⭐ (250 reviews)',
      price: '₦30,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 40,
      image: S1,
      title: 'Trendy Haircut & Style',
      brand: 'Glamorous Lock Salon',
      rating: '4.8⭐ (96 reviews)',
      price: '₦10,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 41,
      image: H5,
      title: 'Rejuvenating Hydrofacial',
      brand: 'Pure Skin Spa',
      tag: 'Skincare',
      rating: '4.6⭐ (120 reviews)',
      price: '₦130,000',
      location: 'Port Harcourt, Nigeria'
    },
    {
      id: 42,
      image: H6,
      title: 'Vibrant Balayage',
      brand: 'Color Me Chic',
      tag: 'Hair',
      rating: '4.7⭐ (90 reviews)',
      price: '₦80,000',
      location: 'Port Harcourt, Nigeria'
    },
    
  ]

  export default CardsData