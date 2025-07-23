"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useState } from "react";

type CalendarModalProps = {
  selected?: Date;
  setSelected: (date: Date) => void;
  setShowCalendar: (show: boolean) => void;
};

export default function CalendarModal({
  selected,
  setSelected,
  setShowCalendar,
}: CalendarModalProps) {
  const [month, setMonth] = useState(new Date());

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      setSelected(date);
      setShowCalendar(false); // ✅ Close on select
    }
  };

  return (
    <div className="absolute top-full left-0 z-50 bg-white rounded shadow-lg p-4">
      <div className="flex justify-between items-center mb-2 px-2">
        <span className="font-semibold text-gray-700">{month.getFullYear()}</span>
        <div className="flex gap-2">
          <button
            onClick={() =>
              setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1))
            }
            className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
          >
            Prev
          </button>
          <button
            onClick={() =>
              setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1))
            }
            className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
      </div>

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleSelect}
        month={month}
        onMonthChange={setMonth}
        numberOfMonths={2}
        fromMonth={new Date()}
        modifiersClassNames={{
          selected: "bg-blue-500 text-white",
          today: "border border-blue-500",
        }}
        className="text-gray-800 horizontal-calendar"
      />
    </div>
  );
}
