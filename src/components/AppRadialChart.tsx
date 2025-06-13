"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with a label"

const chartData = [
  { product: "ADC", sales: 275, fill: "#93c5fd" },
  { product: "C4", sales: 200, fill: "#60a5fa" },
  { product: "C5", sales: 187, fill: "#3b82f6" },
  { product: "C6", sales: 173, fill: "#2563eb" },
  { product: "KD", sales: 92, fill: "#1d4ed8" },
  { product: "Pallet", sales: 90, fill: "#1e40af" },
]


const chartConfig = {
  ADC: {
    label: "ADC",
    color: "#93c5fd",
  },
  C4: {
    label: "C4",
    color: "#93c5fd",
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
} satisfies ChartConfig

export function AppRadialChart() {
  return (
    <Card className="flex flex-col border-none h-full min-h-[400px] justify-between ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Monthly Sales Distribution</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={126}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="product" />}
            />

            <RadialBar dataKey="sales" background>
              <LabelList
                position="insideStart"
                dataKey="product"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
<CardFooter className="text-sm flex flex-col gap-1">
  <div className="flex items-center gap-2 font-medium text-green-600">
    <TrendingUp className="h-4 w-4" />
    Sales increased by <span className="font-semibold">5.2%</span> this month
  </div>
  <div className="text-muted-foreground text-center">
    Based on total sales from January to June 2024
  </div>
</CardFooter>
    </Card>
  )
}
