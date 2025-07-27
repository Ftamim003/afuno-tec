"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
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



type Props = {
  data: Activity;
};

export default function ActivityCard({ data }: Props) {
     const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="flex flex-col md:flex-row border overflow-hidden shadow-sm bg-white ">
      {/* Carousel Left */}
      <div className="w-full md:w-1/3">
        <Carousel
          plugins={[autoplayPlugin.current]}
          
        //   onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent>
    {data.images.map((img, i) => (
      <CarouselItem key={i}>
        <Image
          src={img}
          alt={`${data.title} image ${i + 1}`}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
      </CarouselItem>
    ))}
  </CarouselContent>
        </Carousel>
      </div>

      {/* Details Right */}
      <div className="p-4 flex-1 flex flex-col relative justify-between">
        {/* Discount Triangle */}
        <div className="absolute top-0 right-0 z-10">
          <div className="relative w-[60px] h-[60px] overflow-hidden">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-red-600 border-l-transparent" />
            <div className="absolute top-0 right-0 w-[60px] h-[60px] flex items-start justify-end pr-1 pt-1">
              <span className="text-[12px] text-white font-bold leading-4 text-center">
                {data.discount}%<br />
                <span className="text-[12px] font-bold leading-4">off</span>
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-xl font-bold text-green-600 max-w-[512px]">
          {data.title}
        </h3>

        {/* Badges */}
       <div className="flex flex-wrap gap-2 mt-2">
  {data.badges.map((badge, index) => (
    <span
      key={index}
      className={`${
        index === 0
          ? "bg-[#F9A825] text-white border-r-2 border-amber-400 px-2"
          : "bg-gray-100 text-gray-700 border-l-2 border-[#F3AF1C]"
      } text-xs px-2 py-1 `}
    >
      {badge}
    </span>
  ))}
</div>


        {/* Description */}
        <p className="text-sm font-semibold text-black  px-2 py-1 mt-3 ">
          {data.description1}
        </p>

        {/* Location & Price */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-xs md:text-sm text-gray-500">
            📍 East — <a href="#" className="text-[#5F9111] underline">Show map</a>
          </div>
          <p className="font-bold  text-sm">
            As From <span className="text-[#22A628] text-sm md:text-lg">Ar {data.price.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
    
  );
}
