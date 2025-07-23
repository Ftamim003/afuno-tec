"use client";

import DashboardLayout from "../layout";
import CustomerFeedback from "./CustomerFeedback";
import HalfCircleChart from "./HalfCircleChart";
import OccupancyChart from "./OccupancyChart";
import OverviewCards from "./OverviewCards";
import Rooms from "./Rooms";
import RoomStatus from "./RoomStatus";



export default function DashboardPage() {
   const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);
  return (
    <>
     <div className="bg-white h-14">
      <div className="">
        <div className="flex items-center p-2 justify-between pr-5">
          {/* Centered Date */}
          <div className="flex-1 text-center text-lg font-medium text-gray-800">
            {formattedDate}
          </div>

          {/* Create Booking Button */}
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Create Booking
            </button>
          </div>
        </div>
      </div>
     </div>
      
    
    <div className="p-6">

      
      <div className="grid gap-6">

        <OverviewCards />
        <Rooms></Rooms>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        </div>
        <div className="md:flex gap-5">
          <RoomStatus ></RoomStatus>
          
          <HalfCircleChart value={80}></HalfCircleChart>
        </div>

        <div className="md:flex gap-5">
          <OccupancyChart />
          <CustomerFeedback></CustomerFeedback>
        </div>
      </div>

    </div>
    </>
  );
}
