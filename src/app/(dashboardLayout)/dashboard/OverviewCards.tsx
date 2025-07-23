import { Card, CardContent } from "@/components/ui/card";

export default function OverviewCards() {
  const items = [
    { prefix: "Today's", label: "Check-in", value: 23 },
    { prefix: "Today's", label: "Check-out", value: 13 },
    { prefix: "Total", label: "In Hotel", value: 60 },
    { prefix: "Total", label: "Available Room", value: 10 },
    { prefix: "Total", label: "Booking Room", value: 90 },
  ];

  return (
    <div className="md:h-32">
      <h2 className="text-xl pl-6 p-3 rounded-t-xl bg-white font-semibold text-gray-800">
        Overview
      </h2>
      <div className="flex flex-wrap w-full bg-white pl-2 py-4 rounded-b-xl ">
        {items.map((item, index) => (
          <Card
            key={index}
            className="shadow-none border-none py-2 rounded-lg w-[200px]"
          >
            <CardContent className="pl-4 ">
              {/* Top Label */}
              <p className="text-[14px] text-gray-400">{item.prefix}</p>

              {/* Bottom Title + Value */}
              <div className="flex items-center justify-between pr-3">
                <p className="text-base font-medium text-[#5D6679]">
                  {item.label}
                </p>
                <p className="text-[22px] font-bold text-[#1366D9]">
                  {item.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
