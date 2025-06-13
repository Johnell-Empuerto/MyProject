"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart showing machine downtime";

const chartData = [
  { month: "January", ADC: 10, C4: 8, C5: 12, C6: 15, KD: 5, Pallet: 3 },
  { month: "February", ADC: 12, C4: 10, C5: 14, C6: 18, KD: 7, Pallet: 4 },
  { month: "March", ADC: 8, C4: 7, C5: 10, C6: 12, KD: 4, Pallet: 2 },
  { month: "April", ADC: 15, C4: 12, C5: 16, C6: 20, KD: 8, Pallet: 5 },
  { month: "May", ADC: 9, C4: 6, C5: 11, C6: 14, KD: 3, Pallet: 3 },
  { month: "June", ADC: 11, C4: 9, C5: 13, C6: 16, KD: 6, Pallet: 4 },
];

const chartConfig = {
  ADC: {
    label: "ADC",
    color: "#93c5fd",
  },
  C4: {
    label: "C4",
    color: "#60a5fa",
  },
  C5: {
    label: "C5",
    color: "#3b82f6",
  },
  C6: {
    label: "C6",
    color: "#2563eb",
  },
  KD: {
    label: "KD",
    color: "#1d4ed8",
  },
  Pallet: {
    label: "Palletizing",
    color: "#1e40af",
  },
} satisfies ChartConfig;

export function RadarCharts() {
  return (
    <Card className="flex flex-col border-none h-full min-h-[400px] justify-between ">
      <CardHeader className="items-center pb-4">
        <CardTitle>Machine Downtime</CardTitle>
        <CardDescription>
          January - June 2025
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="ADC"
              fill="#93c5fd"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="C4"
              fill="#60a5fa"
              fillOpacity={0.5}
            />
            <Radar
              dataKey="C5"
              fill="#3b82f6"
              fillOpacity={0.4}
            />
            <Radar
              dataKey="C6"
              fill="#2563eb"
              fillOpacity={0.3}
            />
            <Radar
              dataKey="KD"
              fill="#1d4ed8"
              fillOpacity={0.2}
            />
            <Radar
              dataKey="Pallet"
              fill="#1e40af"
              fillOpacity={0.1}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
<CardFooter className="text-sm flex flex-col gap-1">
  <div className="flex items-center gap-2 font-medium text-green-600 py-0 px-0">
    <TrendingUp className="h-4 w-4" />
    <p className="text-[12px]">Sales increased by <span className="font-semibold">5.2%</span> this month</p>
  </div>
  <div className="text-muted-foreground text-center">
    Based on total sales from January to June 2024
  </div>
</CardFooter>
    </Card>
  );
}