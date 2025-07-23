"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartBar, FaUsers } from "react-icons/fa";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <FaChartBar /> },
];

const managementItems = [
  { name: "Guests", href: "/dashboard/guest", icon: <FaUsers /> },
  
];

export default function DashboardSidebar() {
  const pathname = usePathname();

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

        {/* Management Section Title */}
        <div className="ml-3 mt-10 text-sm font-semibold text-gray-500 uppercase px-3">
          Management
        </div>

        {/* Management Links */}
        {managementItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`ml-5  flex items-center gap-3 p-3 rounded-md ${
              pathname === item.href
                ? "bg-[#707FDD] text-[#5A67BA]"
                : "text-gray-700"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
