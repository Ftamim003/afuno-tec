import React from "react";
import { Icon } from "lucide-react";
import { IconType } from "react-icons";
import Image from "next/image";
import { LuBadgeCheck } from "react-icons/lu";
import { BsHeadset } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
type InfoCard = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  icon: IconType; // Optional: You can add icons here
};

type ImageData = {
  mainImage: string;
  overlayImage: string;
};

export default function WhyChooseUs() {
  const images: ImageData = {
    mainImage: "/whyChoosUsLobby.png",
    overlayImage: "/whyChooseUsTraveler.png",
  };

  const infoCards: InfoCard[] = [
    {
      id: 1,
      title: "Best price guarantee",
      description:
        "Best offers for Mauritians & Local Residents. We guarantee it!",
      bgColor: "bg-red-500",
      icon: LuBadgeCheck, // Example icon path
    },
    {
      id: 2,
      title: "Top customer service",
      description:
        "Professional, dedicated & customer-oriented, we are here to fully assist you!",
      bgColor: "bg-green-700",
      icon: BsHeadset,
    },
    {
      id: 3,
      title: "Dedicated for locals",
      description:
        "We are 100% local focusing on promoting our beautiful island to locals and foreign visitors.",
      bgColor: "bg-sky-500",
      icon: FaHandshake,
    },
    {
      id: 4,
      title: "One place to find it all",
      description:
        "Hotels, Activities, Restaurants, Leisure, Travel & Much More. Book it all in one place.",
      bgColor: "bg-yellow-500",
      icon: FiMapPin,
    },
  ];

  return (
    <>
      <div className=" mt-20 mb-16 md:flex md:items-center justify-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-black leading-11">
            Why
            <span className="text-[#5F9111]"> Choose Us </span>
          </h2>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto px-4 my-16 grid gap-3 grid-cols-1 lg:grid-cols-2 ">
        {/* Left images */}
        <div className="relative  w-full h-full ">
          <div className="rounded-bl-[62px] overflow-hidden">
            <Image
              src={images.mainImage}
              alt="Main"
              width={648}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-18 right-0 w-48 h-48 md:w-64 md:h-60 rounded-br-[60px] overflow-hidden shadow-lg ">
            <Image
              src={images.overlayImage}
              alt="Overlay"
              height={235}
              width={312}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="flex flex-col items-center gap-4 mt-16 lg:mt-0 w-full">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={` w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[630px] px-4 py-5 text-white ${card.bgColor}`}
              >
                <div className="flex items-start gap-4">
                  <Icon className="text-3xl md:text-4xl mt-1" />
                  <div>
                    <h3 className="text-xl md:text-4xl font-bold leading-12">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base leading-6 mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
