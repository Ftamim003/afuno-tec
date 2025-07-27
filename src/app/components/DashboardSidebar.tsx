"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBed, FaChartBar, FaChevronDown, FaChevronUp, FaUsers, FaHotel, FaBus, FaMapMarkedAlt, FaRunning, FaPeopleCarry } from "react-icons/fa";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <FaChartBar /> },
];

const managementItems = [
  { name: "Guests", href: "/dashboard/guest", icon: <FaUsers /> },
  { name: "Users", href: "/dashboard/users", icon: <FaUsers /> },
  { name: "Rooms", href: "/dashboard/rooms", icon: <FaBed /> },
  { name: "Reservations", href: "/dashboard/reservations", icon: <FaBed /> },
];

const servicesSubItems = [
  { name: "Hotels", href: "/dashboard/services/hotels", icon: <FaHotel /> },
  { name: "Activities", href: "/dashboard/services/activities", icon: <FaRunning /> },
  { name: "Tours", href: "/dashboard/services/tours", icon: <FaMapMarkedAlt /> },
  { name: "Transportations", href: "/dashboard/services/transportations", icon: <FaBus /> },
  { name: "Meeting", href: "/dashboard/services/meeting", icon: <FaPeopleCarry /> },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <aside className="md:w-52 lg:w-72 hidden md:block bg-[#F1F2F7] min-h-screen">
      <div className="p-6 font-bold text-xl">Hotel Admin</div>

      <nav className="flex flex-col gap-2 px-4">
        {/* Main Items */}
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`mt-6 flex items-center gap-3 p-3 rounded-md ${
              pathname === item.href
                ? "bg-[#707FDD] text-[#5A67BA]"
                : "text-gray-700"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}

        {/* Management Section */}
        <div className="ml-3 mt-10 text-sm font-semibold text-gray-500 uppercase px-3">
          Management
        </div>

        {managementItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`ml-5 flex items-center gap-3 p-3 rounded-md ${
              pathname === item.href
                ? "bg-[#707FDD] text-[#5A67BA]"
                : "text-gray-700"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}

        {/* Services Dropdown */}
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="ml-5 flex items-center justify-between p-3 rounded-md text-gray-700 hover:bg-gray-200"
        >
          <div className="flex items-center gap-3">
            <FaBed />
            <span>Services</span>
          </div>
          <span>
            {isServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
          </span>
        </button>

        {isServicesOpen && (
          <div className="ml-8 flex flex-col gap-1">
            {servicesSubItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 p-2 rounded-md text-sm ${
                  pathname === item.href
                    ? "bg-[#707FDD] text-[#5A67BA]"
                    
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        )}

        <div className="ml-3 mt-10 text-sm font-semibold text-gray-500 uppercase px-3">
          Operations
        </div>
      </nav>
    </aside>
  );
}
