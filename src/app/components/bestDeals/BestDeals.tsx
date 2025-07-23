"use client";

import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import SearchBox from "./SearchBox";

export type Category =
  | "hotels"
  | "activities"
  | "tours"
  | "transportation"
  | "meetings"
  | "travel"
  | "nosyBee";

export default function BestDeals() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("hotels");

  return (
    <div className="px-4 py-8 max-w-[1297px] mx-auto">
      <h1 className="text-4xl font-bold text-center leading-11">
        BEST DEALS & <span className="text-[#5F9111]">PROMOTIONS</span>
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-6 text-2xl leading-8">
        Find best deals on Hotels, Villas, and much more...
      </p>

      <CategoryTabs
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <SearchBox selectedCategory={selectedCategory} />
    </div>
  );
}
