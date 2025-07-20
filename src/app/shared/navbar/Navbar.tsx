"use client";

import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
// Example import for a font from next/font/google
import { Lily_Script_One } from "next/font/google";
import { FaRegUserCircle } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";



const lily = Lily_Script_One({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

const navItems = [
  { name: "HOTELS", href: "/#hotels", title: "Hotels, Apartments & Lodge" },
  { name: "ACTIVITIES", href: "/#activities", title: "Activities Deals" },
  { name: "TOURS", href: "/#tours", title: "Tours & Eco Tourism" },
  { name: "TRANSPORTATION", href: "/#transportation", title: "Transportation & Travel Service" },
  { name: "MEETINGS", href: "/#business", title: "Business Meetings" },
  { name: "TRAVELS", href: "/#travel-deals", title: "Travel Deals" },
  { name: "NOSY BE", href: "/#nosybe", title: "Nosy Be Destination" },
];



  const moreItems = [
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Help", href: "/help" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header>
      

      {/* Top Navbar */}
      <div className="flex flex-wrap justify-between items-center py-4 px-4  max-w-[1320px] mx-auto">
        {/* Logo */}
        <div className={`${lily.className} text-2xl font-bold text-green-800`}>
      Afuno<span className="text-orange-400">Tec</span>
    </div>

        {/* Search */}
        <div className="hidden lg:flex items-center flex-1 max-w-80 mx-6 ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-3  bg-gray-100 border-gray-300  focus:outline-none"
          />
          <button className="bg-gray-100 pr-5 py-4 ">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-700 text-xl cursor-pointer">
            <FaRegUserCircle className="text-xl" />
            <span className="hidden sm:inline">My Account</span>
          </div>
          <span className="text-gray-400 text-xl">|</span>
          <div className="text-base cursor-pointer">EN ▾</div>
          <span className="text-gray-400 text-xl">|</span>
          <CiHeart className="text-2xl" />
          <AiOutlineShoppingCart className="text-2xl" />
          <span className="text-[#007ADF] text-sm leading-6 font-semibold cursor-pointer hidden sm:inline">Gift Card</span>
          <button className="bg-[#1BA0E2] text-white px-4 py-3 rounded text-sm hidden sm:inline">
            Holiday Offers
          </button>
        </div>
      </div>

      {/* Green Bottom Menu */}
      <nav className="bg-[#22A628] text-white text-sm w-full">
      <div className=" mx-auto px-4 lg:px-12 flex flex-wrap items-center relative">
        {/* Logo */}
        <Link href="/" className="mr-4">
          <Image
            alt="flag"
            src="/flag.png"
            width={90}
            height={50}
            className=":w-20 lg:h-14 lg:w-48"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden ml-auto text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`w-full lg:w-auto lg:flex items-center gap-6 mt-4 lg:mt-0 lg:ml-4 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
     {navItems.map((item) => (
  <li key={item.href} className="relative group">
    <Link
      href={item.href}
      className={`block px-4 py-[17px] ${
        isActive(item.href) ? "bg-green-900" : "hover:bg-green-700"
      }`}
    >
      {item.name}
    </Link>
    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded z-10 whitespace-nowrap">
      {item.title}
    </span>
  </li>
))}


          

          {/* MORE Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center px-4  rounded ${
                dropdownOpen ? "bg-green-900" : "hover:bg-green-700"
              }`}
            >
              MORE ▾
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-1 bg-white text-black rounded shadow-md w-40 z-10">
                {moreItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
}
