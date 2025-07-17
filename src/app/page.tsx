import Image from "next/image";
import FlashOffer from "./components/flashOffer/FlashOffer";
import HotelApartmentsCard from "./components/hotelApartmentsCard/HotelApartmentsCard";
import ToursAndEcoTourism from "./components/toursAndEcoTourism/TourAndEcoTourism";
import TravelDeals from "./components/travelDeals/TravelDeals";
import Transportation from "./components/transportation/Transportation";
import NosyBee from "./components/nosy/NosyBee";


export default function Home() {
  return (
    <div>
      
      <FlashOffer />

      <HotelApartmentsCard />
      <ToursAndEcoTourism></ToursAndEcoTourism>
      <TravelDeals></TravelDeals>
      <Transportation></Transportation>
      <NosyBee></NosyBee>
    </div>
  );
}
