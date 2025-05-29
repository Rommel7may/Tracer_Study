"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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

const chartData = [
  { course: "BSIT", responses: 10 },
  { course: "BSBA", responses: 20 },
  { course: "BSTM", responses: 40 },
  { course: "PSYCH", responses: 30 },
  { course: "BEED", responses: 20 },
  { course: "BSCE", responses: 10 },
]

const chartConfig = {
  responses: {
    label: "responses",
    color: "hsl(0 90% 60%)",
  },
} satisfies ChartConfig

export function Component() {
  const totalResponses = chartData.reduce((sum, entry) => sum + entry.responses, 130)
  const previousTotal = 130
  const trend = ((totalResponses - previousTotal) / previousTotal) * 100
  const trendMessage = `Responses up by ${trend.toFixed(1)}% this month`

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
      <Card className="shadow-md rounded-2xl border border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Responses by Program</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Aggregated alumni response data
          </CardDescription>
        </CardHeader>

        <CardContent className="px-2 pb-0">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              width={500}
              height={300}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="course"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 10)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="responses" fill={chartConfig.responses.color} radius={20}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex flex-col items-start gap-1 px-4 py-4 text-sm">
          <div className="flex items-center gap-2 font-semibold">
            {trendMessage}
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-muted-foreground">Showing all program data</div>
        </CardFooter>
      </Card>
    </div>
  )
}
