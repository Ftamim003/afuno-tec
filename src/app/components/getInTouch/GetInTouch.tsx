// components/GetInTouch.tsx
"use client";

import { FaPhoneAlt, FaEnvelope, FaRobot, FaWhatsapp } from "react-icons/fa";
import React from "react";

type ContactItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
};

const contactData: ContactItem[] = [
  {
    id: 1,
    icon: <FaPhoneAlt className="text-xl" />,
    title: "269 1500",
    subtitle: "Business Hours Number",
    color: "text-blue-500 border-blue-500",
  },
  {
    id: 2,
    icon: <FaEnvelope className="text-xl" />,
    title: "info@deal.com",
    subtitle: "Send Us a Message",
    color: "text-green-700 border-green-700",
  },
  {
    id: 3,
    icon: <FaRobot className="text-xl" />,
    title: "Chat Now!",
    subtitle: "Talk in real time",
    color: "text-yellow-500 border-yellow-500",
  },
  {
    id: 4,
    icon: <FaWhatsapp className="text-xl" />,
    title: "+333 44552522",
    subtitle: "Contact us on whatsapp",
    color: "text-red-500 border-red-500",
  },
];

export default function GetInTouch() {
  return (
    <>
      
      <div className="text-center py-10 ">
             <div className="flex h-1.5 mt-10 mb-5">
        <div className="w-1/3 bg-red-200"></div>
        <div className="w-2/3 bg-red-500"></div>
        <div className="w-2/3 bg-green-600"></div>
      </div>
        <div className="mt-20 mb-5 md:flex md:items-center justify-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-black leading-11">
              Get
              <span className="text-[#5F9111]"> In Touch </span>
            </h2>
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 border-gray-200 pt-10">
          {contactData.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-center relative px-4"
            >
              {/* Vertical Divider */}
              {index !== 0 && (
                <div
                  className={`hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    index === 2
                      ? "h-40 border-l-2 border-[#CFCFCF]"
                      : "h-40 border-l border-[#F2EFE8]"
                  }`}
                />
              )}

              {/* Icon Circle */}
              <div
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-3 ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Title and Subtitle */}
              <h3 className="font-bold text-2xl leading-9">{item.title}</h3>
              <p className="text-base leading-6 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
