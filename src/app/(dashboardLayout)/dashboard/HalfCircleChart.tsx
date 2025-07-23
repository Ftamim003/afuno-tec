"use client";

import { Card } from "@/components/ui/card";
import React from "react";

type HalfCircleChartProps = {
  value: number; // percentage from 0 to 100
};

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  // Adjust angle to start from 180 degrees for left side to 0 degrees for right side
  const angleInRadians = ((angleInDegrees + 180) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

export default function HalfCircleChart({ value }: HalfCircleChartProps) {
  const radius = 110;
  const stroke = 20;
  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <Card className="mt-5 md:mt-0 p-6 w-full md:w-2/5 rounded-2xl ">
        <h2 className="text-xl text-[#383E49] font-semibold">Floor Status</h2>
      <div className="flex justify-center gap-7 flex-wrap">
        
        {/* SVG Chart */}
        <svg width={radius * 2} height={radius + stroke}>
          {/* Background path */}
          <path
            d={describeArc(radius, radius, normalizedRadius, 0, 180)}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={stroke}
            strokeLinecap="round"
          />

          {/* Progress path */}
          <path
            d={describeArc(
              radius,
              radius,
              normalizedRadius,
              0,
              (value / 100) * 180
            )}
            fill="none"
            stroke="#3B82F6"
            strokeWidth={stroke}
            strokeLinecap="round"
          />

          {/* Percentage label below */}
          <text
            x="50%"
            y={radius + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="26"
            fill="#111827"
            fontWeight="bold"
          >
            {value}%
          </text>
        </svg>

        {/* Legends */}
        <div className="flex flex-col gap-3 pl-4 mt- lg:mt-0 ">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-sm text-gray-700">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-300 rounded-full" />
            <span className="text-sm text-gray-700">Yet to Complete</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
