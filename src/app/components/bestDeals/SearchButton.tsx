import { FaSearch } from "react-icons/fa";

export default function SearchButton() {
  return (
    <button className="bg-[#1BA0E2] text-white py-2 hover:bg-blue-600 lg:w-32 lg:h-12">
      <span className="flex justify-center items-center gap-1">
        <FaSearch />
        SEARCH
      </span>
    </button>
  );
}

