"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border border-red-300 shadow text-red-600 bg-white dark:border-red-500 dark:text-red-400 dark:bg-neutral-900"
    />
  )
}
