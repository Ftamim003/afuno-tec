"use client";

import EditGuestModal from "@/app/components/EditGuestModal";
import Pagination from "@/app/components/Pagination";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";


type GuestType = {
  name: string;
  id: string;
  phone: string;
  email: string;
  country: string;
  status: string;
};

const guests = [
  {
    name: "Jane Cooper",
    id: "KA0963",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Single",
  },
  {
    name: "Floyd Miles",
    id: "K09637",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Married",
  },
  {
    name: "Abdullah",
    id: "KL0937",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Palestine",
    status: "Married",
  },
  {
    name: "Marvin McKinney",
    id: "KM3794",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Single",
  },
  {
    name: "Jerome Bell",
    id: "KL0862",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Single",
  },
  {
    name: "Kathryn Murphy",
    id: "KS2389",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Divorced",
  },
  {
    name: "Jacob Jones",
    id: "K78365",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Single",
  },
  {
    name: "Kristin Watson",
    id: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Divorced",
  },
  {
    name: "Courtney Henry",
    id: "KH1023",
    phone: "(410) 555-0156",
    email: "courtney@apple.com",
    country: "Germany",
    status: "Single",
  },
  {
    name: "Wade Warren",
    id: "KW8392",
    phone: "(215) 555-0189",
    email: "wade@outlook.com",
    country: "France",
    status: "Married",
  },
  {
    name: "Brooklyn Simmons",
    id: "KB0987",
    phone: "(337) 555-0111",
    email: "brooklyn@amazon.com",
    country: "Netherlands",
    status: "Single",
  },
  {
    name: "Devon Lane",
    id: "KL4389",
    phone: "(445) 555-0174",
    email: "devon@shopify.com",
    country: "Singapore",
    status: "Divorced",
  },
  {
    name: "Savannah Nguyen",
    id: "KS1038",
    phone: "(478) 555-0133",
    email: "savannah@oracle.com",
    country: "Thailand",
    status: "Married",
  },
  {
    name: "Arlene McCoy",
    id: "KM4837",
    phone: "(912) 555-0198",
    email: "arlene@twitter.com",
    country: "Norway",
    status: "Single",
  },
  {
    name: "Annette Black",
    id: "KB9482",
    phone: "(401) 555-0146",
    email: "annette@linkedin.com",
    country: "New Zealand",
    status: "Divorced",
  },
  {
    name: "Guy Hawkins",
    id: "KG1843",
    phone: "(312) 555-0170",
    email: "guy@facebook.com",
    country: "Mexico",
    status: "Married",
  },
  {
    name: "Cody Fisher",
    id: "KF0184",
    phone: "(785) 555-0139",
    email: "cody@youtube.com",
    country: "Philippines",
    status: "Single",
  },
  {
    name: "Esther Howard",
    id: "KE3048",
    phone: "(623) 555-0123",
    email: "esther@dropbox.com",
    country: "Denmark",
    status: "Married",
  },
  {
    name: "Darlene Robertson",
    id: "KD4732",
    phone: "(720) 555-0173",
    email: "darlene@airbnb.com",
    country: "Sweden",
    status: "Single",
  },
  {
    name: "Ralph Edwards",
    id: "KR5429",
    phone: "(802) 555-0108",
    email: "ralph@zoom.com",
    country: "Malaysia",
    status: "Divorced",
  },
  {
    name: "Cameron Williamson",
    id: "KW1129",
    phone: "(204) 555-0165",
    email: "cameron@salesforce.com",
    country: "Pakistan",
    status: "Single",
  },
  {
    name: "Leslie Alexander",
    id: "KA4382",
    phone: "(328) 555-0182",
    email: "leslie@uber.com",
    country: "India",
    status: "Married",
  },
  {
    name: "Jenny Wilson",
    id: "KJ2485",
    phone: "(550) 555-0191",
    email: "jenny@pinterest.com",
    country: "Japan",
    status: "Single",
  },
  {
    name: "Albert Flores",
    id: "KF3841",
    phone: "(635) 555-0184",
    email: "albert@slack.com",
    country: "Finland",
    status: "Married",
  },
  {
    name: "Eleanor Pena",
    id: "KP2398",
    phone: "(438) 555-0144",
    email: "eleanor@notion.so",
    country: "Poland",
    status: "Divorced",
  },
  {
    name: "Bessie Cooper",
    id: "KC4829",
    phone: "(927) 555-0193",
    email: "bessie@figma.com",
    country: "Greece",
    status: "Single",
  },
  {
    name: "Robert Fox",
    id: "KF8371",
    phone: "(843) 555-0181",
    email: "robert@skype.com",
    country: "Italy",
    status: "Married",
  },
  {
    name: "Theresa Webb",
    id: "KW9482",
    phone: "(556) 555-0166",
    email: "theresa@tiktok.com",
    country: "South Korea",
    status: "Single",
  },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<GuestType | null>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, sortOption]);

  const handleEdit = (guest: GuestType) => {
    setSelectedGuest(guest);
    setIsModalOpen(true);
  };

  const handleSaveGuest = (updatedGuest: GuestType) => {
    console.log("Save updated guest: ", updatedGuest);
    // Optional: Update guest list in local state or trigger refetch
  };

 

  const handleAdd = () => {
    console.log("Add guest");
  };

   const handleDelete =()=> {
    console.log("Delete guest");
  };

  const filteredGuests = guests.filter((guest) =>
    guest.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedGuests = [...filteredGuests].sort((a, b) => {
    if (sortOption === "newest") return guests.indexOf(b) - guests.indexOf(a);
    return guests.indexOf(a) - guests.indexOf(b);
  });

  const totalPages = Math.ceil(sortedGuests.length / itemsPerPage);

  const paginatedGuests = sortedGuests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
    <div className="p-6 bg-white  ">
      <h1 className="text-2xl font-semibold mb-4">Guest Management</h1>

      {/* --- Top bar with Search, Sort, and Action Icons --- */}
      <div className="pr-16 flex flex-col sm:flex-row sm:items-center sm:justify-end mb-4 gap-2 lg:gap-96 md:gap-20">
        {/* Left: Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Search */}
          <div className="relative w-full sm:w-[220px]  bg-[#F9FBFF]">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7E7E7E] text-xl">
              <CiSearch />
            </span>
            <Input
              type="text"
              placeholder="Search by guest name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10 "
            />
          </div>

          {/* Sort Dropdown */}
          <select
            className=" px-3 py-2 bg-[#F9FBFF] rounded-md text-sm text-gray-700"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>

        {/* Right: Icons */}
        <div className="flex gap-3 items-center text-gray-600">
          <FaPlus
            className="cursor-pointer hover:text-green-600"
            title="Add New Guest"
            onClick={handleAdd}
          />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="min-w-[700px] w-full text-sm text-left">
          <thead className="border-b border-gray-200 h-10">
            <tr className="text-gray-500">
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
                <td className="p-2 py-5 font-medium text-gray-900 whitespace-nowrap">
                  {guest.name}
                </td>
                <td className="p-2 text-gray-600 whitespace-nowrap">{guest.id}</td>
                <td className="p-2 text-gray-600 whitespace-nowrap">{guest.phone}</td>
                <td className="p-2 text-gray-600 whitespace-nowrap">{guest.email}</td>
                <td className="p-2 text-gray-600 whitespace-nowrap">{guest.country}</td>
                <td className="p-2">
                  <span className="border px-2 py-1 rounded-full text-xs text-gray-600">
                    {guest.status}
                  </span>
                </td>
                <td className="flex gap-1 md:gap-3 items-center pt-4 text-gray-600">
                  <FaEdit
                    className="cursor-pointer hover:text-blue-600"
                    title="Edit Guest"
                    onClick={() => handleEdit(guest)}
                  />

                  <FaTrash
                    className="cursor-pointer hover:text-red-600"
                    title="Delete User"
                    onClick={handleDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>
          Showing data {itemsPerPage * (currentPage - 1) + 1} to{" "}
          {Math.min(itemsPerPage * currentPage, sortedGuests.length)} of{" "}
          {sortedGuests.length} entries
        </span>

        <Pagination
          currentPage={currentPage}
          totalItems={sortedGuests.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
    <EditGuestModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  guestData={selectedGuest}
  onSave={handleSaveGuest}
/>
</>
  );
}
