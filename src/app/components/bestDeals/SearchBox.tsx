"use client";

import { useState } from "react";
import { format, differenceInDays } from "date-fns";
import { FaCalendarAlt, FaMapMarkerAlt, FaSkiing, FaUmbrellaBeach, FaUser } from "react-icons/fa";

import InputField from "./InputField";
import SearchButton from "./SearchButton";
import CalendarModal from "../CalendarModal";
import { Category } from "./BestDeals";

export default function SearchBox({ selectedCategory }: { selectedCategory: Category }) {
  const [selectedCheckin, setSelectedCheckin] = useState<Date>();
  const [selectedCheckout, setSelectedCheckout] = useState<Date>();
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCheckoutCalendar, setShowCheckoutCalendar] = useState(false);

  const nights =
    selectedCheckin && selectedCheckout
      ? differenceInDays(selectedCheckout, selectedCheckin)
      : 0;

  switch (selectedCategory) {
    case "hotels":
      return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-white rounded-lg shadow text-base text-[#757575]">
          <div className="relative">
            <InputField
              icon={<FaCalendarAlt className="w-5 h-5" />}
              placeholder="Check-in"
              readOnly
              value={selectedCheckin ? format(selectedCheckin, "dd MMM yyyy") : ""}
              onClick={() => setShowCalendar(true)}
            />
            {showCalendar && (
              <CalendarModal
              
                selected={selectedCheckin}
                setSelected={(date: Date) => {
                  setSelectedCheckin(date);
                  setShowCalendar(false);
                }}
                setShowCalendar={setShowCalendar}
              />
            )}
          </div>

          <div className="relative">
            <InputField
              icon={<FaCalendarAlt className="w-5 h-5" />}
              placeholder="Check-out"
              readOnly
              value={selectedCheckout ? format(selectedCheckout, "dd MMM yyyy") : ""}
              onClick={() => setShowCheckoutCalendar(true)}
            />
            {showCheckoutCalendar && (
              <CalendarModal
                selected={selectedCheckout}
                setSelected={(date: Date) => {
                  setSelectedCheckout(date);
                  setShowCheckoutCalendar(false);
                }}
                setShowCalendar={setShowCheckoutCalendar}
              />
            )}
          </div>

          <InputField
            icon={<FaUmbrellaBeach className="w-5 h-5" />}
            placeholder="0 Night(s)"
            readOnly
            value={nights > 0 ? `${nights} Night(s)` : ""}
          />
          <InputField icon={<FaUser className="w-5 h-5" />} placeholder="No. of Guests" />
          <SearchButton />
        </div>
      );

    case "activities":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow">
          <InputField icon={<FaMapMarkerAlt className="w-5 h-5" />} placeholder="Preferred Location" />
          <InputField icon={<FaSkiing className="w-5 h-5" />} placeholder="Select Activity Type" />
          <SearchButton />
        </div>
      );

    case "tours":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow">
            <InputField
              icon={<FaCalendarAlt className="w-5 h-5" />}
              placeholder="Booking Date"
            />
            <InputField
              icon={<FaMapMarkerAlt className="w-5 h-5" />}
              placeholder="Choose Location"
            />
            <SearchButton />
          </div>
        );

      case "transportation":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow">
            <InputField
              icon={<FaCalendarAlt className="w-5 h-5" />}
              placeholder="Booking Date"
            />
            <InputField
              icon={<FaMapMarkerAlt className="w-5 h-5" />}
              placeholder="Pick-up Location"
            />
            <SearchButton />
          </div>
        );

      case "meetings":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow">
            <InputField
              icon={<FaCalendarAlt className="w-5 h-5" />}
              placeholder="Event Date"
            />
            <InputField
              icon={<FaMapMarkerAlt className="w-5 h-5" />}
              placeholder="Meeting Location"
            />
            <SearchButton />
          </div>
        );

      case "travel":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow">
            <InputField
              icon={<FaCalendarAlt className="w-5 h-5" />}
              placeholder="Travel Date"
            />
            <InputField
              icon={<FaMapMarkerAlt className="w-5 h-5" />}
              placeholder="Destination"
            />
            <SearchButton />
          </div>
        );

      case "nosyBee":
        return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-white rounded-lg shadow text-base text-[#757575]">
            <InputField
              icon={<FaCalendarAlt className="w-5 h-5" />}
              placeholder="Check-in"
            />
            <InputField
              icon={<FaCalendarAlt className="w-5 h-5" />}
              placeholder="Check-out"
            />
            <InputField
              icon={<FaUmbrellaBeach className="w-5 h-5" />}
              placeholder="0 Night(s)"
            />
            <InputField
              icon={<FaUser className="w-5 h-5" />}
              placeholder="No. of Guests"
            />
            <SearchButton />
          </div>
        );
    default:
      return null;
  }
}
