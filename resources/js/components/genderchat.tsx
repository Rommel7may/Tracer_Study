"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

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

/* ---------- DATA & CONFIG ---------- */

const chartData = [
  { label: "Male",    value: 275, fill: "hsl(0, 90%, 60%)" },
  { label: "Female",  value: 200, fill: "hsl(0, 90%, 70%)"  },
  { label: "Others",  value: 187, fill: "hsl(0, 90%, 80%)" },
];

const chartConfig = {
  value:  { label: "Visitors" },
  Male:   { label: "Male",   color: "hsl(0, 90%, 60%)" },
  Female: { label: "Female", color: "hsl(0, 90%, 70%)" },
  Others: { label: "Others", color: "hsl(0, 90%, 80%)" },
} satisfies ChartConfig;

/* ---------- COMPONENT ---------- */

export function Gender() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gender</CardTitle>
        <CardDescription>January – June 2025</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="label"
                innerRadius="50%"
                outerRadius="85%"
                strokeWidth={0}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2 % this month
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
