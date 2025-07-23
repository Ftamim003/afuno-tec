"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const guests = [
  { name: "Jane Cooper", id: "KA0963", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Single" },
  { name: "Floyd Miles", id: "K09637", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Married" },
  { name: "Ronald Richards", id: "KL0937", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Married" },
  { name: "Marvin McKinney", id: "KM3794", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Single" },
  { name: "Jerome Bell", id: "KL0862", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Single" },
  { name: "Kathryn Murphy", id: "KS2389", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Divorced" },
  { name: "Jacob Jones", id: "K78365", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Single" },
  { name: "Kristin Watson", id: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Divorced" },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(guests.length / itemsPerPage);

  const currentGuests = guests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [searchText, setSearchText] = useState("");
const [sortOption, setSortOption] = useState("newest");

const handleEdit = () => {
  console.log("Edit guest");
};

const handleDelete = () => {
  console.log("Delete guest");
};

const handleAdd = () => {
  console.log("Add guest");
};




//   const filteredGuests = useMemo(() => {
//     let guests = [...mockGuests];

//     // Filter by name
//     if (searchTerm.trim()) {
//       guests = guests.filter((guest) =>
//         guest.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Sort by date
//     guests.sort((a, b) =>
//       sortOrder === "newest"
//         ? new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime()
//         : new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime()
//     );

//     return guests;
//   }, [searchTerm, sortOrder]);

const filteredGuests = guests.filter((guest) =>
  guest.name.toLowerCase().includes(searchText.toLowerCase())
);

const sortedGuests = [...filteredGuests].sort((a, b) => {
  if (sortOption === "newest") return guests.indexOf(b) - guests.indexOf(a);
  return guests.indexOf(a) - guests.indexOf(b);
});


const paginatedGuests = sortedGuests.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);



  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Guest Management</h1>

       {/* --- Top bar with Search, Sort, and Action Icons --- */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
  {/* Left: Search and Sort */}
  <div className="flex flex-col sm:flex-row gap-2">
    {/* Search */}
    <Input
      type="text"
      placeholder="Search by guest name"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="w-full sm:w-[220px]"
    />

    {/* Sort Dropdown */}
    <select
      className="border px-3 py-2 rounded text-sm text-gray-700"
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="newest">Sort by: Newest</option>
      <option value="oldest">Sort by: Oldest</option>
    </select>
  </div>

  {/* Right: Icons */}
  <div className="flex gap-3 items-center text-gray-600">
    <FaEdit
      className="cursor-pointer hover:text-blue-600"
      title="Edit Selected"
      onClick={handleEdit}
    />
    <FaTrash
      className="cursor-pointer hover:text-red-600"
      title="Delete Selected"
      onClick={handleDelete}
    />
    <FaPlus
      className="cursor-pointer hover:text-green-600"
      title="Add New Guest"
      onClick={handleAdd}
    />
  </div>
</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="border-b border-gray-200">
            <tr className="text-gray-500">
              <th className="p-2"><input type="checkbox" /></th>
              <th className="p-2">Guest Name</th>
              <th className="p-2">ID Card</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Email</th>
              <th className="p-2">Country</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedGuests.map((guest, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-2"><input type="checkbox" /></td>
                <td className="p-2 font-medium text-gray-900">{guest.name}</td>
                <td className="p-2 text-gray-600">{guest.id}</td>
                <td className="p-2 text-gray-600">{guest.phone}</td>
                <td className="p-2 text-gray-600">{guest.email}</td>
                <td className="p-2 text-gray-600">{guest.country}</td>
                <td className="p-2">
                  <span className="border px-2 py-1 rounded-full text-xs text-gray-600">
                    {guest.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>
          Showing data {itemsPerPage * (currentPage - 1) + 1} to {Math.min(itemsPerPage * currentPage, guests.length)} of {guests.length} entries
        </span>
        <div className="flex items-center gap-1">
          <button
            className="px-2 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-2 py-1 rounded border ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-2 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

