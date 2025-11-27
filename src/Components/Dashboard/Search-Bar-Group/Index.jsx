import React from "react";
import SearchInput from "./SearchInput";
import CategoryDropdown from "./CategoryDropdown";
import LocationDropdown from "./LocationDropdown";
import RatingDropdown from "./RatingDropdown";
import PriceDropdown from "./PriceDropdown";
import FilterBtn from "./FilterBtn";

export default function SearchBarGroup() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center px-4 pt-4">
      <SearchInput />
      <LocationDropdown />
      <CategoryDropdown />
      <PriceDropdown />
      <RatingDropdown />
      <FilterBtn />
    </div>
  );
}
