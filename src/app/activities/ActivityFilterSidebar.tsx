// src/components/ActivityFilterSidebar.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // adjust path if needed

const ActivityFilterSidebar = () => {
  return (
     <>
    
    <aside className="w-full lg:w-72 bg-white border">
         <div>
        <h2 className="bg-[#22A628] mt-9 py-4 px-6 text-white">Filter By</h2>
     </div>
      <Accordion
  type="multiple"
  defaultValue={[
    "type",
    "category",
    "popular",
    "budget",
    "meal",
    "duration",
  ]}
  className="w-full space-y-3 p-4 "
>
        <AccordionItem value="type">
          <AccordionTrigger>Activity Type</AccordionTrigger>
          <AccordionContent>
            {["Water & Sea", "Mountains", "Hotels day packages", "Land","Park visit"].map((item) => (
              <div key={item} className="flex items-center gap-2 py-1">
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="category">
          <AccordionTrigger>Activity Category</AccordionTrigger>
          <AccordionContent>
            {[
              "Adventure",
              "Family",
              "Group",
              "Romantic",
              "Team Building",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 py-1">
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="popular">
          <AccordionTrigger>Most Popular</AccordionTrigger>
          <AccordionContent>
            {["Special Offers", "Catamaran Cruises", "Dolphins & whales", "Evening activities","Family Friendly","Fishing","Flight Trip","Hike & Nature Trips","lle aux Cerfs","Island Trips","Kids Parks","Nessee & Submarine","Parasailling","Park Entrance Tickets","Quad Biking","Speedboats","Underwater Sea Walk","Water Sports","Flight Trips", "Golf"].map((item) => (
              <div key={item} className="flex items-center gap-2 py-1">
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="budget">
          <AccordionTrigger>Your Budget</AccordionTrigger>
          <AccordionContent>
            {[
              "Ar 0 - 200,000",
              "Ar 200,001 - 500,000",
              "Ar 500,001 - 800,000",
              "Ar 800,001 - 1,200,000",
              "Ar 1,200,001+",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 py-1">
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="meal">
          <AccordionTrigger>Food & Bevarages </AccordionTrigger>
          <AccordionContent>
            {["Snacks & Drinks", "Lunch Only", "Lunch & Drinks", "All Iclusive"].map((item) => (
              <div key={item} className="flex items-center gap-2 py-1">
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="duration">
          <AccordionTrigger>Duration</AccordionTrigger>
          <AccordionContent>
            {["0-2 hours", "2-4 hours", "4-6 hours", "6-8 hours","8+ hours"].map((item) => (
              <div key={item} className="flex items-center gap-2 py-1">
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
    </>
  );
};

export default ActivityFilterSidebar;
