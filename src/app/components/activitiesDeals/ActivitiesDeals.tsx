import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
const cardData = [
  {
    id: 1,
    title: "Preskil Island Resort Mauritius",
    description1: "Half Board/ All Inclusive + Complimentary",
    description2: "Activites + Kids and Teens Club",
    image: "/activitiesImage1.png",
    rating: 4,
    price: 9000,
    discount: "25",
  },
  {
    id: 2,
    title: "Preskil Island Resort Mauritius",
    description1: "Half Board/ All Inclusive + Complimentary",
    description2: "Activites + Kids and Teens Club",
    image: "/activitiesImage1.png",
    rating: 4,
    price: 10500,
    discount: "15",
  },
];

const offerData = [
  {
    id: "1",
    title: "Preskil Island Resort Mauritius",
    description1: "Half Board/ All Inclusive + Complimentary",
    description2: "Activites + Kids and Teens Club",
    image: "/activitiesImage1.png",
    rating: 4,
    price: 9000,
    discount: 25,
  },
  {
    id: "2",
    title: "Preskil Island Resort Mauritius",
    description1: "Half Board/ All Inclusive + Complimentary",
    description2: "Activites + Kids and Teens Club",
    image: "/activitiesImage1.png",
    rating: 4,
    price: 10500,
    discount: 15,
  },
  {
    id: "3",
    title: "Preskil Island Resort Mauritius",
    description1: "Half Board/ All Inclusive + Complimentary",
    description2: "Activites + Kids and Teens Club",
    image: "/activitiesImage1.png",
    rating: 4,
    price: 10500,
    discount: 15,
  },
];

export default function ActivitiesDeals() {
  return (
    <div id="activities">
      <div className="mt-20 mb-12  md:flex items-center justify-center md:justify-between max-w-7xl mx-auto px-4">
        {/* Centered: Image + Title */}
        <div className="flex-1 flex justify-center items-center gap-3">
          <Image
            src="/activitiesImage2.png"
            width={36}
            height={36}
            alt="Tours Icon"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-11">
            <span className="text-[#5F9111]">Activities deals</span>
          </h2>
        </div>

        {/* Right: View All link */}
        <div className="flex justify-center pt-4 sm:pt-3 md:pt-0">
          <Link
            href="/activities"
            className=" text-base md:text-xl font-medium text-[#5F9111] "
          >
            View All
            <hr className="border border-[#5F9111]"/>
          </Link>
        </div>
        <span className="hidden md:block ml-2 text-[#5F9111]"><PiGreaterThan /></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[1320px] mx-auto px-4">
        {cardData.map((offer) => (
          <div key={offer.id} className="relative   max-w-[644px]">
            {/* Background Image */}
            <div className=" ">
              <Image
                height={644}
                width={383}
                src={offer.image}
                alt="Activity"
                className="w-full h-full object-cover "
              ></Image>
            </div>

            {/* Triangle Discount Badge */}
            <div className="absolute top-0 right-0 z-10">
              <div className="relative w-[60px] h-[60px] overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-red-600 border-l-transparent" />
                <div className="absolute top-0 right-0 w-[60px] h-[60px] flex items-start justify-end pr-1 pt-1">
                  <span className="text-[12px] text-white font-bold leading-4 text-center">
                    {offer.discount}%<br />
                    <span className="text-[12px] font-bold leading-4">Off</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-10 left-4 right-4 text-white z-10">
              <h2 className="text-xl font-bold leading-7">{offer.title}</h2>
              <p className="text-base ">{offer.description1}</p>
              <p className="text-base">{offer.description2}</p>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-white z-10">
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: offer.rating }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              {/* Price */}
              <p className="text-base">
                As From{" "}
                <span className="text-red-500 font-bold">Ar {offer.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1320px] mx-auto px-4 mt-5 mb:mt-16">
        {offerData.map((offer) => (
          <Link key={offer.id} href={`/activities/${offer.id}`} className="">
            <div className="relative max-h-[455px] w-full  shadow-lg cursor-pointer transition hover:scale-[1.02] duration-200">
              {/* Background Image */}
              <Image
                src={offer.image}
                alt={offer.title}
                className="w-full h-full "
                width={342}
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
                      <span className="text-[12px] font-bold leading-4">
                        Off
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="bg-white px-3 pb-4 pt-3 rounded-b-lg">
                <h2 className="font-semibold text-sm md:text-xl leading-6 md:leading-7 font-inter">
                  {offer.title}
                </h2>
                <p className="text-sm leading-5 mt-2">{offer.description1}</p>
                <p className="text-sm leading-5 mt-2">{offer.description2}</p>

                <div className="flex items-center justify-between w-full mt-4">
                  <div className="flex gap-1 items-center text-yellow-400">
                    {Array.from({ length: offer.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-sm md:text-[16px] leading-5">
                    As From{" "}
                    <span className="text-red-500 font-bold text-[16px]">
                      Ar {offer.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
