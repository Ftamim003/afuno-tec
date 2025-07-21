'use client';

import { useState } from 'react';
import { FaHotel, FaSkiing, FaUmbrellaBeach, FaCar, FaUser, FaCalendarAlt, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

type Category = 'hotels' | 'activities' | 'tours';

export default function BestDeals() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('hotels');

  const renderSearchBox = () => {
    switch (selectedCategory) {
      case 'hotels':
        return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-white rounded-lg shadow text-base text-[#757575]">
            <Input icon={<FaCalendarAlt className='w-5 h-5'/>} placeholder="Check-in" />
            <Input icon={<FaCalendarAlt className='w-5 h-5'/>} placeholder="Check-out" />
            <Input icon={<FaUmbrellaBeach className='w-5 h-5'/>} placeholder="0 Night(s)" />
            <Input icon={<FaUser className='w-5 h-5'/>} placeholder="No. of Guests" />
            <SearchButton />
          </div>
        );
      case 'activities':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow">
            <Input icon={<FaMapMarkerAlt className='w-5 h-5'/>} placeholder="Preferred Location" />
            <Input icon={<FaSkiing className='w-5 h-5'/>} placeholder="Select Activity Type" />
            <SearchButton />
          </div>
        );
      case 'tours':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow">
            <Input icon={<FaCalendarAlt className='w-5 h-5'/>} placeholder="Booking Date" />
            <Input icon={<FaMapMarkerAlt className='w-5 h-5'/>} placeholder="Choose Location" />
            <SearchButton />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center leading-11">
        BEST DEALS & <span className="text-green-600">PROMOTIONS</span>
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-6 text-2xl leading-8">
        Find best deals on Hotels, Villas, and much more...
      </p>

      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 ">
        <CategoryButton
          label="HOTELS"
          icon={<FaHotel />}
          active={selectedCategory === 'hotels'}
          onClick={() => setSelectedCategory('hotels')}
        />
        <CategoryButton
          label="ACTIVITIES"
          icon={<FaSkiing />}
          active={selectedCategory === 'activities'}
          onClick={() => setSelectedCategory('activities')}
        />
        <CategoryButton
          label="TOURS"
          icon={<FaUmbrellaBeach />}
          active={selectedCategory === 'tours'}
          onClick={() => setSelectedCategory('tours')}
        />
        {/* You can add more categories here similarly */}
      </div>

      {/* Dynamic Search Form */}
      {renderSearchBox()}
    </div>
  );
}

// Reusable Button for Category
function CategoryButton({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2  ${
        active
          ? ' font-bold text-black '
          : 'bg-white text-gray-700 '
      } hover:shadow`}
    >
      {icon} {label}
    </button>
  );
}

// Reusable Input with Icon
function Input({ icon, placeholder }: { icon: React.ReactNode; placeholder: string }) {
  return (
    <div className="flex items-center  border-r-2 border-gray-300  px-3 py-2 bg-white ">
      <span className="text-pink-600 mr-2">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none w-full text-sm placeholder-gray-500"
      />
    </div>
  );
}

// Search Button
function SearchButton() {
  return (
    <button className="bg-[#1BA0E2] text-white  py-2  hover:bg-blue-600 lg:w-32 lg:h-12">
       <span className='flex justify-center items-center gap-1'><FaSearch></FaSearch>
       SEARCH</span>
    </button>
  );
}
