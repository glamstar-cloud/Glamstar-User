import React from "react";

export default function LocationDropdown() {
  return (
    <select className="border border-gray-400 rounded-lg p-2 text-gray-600 w-full sm:w-fit">
      <option>Location</option>
      <option>Lagos</option>
      <option>Abuja</option>
      <option>Port Harcourt</option>
    </select>
  );
}
