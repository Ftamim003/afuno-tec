"use client";

import Pagination from "@/app/components/Pagination";
import React, { useMemo, useState } from "react";


type RoomType = {
  id: string;
  bedType: string;
  floor: string;
  facility: string;
  status: "Available" | "Booked" | "Reserved" | "Waitlist" | "Blocked";
};

const statusStyle = {
  Available: "bg-[#E8F1FD] text-[#448DF2]",
  Booked: "bg-[#FEECEB] text-[#F36960]",
  Reserved: "bg-green-100 text-green-600",
  Waitlist: "bg-[#FEF4E6] text-[#F9A63A]",
  Blocked: "bg-orange-100 text-orange-600",
};

export default function RoomsInfo() {
  const [filter, setFilter] = useState<"all" | "available" | "booked">("all");

  const [rooms, setRooms] = useState<RoomType[]>([
    {
      id: "#001",
      bedType: "Double bed",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Available",
    },
    {
      id: "#002",
      bedType: "Single bed",
      floor: "Floor -2",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Booked",
    },

    {
      id: "#003",
      bedType: "Single bed",
      floor: "Floor -2",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Waitlist",
    },

    {
      id: "#004",
      bedType: "Double bed",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Available",
    },

    {
      id: "#005",
      bedType: "Double bed",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Available",
    },

    {
      id: "#006",
      bedType: "Double bed",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Booked",
    },
    {
      id: "#007",
      bedType: "Double bed",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Booked",
    },
    {
      id: "#008",
      bedType: "Double bed",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Booked",
    },
    {
      id: "#009",
      bedType: "Double bed",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Booked",
    },
    {
      id: "#010",
      bedType: "Double bed",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Available",
    },
    {
      id: "#011",
      bedType: "Vip",
      floor: "Floor -1",
      facility: "AC, shower, Double bed, towel bathtub, TV",
      status: "Available",
    },
    // Add more rooms...
  ]);

  const totalCount = rooms.length;


  const availableCount = useMemo(
    () => rooms.filter((r) => r.status === "Available").length,
    [rooms]
  );


  const bookedCount = useMemo(
    () => rooms.filter((r) => r.status === "Booked").length,
    [rooms]
  );


  const filteredRooms = useMemo(() => {
    if (filter === "available") return rooms.filter((r) => r.status === "Available");
    if (filter === "booked") return rooms.filter((r) => r.status === "Booked");
    return rooms;
  }, [filter, rooms]);

  const activeBtn = "bg-[#E8F1FD] border border-[#1570EF] text-[#448DF2]";
  const defaultBtn = "border";

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedRooms = useMemo(() => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return filteredRooms.slice(startIndex, startIndex + itemsPerPage);
}, [filteredRooms, currentPage]);

const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);




  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Room</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add room
        </button>
      </div>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm ${
            filter === "all" ? activeBtn : defaultBtn
          }`}
        >
          All room ({totalCount})
        </button>
        <button
          onClick={() => setFilter("available")}
          className={`px-4 py-2 rounded-full text-sm ${
            filter === "available" ? activeBtn : defaultBtn
          }`}
        >
          Available room ({availableCount})
        </button>
        <button
          onClick={() => setFilter("booked")}
          className={`px-4 py-2 rounded-full text-sm ${
            filter === "booked" ? activeBtn : defaultBtn
          }`}
        >
          Booked ({bookedCount})
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md overflow-hidden text-sm">
          <thead className="bg-[#F7F9FC] text-[#667085] font-medium">
            <tr>
              <th className="px-4 py-3 text-left">Room number</th>
              <th className="px-4 py-3 text-left">Bed type</th>
              <th className="px-4 py-3 text-left">Room floor</th>
              <th className="px-4 py-3 text-left">Room facility</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 ">
            {paginatedRooms.map((room, index) => (

              <tr key={index} className="border-t py-7">
                <td className="px-4 py-5 font-semibold">{room.id}</td>
                <td className="px-4 py-5">{room.bedType}</td>
                <td className="px-4 py-5">{room.floor}</td>
                <td className="px-4 py-3">{room.facility}</td>
                <td className="px-4 py-3">
                  <span
                    className={`bg-[#E8F1FD] px-3 py-1 rounded-full text-xs font-medium ${
                      statusStyle[room.status]
                    }`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     <Pagination
  currentPage={currentPage}
  totalItems={filteredRooms.length}
  itemsPerPage={itemsPerPage}
  onPageChange={setCurrentPage}
/>


      
    </div>
  );
}
