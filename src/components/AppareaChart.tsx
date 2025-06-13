"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

const chartData = [
  { month: "January", ngRate: 35, achievementRate: 43 },
  { month: "February", ngRate: 28, achievementRate: 66 },
  { month: "March", ngRate: 19, achievementRate: 51 },
  { month: "April", ngRate: 42, achievementRate: 60 },
  { month: "May", ngRate: 31, achievementRate: 62 },
  { month: "June", ngRate: 27, achievementRate: 65 },
];


const chartConfig = {
  ngRate: {
    label: "NG Rate",
    color: "#2563eb",
  },
  achievementRate: {
    label: "Achievement Rate",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function AppareaChart() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          Monthly NG and Achievement Rates
        </CardTitle>
        <CardDescription>
          January - June 2025
        </CardDescription>
      </CardHeader>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillNgRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillAchievementRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            dataKey="ngRate"
            type="natural"
            fill="url(#fillNgRate)"
            fillOpacity={0.4}
            stroke="#2563eb"
            stackId="a"
          />
          <Area
            dataKey="achievementRate"
            type="natural"
            fill="url(#fillAchievementRate)"
            fillOpacity={0.4}
            stroke="#60a5fa"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}