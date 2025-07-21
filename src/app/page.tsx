import Image from "next/image";
import FlashOffer from "./components/flashOffer/FlashOffer";
import HotelApartmentsCard from "./components/hotelApartmentsCard/HotelApartmentsCard";
import ToursAndEcoTourism from "./components/toursAndEcoTourism/TourAndEcoTourism";
import TravelDeals from "./components/travelDeals/TravelDeals";
import Transportation from "./components/transportation/Transportation";
import NosyBee from "./components/nosy/NosyBee";
import AmazingDeals from "./components/amazingDeals/AmazingDeals";
import AddtionalInformation from "./components/addtionalInformation/AddtionalInformation";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import GetInTouch from "./components/getInTouch/GetInTouch";
import ActivitiesDeals from "./components/activitiesDeals/ActivitiesDeals";
import BestDeals from "./components/bestDeals/BestDeals";


export default function Home() {
  return (
    <div>
      <BestDeals></BestDeals>
      <FlashOffer />

      <HotelApartmentsCard />
      <ActivitiesDeals></ActivitiesDeals>
      <ToursAndEcoTourism></ToursAndEcoTourism>
      <TravelDeals></TravelDeals>
      <Transportation></Transportation>
      <NosyBee></NosyBee>
      <AmazingDeals></AmazingDeals>
      <AddtionalInformation></AddtionalInformation>
      <WhyChooseUs></WhyChooseUs>
      <GetInTouch></GetInTouch>
      
    </div>
  );
}
