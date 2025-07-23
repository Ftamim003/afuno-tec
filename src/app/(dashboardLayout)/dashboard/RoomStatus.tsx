"use client";

import React from "react";

const roomStatusData = [
  { title: "Booked rooms", count: 104, category: "occupied" },
  { title: "Clean", count: 90, category: "occupied" },
  { title: "Dirty", count: 4, category: "occupied" },
  { title: "Inspected", count: 60, category: "occupied" },
  { title: "Available rooms", count: 20, category: "available" },
  { title: "Clean", count: 30, category: "available" },
  { title: "Dirty", count: 19, category: "available" },
  { title: "Inspected", count: 30, category: "available" },
];

export default function RoomStatus() {
  const occupiedData = roomStatusData.filter(
    (item) => item.category === "occupied"
  );
  const availableData = roomStatusData.filter(
    (item) => item.category === "available"
  );

  return (
    <div className="bg-white md:w-3/5 rounded-2xl lg:h-60 py-4 px-10 shadow">
      <h1 className="text-xl font-semibold mb-3">Room Status</h1>

      <div className="flex justify-between gap-8 ">
        {/* Occupied Column */}
        <div className="flex-1">
          {occupiedData.map((item, index) => (
            <div key={index} className="flex justify-between py-1">
              <h3
                className={`text-base  ${
                  item.title === "Booked rooms"
                    ? "font-semibold text-[#5D6679]"
                    : "font-normal text-[#858D9D]"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-base ${
                  item.title === "Booked rooms"
                    ? "font-semibold"
                    : "font-normal"
                }`}
              >
                {item.count}
              </p>
            </div>
          ))}
        </div>

        {/* Available Column */}
        <div className="flex-1">
          {availableData.map((item, index) => (
  <div key={index} className="flex justify-between py-1">
    <h3
      className={`text-base  ${
        item.title === "Available rooms" ? "font-semibold text-[#5D6679]" : "font-normal text-[#858D9D]"
      }`}
    >
      {item.title}
    </h3>
    <p
      className={`text-base ${
        item.title === "Available rooms" ? "font-semibold" : "font-normal"
      }`}
    >
      {item.count}
    </p>
  </div>
))}
        </div>
      </div>
    </div>
  );
}
