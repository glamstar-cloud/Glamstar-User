import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function FilterBtn() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/register");
  }
  return (
    <>
    <button onClick={handleClick} className='bg-red-800 hover:bg-gray-600 text-white font-semibold font-inter w-full sm:w-fit border rounded-lg p-2'>Search Filter</button>

    </>
  )
}
