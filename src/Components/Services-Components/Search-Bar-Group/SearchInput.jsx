import React from "react";
import Search from '../../../../Icons/Search.png';
export default function SearchInput() {
  return (
    <div className="flex items-center border border-gray-400 rounded-lg p-2 w-full lg:max-w-xs  text-gray-500">
      <img src={Search} alt="search-btn" className="w-4 h-4 mr-2" />
      <input
        type="text"
        placeholder="Search for services or vendors..."
        className="w-full outline-none placeholder:text-sm"
      />
    </div>
  );
}
