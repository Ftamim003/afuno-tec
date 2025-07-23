"use client";

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const roomData = [
  {
    deals: 2,
    type: "Single Sharing",
    available: "2/30",
    price: 568,
  },
  {
    deals: 2,
    type: "Double Sharing",
    available: "2/30",
    price: 568,
  },
  {
    deals: 0, // No deal
    type: "Single Sharing",
    available: "2/25",
    price: 1568,
  },
  {
    deals: 1,
    type: "Single Sharing",
    available: "2/30",
    price: 2568,
  },
];

export default function Rooms() {
  return (
    <div className="bg-white pl-8 p-4 mt-5 rounded-2xl ">
      <h1 className="text-xl font-semibold mb-4">Rooms</h1>
      <div className=" sm:flex flex-wrap items-center gap-4">
        {roomData.map((room, index) => (
          <div
            key={index}
            className="mt-3 border p-4 shadow rounded-xl w-full h-[150px] sm:w-[240px] bg-white relative"
          >
            {/* Top row - only show if deals exist */}
            <div className="flex justify-between items-center mb-2 h-6">
              {room?.deals > 0 ? (
                <>
                  <h2 className="font-medium text-xs bg-[#B6E9D1] pt-1 pr-2 pb-1 pl-1 rounded-sm text-[#0D824B]">
                    {room.deals} Deals
                  </h2>
                </>
              ) : (
                <div /> // or null inside if you prefer
              )}
              <div className="text-[#5D6679]">
                <BsThreeDotsVertical />
              </div>
            </div>

            {/* Room Details */}
            <p className="text-[#5D6679] text-base">{room.type}</p>
            <p className="text-gray-500 text-sm">
              <span className="text-[23px] font-semibold text-[#5D6679]">
                {room.available?.split("/")[0]}
              </span>
              <span className="text-lg font-medium text-gray-500">
                /{room.available?.split("/")[1]}
              </span>
            </p>

            {/* Price: make the price bigger than /day */}
            <p className=" mt-1">
              <span className="text-xl font-semibold text-[#1366D9]">
                ${room.price}
              </span>
              <span className="text-[#858D9D] text-base ml-1">/day</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
