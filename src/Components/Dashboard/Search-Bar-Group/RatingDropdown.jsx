import React from "react";

export default function RatingDropdown() {
  return (
   <>
    <select className="border border-gray-400 rounded-lg p-2 text-gray-600 w-full sm:w-fit">
      <option>Ratings</option>
      <option>4⭐ & up</option>
      <option>3⭐ & up</option>
      <option>2⭐ & up</option>
      <option>1⭐ & up</option>
    </select>
    </>
  );
}
