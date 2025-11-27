import React from 'react'

export default function PriceDropdown() {
  return (
    <>
    <select className="border border-gray-400 rounded-lg p-2 text-gray-600 w-full sm:w-fit ">
      <option>Prices</option>
      <option>₦150k & above</option>
      <option>₦50k & above</option>
      <option>₦300k & above</option>
      <option>₦10k & above</option>
    </select>
    </>
  )
}
