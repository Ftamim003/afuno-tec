"use client"
import Pagination from "@/app/components/Pagination";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";



const users = [
  {
    name: "Jane Cooper",
    role: "Admin",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "2025-07-20T08:45:00",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    role: "Receptionist",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "2025-07-19T10:30:00",
    status: "Inactive",
  },
  {
    name: "Abdullah",
    role: "Restaurant Management",
    phone: "(302) 555-0107",
    email: "abdullah@adobe.com",
    country: "2025-07-21T11:20:00",
    status: "Active",
  },
  {
    name: "Marvin McKinney",
    role: "Billing Agent",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "2025-07-20T14:55:00",
    status: "Active",
  },
  {
    name: "Jerome ",
    role: "",
    phone: "(629) 555-0129",
    email: "jeromf@google.com",
    country: "2025-07-18T09:15:00",
    status: "Inactive",
  },
  {
    name: "Jerome Bell",
    role: "Billing Agent",
    phone: "(629) 555-0129",
    email: "jeromh@google.com",
    country: "2025-07-18T09:15:00",
    status: "Inactive",
  },
  {
    name: "Jerome Bells",
    role: "Billing Agent",
    phone: "(629) 555-0129",
    email: "je@google.com",
    country: "2025-07-18T09:15:00",
    status: "Inactive",
  },
  {
    name: "Jerome Bell",
    role: "Restaurant Management",
    phone: "(629) 555-0129",
    email: "jee@google.com",
    country: "2025-07-18T09:15:00",
    status: "Inactive",
  },
  {
    name: "Jerome Bell",
    role: "Maintenance",
    phone: "(629) 555-0129",
    email: "jeroe@google.com",
    country: "2025-07-18T09:15:00",
    status: "Inactive",
  },
  {
    name: "Jero",
    role: "Receptionist",
    phone: "(629) 555-0129",
    email: "jere@google.com",
    country: "2025-07-18T09:15:00",
    status: "Inactive",
  },
];

export default function UserManagement() {

    const [currentPage, setCurrentPage] = useState(1);
    const [usersLists, setUsersLists] = useState(users);
      const itemsPerPage = 8;
    
      const [searchText, setSearchText] = useState("");
      const [sortOption, setSortOption] = useState("newest");
    
      useEffect(() => {
        setCurrentPage(1);
      }, [searchText, sortOption]);
    
      const handleEdit = () => {
        console.log("Edit guest");
      };
    
      const handleDelete = () => {
        console.log("Delete guest");
      };
    
      const handleAdd = () => {
        console.log("Add guest");
      };
    
      const filteredUsers = usersLists.filter((user) =>
  user.name.toLowerCase().includes(searchText.toLowerCase())
);

    
      const sortedUsers = [...filteredUsers].sort((a, b) => {
  if (sortOption === "newest") return new Date(b.country).getTime() - new Date(a.country).getTime();
  return new Date(a.country).getTime() - new Date(b.country).getTime();
});

    
      const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

const paginatedUsers = sortedUsers.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

  return (
     <div className="p-6 bg-white  ">
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>

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
        <table className="min-w-full h-full text-sm text-left">
          <thead className="border-b border-gray-200 h-10">
            <tr className="text-gray-500">
              <th className="p-2">User Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Email</th>
              <th className="p-2">Last Login</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
  {paginatedUsers.map((user, idx) => (
    <tr key={idx} className="border-b hover:bg-gray-50">
      <td className="p-2 py-5 font-medium text-gray-900">{user.name}</td>

      {/* Role Dropdown */}
      <td className="p-2 text-gray-600">
        <select
  value={user.role}
  className="bg-transparent focus:outline-none"
  onChange={(e) => {
  const newRole = e.target.value;

  setUsersLists((prev) =>
    prev.map((g) =>
      g.email === user.email ? { ...g, role: newRole } : g
    )
  );
}}

>

          <option value="Admin">Admin</option>
          <option value="Restaurant Management">Restaurant Management</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Receptionist">Receptionist</option>
          <option value="Billing Agent">Billing Agent</option>
        </select>
      </td>

      <td className="p-2 text-gray-600">{user.phone}</td>
      <td className="p-2 text-gray-600">{user.email}</td>

      {/* Last Login formatted */}
      <td className="p-2 text-gray-600">
        {new Date(user.country).toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </td>

      {/* Status Badge */}
      <td className="p-2">
        <span
          className={`px-4 py-1 rounded-full text-xs font-medium ${
            user.status === "Active"
              ? " text-[#149D52] border border-[#149D52]"
              : " text-[#EC5252] border border-[#EC5252]"
          }`}
        >
          {user.status}
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
    Showing data {itemsPerPage * (currentPage - 1) + 1} to{" "}
    {Math.min(itemsPerPage * currentPage, sortedUsers.length)} of{" "}
    {sortedUsers.length} entries
  </span>

  <Pagination
    currentPage={currentPage}
    totalItems={sortedUsers.length}
    itemsPerPage={itemsPerPage}
    onPageChange={setCurrentPage}
  />
</div>

    </div>
  )
}
