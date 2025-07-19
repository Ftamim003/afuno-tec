import Image from "next/image";

// 1. Define the data type
type DealImageType = {
  id: number;
  image: string;
  title: string;
  bgColor: string; // Tailwind color class
};

// 2. Sample image data
const dealImages: DealImageType[] = [
  {
    id: 1,
    image: "/amazingNosyBee.png",
    title: "Nosy Be",
    bgColor: "bg-[#017E3A]",
  },
  {
    id: 2,
    image: "/amazingToursAndEco.png",
    title: "Tours and Eco Tourism",
    bgColor: "bg-[#F3AF1B]",
  },
  {
    id: 3,
    image: "/amazingEvents.png",
    title: "Events",
    bgColor: "bg-[#1BA0E2]",
  },
];

export default function AmazingDeals() {
  return (
    <div className="max-w-[1320px] mx-auto my-8 px-4">
      <div className="mt-20 mb-12 flex items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black leading-11">
          Other Amazing <span className="text-[#5F9111]">Deals</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dealImages.map((deal) => (
          <div key={deal.id} className="relative w-full flex justify-center">
            <Image
              src={deal.image}
              alt={deal.title}
              width={424}
              height={424}
              className="w-full max-w-[424px] h-[424px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center ">
              <div
                className={`py-4 px-4 text-white text-center  text-2xl leading-9 font-bold w-full max-w-[424px]  ${deal.bgColor} py-2`}
              >
                {deal.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
