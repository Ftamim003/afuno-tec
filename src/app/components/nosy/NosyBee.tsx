
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaBolt, FaHotel } from "react-icons/fa";

type FlashOfferType = {
  id: number;
  image: string;
  title: string;
  description1: string;
  description2: string;
  price: number;
  rating: number;
  discount: number;
};
export default function NosyBee() {
  
    const flashOffers: FlashOfferType[] = [
    {
      id: 1,
      image: "/walkwayImage.png",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 2,
      image: "/poolViewImage.png",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 3,
      image: "/hotelLobbyImage.png",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 4,
      image: "/hotelStairImage.png",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 5,
      image: "/hotelStairImage.png",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 6,
      image: "/resort3.jpg",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 7,
      image: "/resort3.jpg",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
  ];
  
  return (

    <div>
 
    <h2 className="text-3xl md:text-4xl font-bold text-center mt-20 mb-16 text-black leading-11">
            <Image src="/nosyBee.png" width={9} height={9} alt="Tours Icon" className="inline  mr-3 size-9" />
             Nosy <span className="text-green-600 "> Bee</span>
          </h2>

    <Carousel
      opts={{ align: "start" }}
      className="relative  max-w-[1320px] mx-auto my-8 px-4"
    >
      <CarouselContent>
  {flashOffers.map((offer) => (
    <CarouselItem
      key={offer.id}
      className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
    >
      <div className=" mx-auto">
        <Card className="relative  max-h-[455px]  pb-3  ">
          {/* Background Image */}
          <Image
            src={offer.image}
            alt={offer.title}
            className="w-full h-[247px] "
            width={312}
            height={210}
           
            style={{ objectFit: "cover" }}
          />


          {/* 🔺 Triangle Discount Badge */}
          <div className="absolute top-0 right-0 z-10">
            <div className="relative w-[60px] h-[60px] overflow-hidden">
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-red-600 border-l-transparent" />
              <div className="absolute top-0 right-0 w-[60px] h-[60px] flex items-start justify-end pr-1 pt-1">
                <span className="text-[12px] text-white font-bold leading-4 text-right">
                  {offer.discount}% <br />
                  <span className="text-[12px] font-bold leading-4">Off</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card Bottom Content */}
          <div className="bg-white px-2 bottom-0 left-0 w-full text-black ">
            <h2 className="font-semibold text-sm md:text-xl leading-6 md:leading-7 font-inter">
              {offer.title}
            </h2>
            <p className="text-sm leading-5 mt-2">{offer.description1}</p>
            <p className="text-sm leading-5 mt-2">{offer.description2}</p>

            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-center text-yellow-400 mt-4 ">
                {Array.from({ length: offer.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm md:text-[16px] leading-5 mt-4 ">
                As From{" "}
                <span className="text-red-500 font-bold text-[16px]">Rs {offer.price}</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </CarouselItem>
  ))}
</CarouselContent>


      {/* Navigation controls - only visible on large screens */}
<div className="hidden xl:block">
  <CarouselPrevious className="absolute  top-1/2  z-10" />
  <CarouselNext className="absolute  top-1/2  z-10" />
</div>

    </Carousel>
    </div>
  );
}
  

