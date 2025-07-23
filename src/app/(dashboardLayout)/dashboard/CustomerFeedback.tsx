"use client";

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const feedbackList = [
  {
    name: "Mark",
    message: "Food could be better",
    room: "A201",
  },
  {
    name: "Jane",
    message: "Loved the service!",
    room: "B103",
  },
  {
    name: "John",
    message: "Air conditioning wasn't working.",
    room: "C205",
  },
];

export default function CustomerFeedback() {
  return (
    <div className="mt-5 md:mt-0 p-6 w-full md:w-2/5 rounded-2xl bg-white shadow">
      <div className="w-4/5">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-medium text-[#383E49]">Customer Feedback</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <BsThreeDotsVertical />
            
          </button>
        </div>

        {/* Feedback list */}
        {feedbackList.map((feedback, index) => (
          <div
            key={index}
            className="flex justify-between items-start border-b-2 py-3"
          >
            <div>
              <h2 className="text-sm font-medium text-[#5D6679]">
                {feedback.name}
              </h2>
              <p className="text-sm text-[#858D9D]">{feedback.message}</p>
            </div>
            <p className="text-sm font-semibold text-[#383E49]">{feedback.room}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
