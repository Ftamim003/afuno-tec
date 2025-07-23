import Image from "next/image";
import { Category } from "./BestDeals";

const categories = [
  { key: "hotels", label: "HOTELS", icon: "/bed.png" },
  { key: "activities", label: "ACTIVITIES", icon: "/boat.png" },
  { key: "tours", label: "TOURS", icon: "/tours.png" },
  { key: "transportation", label: "TRANSPORTATION", icon: "/car.png" },
  { key: "meetings", label: "MEETING", icon: "/meeting.png" },
  { key: "travel", label: "TRAVEL", icon: "/travel.png" },
  { key: "nosyBee", label: "NOSY BE", icon: "/nosyBeeIcon.png" },
];

export default function CategoryTabs({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: Category;
  setSelectedCategory: (c: Category) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center mb-6">
      {categories.map(({ key, label, icon }) => (
        <div
          key={key}
          className="border-r-2 border-[#E6E6E6] flex items-center justify-center px-2 py-2 bg-white text-gray-700"
        >
          <Image alt={label} src={icon} height={24} width={24} />
          <button
            onClick={() => setSelectedCategory(key as Category)}
            className={`flex items-center gap-2 px-4 py-2 ${
              selectedCategory === key
                ? "font-bold text-black"
                : "bg-white text-gray-700"
            } hover:shadow`}
          >
            {label}
          </button>
        </div>
      ))}
    </div>
  );
}

