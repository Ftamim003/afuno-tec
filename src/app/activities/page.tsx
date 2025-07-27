"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ActivityFilterSidebar from "./ActivityFilterSidebar";
import Navbar from "../shared/navbar/Navbar";
import InputField from "../components/bestDeals/InputField";
import SearchButton from "../components/bestDeals/SearchButton";
import { FaMapMarkerAlt, FaSkiing } from "react-icons/fa";
import Footer from "../shared/footer/Footer";
import ActivityCard from "./ActivityCard";


type Activity = {
  id: string;
  title: string;
  description1: string;
  description2: string;
  images: string[];
  rating: number;
  price: number;
  discount: number;
  badges: string[];
};

  const activityData = [
  {
    id: "1",
    title: "Spinner Dolphin – Full Day Shared Catamaran Cruise + Dolphin Watching – West Coast ",
    description1: "Dolphin watching + Snorkeling + BBQ Lunch + Unlimited Drinks",
    description2: "Activites + Kids and Teens Club",
    images: ["/activitiesImage1.png", "/activitiesImage2.png"],
    rating: 4,
    price: 10000,
    discount: 25,
    badges: ["WATER & SEA", "Family", "Group", "Team Building", "Speedboats"],
  },
   {
    id: "2",
    title: "Spinner Dolphin – Full Day Shared Catamaran Cruise + Dolphin Watching – West Coast ",
    description1: "Dolphin watching + Snorkeling + BBQ Lunch + Unlimited Drinks",
    description2: "Activites + Kids and Teens Club",
    images: ["/activitiesImage1.png", "/activitiesImage2.png"],
    rating: 4,
    price: 7000,
    discount: 25,
    badges: ["WATER & SEA", "Family", "Group", "Team Building", "Speedboats"],
  },
   {
    id: "3",
    title: "Spinner Dolphin – Full Day Shared Catamaran Cruise + Dolphin Watching – West Coast ",
    description1: "Dolphin watching + Snorkeling + BBQ Lunch + Unlimited Drinks",
    description2: "Activites + Kids and Teens Club",
    images: ["/activitiesImage1.png", "/activitiesImage2.png"],
    rating: 4,
    price: 5000,
    discount: 25,
    badges: ["WATER & SEA", "Family", "Group", "Team Building", "Speedboats"],
  },

  {
    id: "4",
    title: "Preskil Island Resort Mauritius",
    description1: "Half Board/ All Inclusive + Complimentary",
    description2: "Activites + Kids and Teens Club",
    images: ["/activitiesImage1.png", "/activitiesImage2.png"],
    rating: 4,
    price: 9057,
    discount: 25,
    badges: ["WATER & SEA", "Family", "Group", "Team Building", "Speedboats"],
  },
  // Add more entries similarly...
];

 

export default function Page() {

     const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(""); 
  const [filteredData, setFilteredData] = useState<Activity[]>(activityData);

  useEffect(() => {
    let filtered = [...activityData];

    // Filter by search
    if (searchTerm) {
      filtered = filtered.filter((activity) =>
        activity.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortOption === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredData(filtered);
  }, [searchTerm, sortOption]);
  return (
    <>
    <Navbar></Navbar>
    <h2 className="text-2xl md:text-4xl text-center font-bold text-black leading-11 md:my-7">
            <span className="text-[#5F9111] ">Activities Deals</span>
          </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white border shadow max-w-[1000px] mx-auto px-4">
              <InputField icon={<FaMapMarkerAlt className="w-5 h-5" />} placeholder="Preferred Location" />
              <InputField icon={<FaSkiing className="w-5 h-5" />} placeholder="Select Activity Type" />
              <SearchButton />
            </div>
    <main className="max-w-[1320px] mx-auto px-4 mt-10 mb-20 bg-[#F6F6F6] pt-20">
  <div className="flex flex-col lg:flex-row gap-6 mt-6">
    
    
    {/* Sidebar Filters */}
    <ActivityFilterSidebar></ActivityFilterSidebar>



    {/* Right Side: Search Bar + Card List */}
    <section className="flex-1 flex flex-col gap-6">
      {/* Search Bar + Sort Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-center ">
        <input
          type="text"
          placeholder="Search activities..."
          className="border px-4 py-2 w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex border pl-1   w-full md:w-2/3 md:gap-9 justify-around ">
          <p className= "text-[#A2A2A2] py-2 ">Sort By</p>
          <button
            className={`text-sm lg:text-base font-semibold border-r-2 py-2 pr-1 ${
              sortOption === "price" ? "text-[#5F9111]" : "text-gray-500"
            }`}
            onClick={() => setSortOption("price")}
          >
            Lowest Price
          </button>

          <button
            className={`text-sm lg:text-base font-semibold border-r-2 py-2  pr-1 ${
              sortOption === "rating" ? "text-[#5F9111]" : "text-gray-500 "
            }`}
            onClick={() => setSortOption("rating")}
          >
            Best Sellers
          </button>
          <button
            className={`text-sm lg:text-base font-semibold  py-2  ${
              sortOption === "price" ? "text-[#5F9111]" : "text-gray-500"
            }`}
            onClick={() => setSortOption("price")}
          >
            Top rated
          </button>
          
        </div>
      </div>

      {/* Activities List */}
      {filteredData.map((item) => (
        <ActivityCard key={item.id} data={item} />
      ))}
    </section>
  </div>
</main>
<Footer></Footer>
</>
  )
}
