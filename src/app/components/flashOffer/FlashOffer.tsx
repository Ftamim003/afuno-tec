import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
// Type definition
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

// Triangle CSS for discount ribbon


function ResortCard({
  offer,
  darkOverlay,
  isWide = false,
}: {
  offer: FlashOfferType;
  darkOverlay?: boolean;
  isWide?: boolean;
}) {
  return (
    <div
      className={`relative  overflow-hidden shadow-md ${
        isWide ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative w-full h-96 md:h-[380px]">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover"
        />

        {/* 🔺 Triangle Discount Badge for ALL cards */}
        <div className="absolute top-0 right-0 z-10">
          <div className="relative w-[60px] h-[60px] overflow-hidden">
            {/* Triangle Background */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-red-600 border-l-transparent" />

            {/* Flat Text Positioned Inside */}
            <div className="absolute top-0 right-0 w-[60px] h-[60px] flex items-start justify-end pr-1 pt-1">
              <span className="text-[12px] text-white font-bold leading-4  text-center">
                {offer.discount} % <br />{" "}
                <span className="text-[12px] font-bold leading-4">Off</span>
              </span>
            </div>
          </div>
        </div>

        {/* ⬛ Bottom dark overlay for FIRST CARD ONLY */}
        {darkOverlay ? (
          <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 flex flex-col md:flex-row justify-between gap-2">
            <div className="w-full ">
              <h2 className="font-semibold leading-7 text-xl ">
                {offer.title}
              </h2>
              <p className="text-[16px] leading-5">{offer.description1}</p>
              <p className="text-[16px] leading-5">{offer.description2}</p>

              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex gap-1 items-center text-yellow-400">
                  {Array.from({ length: offer.rating }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="text-[16px] leading-5">
                  As From{" "}
                  <span className="text-red-500 font-bold text-[16px] leading-5">
                    Ar {offer.price}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          // 🟦 White card content for others
          <div className="bg-white pt-5 p-6 absolute bottom-0 left-0 w-full text-black">
            <h2 className="font-semibold text-xl leading-7 font-inter">
              {offer.title}
            </h2>
            <p className="text-[16px] leading-5">{offer.description1}</p>
            <p className="text-[16px] leading-5">{offer.description2}</p>
            <div className="flex items-center justify-between mt-2 w-full ">
              <div className="flex gap-1 items-center text-yellow-400 mt-2">
                {Array.from({ length: offer.rating }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="text-sm text-[16px] leading-5">
                As From{" "}
                <span className="text-red-500 font-bold">Ar {offer.price}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FlashOffer() {
  const flashOffers: FlashOfferType[] = [
    {
      id: 1,
      image: "/resort1.jpg",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 2,
      image: "/resort2.png",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 3,
      image: "/resort3.jpg",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 4,
      image: "/resort4.jpg",
      title: "Preskil Island Resort Mauritius",
      description1: "Half Board/ All Inclusive + Complimentary",
      description2: "Activites + Kids and Teens Club",
      price: 9000,
      rating: 4,
      discount: 28,
    },
    {
      id: 5,
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
    <section className="py-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-20 text-black">
        <FaBolt className="inline text-red-600 mr-1" />
        Flash <span className="text-[#5F9111]">Offer</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1320px] mx-auto px-4">
        {flashOffers.map((offer, index) => (
          <ResortCard
            key={offer.id}
            offer={offer}
            darkOverlay={index === 0}
            isWide={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
