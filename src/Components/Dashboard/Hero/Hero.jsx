import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const images = [
  "./HeroBackground/hero1.png",
  "./HeroBackground/hero2.png",
  "./HeroBackground/hero3.png",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4004);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const handleExplore = (e) => {
    e.preventDefault();
    navigate("/Services")
  }

  return (
  <>
    <section
      className="relative w-full h-55 lg:h-65 xl:h-75 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-3 space-y-3 text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-playfair font-black">Unleash Your Beauty Potential</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-inter max-w-3xl mx-auto">
          Find and book top-rated beauty professionals for hair, nails, makeup, and more. Experience seamleass booking and personalized services tailered to your needs.
        </p>
        <button onClick={handleExplore} className="px-4 py-2 bg-red-800 hover:bg-gray-600 rounded-lg text-white font-poppins font-semibold sm:text-lg xl:text-xl">
          Explore Services
        </button>
      </div>
    </section>

  </>
  )
}
