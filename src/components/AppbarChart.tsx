"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
//   CardContent,
  CardDescription,
  //   CardFooter,
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

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", plan: 186, actual: 80 },
  { month: "February", plan: 305, actual: 200 },
  { month: "March", plan: 237, actual: 120 },
  { month: "April", plan: 73, actual: 190 },
  { month: "May", plan: 209, actual: 130 },
  { month: "June", plan: 214, actual: 140 },
];

const chartConfig = {
  plan: {
    label: "Plan",
    color: "#2563eb",
  },
  actual: {
    label: "Actual",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function AppbarChart() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="text-lg font-medium ">
          Annual Production
        </CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>


        <ChartContainer config={chartConfig}  className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis tickLine={false} tickMargin={10} axisLine={false} />

            <ChartTooltip
              content={<ChartTooltipContent />}
            />

            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="plan" fill="#2563eb" radius={4} />
            <Bar dataKey="actual" fill="#60a5fa" radius={4} />
          </BarChart>
        </ChartContainer>

      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Production increased by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing planned vs. actual output for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
