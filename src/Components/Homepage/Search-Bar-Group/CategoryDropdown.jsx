import React from "react";

export default function CategoryDropdown() {
  return (
    <select className="border rounded-lg border-gray-400 p-2 text-gray-600 w-full sm:w-fit">
      <option>Categories</option>
      <option>Hair</option>
      <option>Makeup</option>
      <option>Spa</option>
    </select>
  );
}
