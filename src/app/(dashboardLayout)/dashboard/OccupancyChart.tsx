import { Card, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "May", value: 90 },
  { name: "Jun", value: 75 },
  { name: "Jul", value: 45 },
  { name: "Aug", value: 100 },
  { name: "Sep", value: 95 },
  { name: "Oct", value: 70 },
  { name: "Nov", value: 80 },
  { name: "Dec", value: 85 },
  { name: "Jan", value: 92 },
  { name: "Feb", value: 90 },
];

export default function OccupancyChart() {
  return (
    <Card className="w-full h-80 md:w-3/5 rounded-2xl">
      <CardContent className="p-4 ">
        <div className="flex justify-between mb-2">
          <h3 className="font-semibold text-[#383E49] text-xl">Occupancy Statistics</h3>
          <span className="text-sm text-gray-500 border rounded-md p-2">📅 Monthly</span>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
