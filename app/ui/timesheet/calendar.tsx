'use client';

import { FC, useEffect, useState } from "react"
import * as dateFns from "date-fns"
import { de } from "date-fns/locale"
import "tailwindcss/tailwind.css"

interface DateRange {
  startDate: Date | null
  endDate: Date | null
}

interface Props {
  initialRange?: DateRange
  onUpdate?: (dateRange: DateRange) => void
}

const DateRangePicker: FC<Props> = ({ initialRange, onUpdate }) => {
  const [currCalendar, setCurrCalendar] = useState<Array<number | null>>([])
  const [currMonth, setCurrMonth] = useState<number>(new Date().getMonth())
  const [currYear, setCurrYear] = useState<number>(new Date().getFullYear())

  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: initialRange?.startDate ?? new Date(),
    endDate: initialRange?.endDate ?? dateFns.add(new Date(), { days: 20 }),
  })

  const isBetween = (
    date: Date,
    from: Date,
    to: Date,
    inclusivity: "()" | "[]" | "(]" | "[)" = "()"
  ) => {
    if (!["()", "[]", "(]", "[)"].includes(inclusivity)) {
      throw new Error("Inclusivity parameter must be one of (), [], (], [)")
    }

    const isBeforeEqual = inclusivity[0] === "[",
      isAfterEqual = inclusivity[1] === "]"

    return (
      (isBeforeEqual
        ? dateFns.isEqual(from, date) || dateFns.isBefore(from, date)
        : dateFns.isBefore(from, date)) &&
      (isAfterEqual
        ? dateFns.isEqual(to, date) || dateFns.isAfter(to, date)
        : dateFns.isAfter(to, date))
    )
  }

  const generateCalendar = ({
    month,
    year,
  }: {
    month: number
    year: number
  }) => {
    const startOfMonth = dateFns.startOfMonth(new Date(year, month))
    const endOfMonth = dateFns.endOfMonth(new Date(year, month))
    const startDay = startOfMonth.getDay()
    const daysInMonth = dateFns.getDaysInMonth(startOfMonth)
    const days = [...Array(daysInMonth).keys()].map((v) => v + 1)
    const calendar = [...Array(42).keys()].map((v) => {
      if (v < startDay) {
        return null
      }
      if (v > daysInMonth + startDay - 1) {
        return null
      }
      return days[v - startDay]
    })
    return calendar
  }

  useEffect(() => {
    const _currCalendar = generateCalendar({
      month: new Date(currYear, currMonth).getMonth(),
      year: new Date(currYear, currMonth).getFullYear(),
    })
    setCurrCalendar(_currCalendar)
  }, [currMonth, currYear])

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      onUpdate?.(dateRange)
    }
  }, [dateRange, onUpdate])

  const days: string[] = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]

  const handleTodayClick = () => {
    setDateRange({
      startDate: new Date(),
      endDate: new Date(),
    });
  };

  const handleThisMonthClick = () => {
    const startOfMonth = dateFns.startOfMonth(new Date());
    const endOfMonth = dateFns.endOfMonth(new Date());
    setDateRange({
      startDate: startOfMonth,
      endDate: endOfMonth,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="drop-shadow-sm shadow-sm min-w-[10rem] p-3 rounded-lg border dark:border-zinc-700 dark:bg-zinc-900 flex flex-col">
        <div className="flex justify-between items-center rounded-lg border dark:border-zinc-700 p-3">
          <h3 className="text-lg">
            {dateFns.format(new Date(currYear, currMonth), "LLLL", { locale: de })}{" "}
            {new Date(currYear, currMonth).getFullYear()}
          </h3>
          <div className="flex gap-x-2 items-center">
            <button
              type="button"
              className="p-2 rounded-lg border border-gray-400 dark:border-zinc-700 bg-gray-300 dark:bg-zinc-800 hover:bg-gray-400 dark:hover:bg-zinc-900 drop-shadow-sm"
              onClick={() => {
                const d = dateFns.sub(new Date(currYear, currMonth), {
                  months: 1,
                })
                setCurrMonth(d.getMonth())
                setCurrYear(d.getFullYear())
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              type="button"
              className="p-2 rounded-lg border border-gray-400 dark:border-zinc-700 bg-gray-300 dark:bg-zinc-800 hover:bg-gray-400 dark:hover:bg-zinc-900 drop-shadow-sm"
              onClick={() => {
                const d = dateFns.add(new Date(currYear, currMonth), {
                  months: 1,
                })
                setCurrMonth(d.getMonth())
                setCurrYear(d.getFullYear())
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 p-3 gap-2 mt-3">
          {days.map((v, i) => (
            <div key={i} className="text-center w-12 text-gray-500 dark:text-gray-300">
              {v}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 p-3 gap-2">
          {currCalendar.map((v, i) =>
            v ? (
              <button
                type="button"
                key={i}
                className={`rounded-lg border dark:border-zinc-600 flex w-12 justify-center p-2 hover:bg-blue-700 dark:hover:bg-zinc-500 hover:text-white dark:hover:text-black ${
                  dateFns.isSameDay(
                    new Date(currYear, currMonth, v),
                    dateRange.startDate!
                  )
                    ? "bg-blue-700 dark:bg-zinc-500 text-white dark:text-black"
                    : ""
                } ${
                  dateFns.isSameDay(
                    new Date(currYear, currMonth, v),
                    new Date()
                  )
                    ? "ring-blue-400 dark:ring-cyan-600 ring-2"
                    : ""
                } ${
                  dateFns.isSameDay(
                    new Date(currYear, currMonth, v),
                    dateRange.endDate!
                  )
                    ? "bg-blue-700 dark:bg-zinc-500 text-white dark:text-black"
                    : ""
                } ${
                  isBetween(
                    new Date(currYear, currMonth, v),
                    dateRange.startDate!,
                    dateRange.endDate!,
                    "[]"
                  )
                    ? "bg-blue-200 dark:bg-zinc-700"
                    : ""
                }`}
                onClick={() => {
                  const clickedDate = new Date(currYear, currMonth, v);
                  
                  // Wenn kein Startdatum ausgewählt ist, wird das aktuelle Datum das Startdatum
                  if (!dateRange.startDate) {
                    setDateRange((d) => ({
                      ...d,
                      startDate: clickedDate,
                    }));
                  } 
                  // Wenn ein Startdatum, aber kein Enddatum ausgewählt ist
                  else if (dateRange.startDate && !dateRange.endDate) {
                    // Überprüfen, ob das ausgewählte Datum vor dem Startdatum liegt
                    if (dateFns.isBefore(clickedDate, dateRange.startDate)) {
                      // Umkehrung des Bereichs, das ausgewählte Datum wird das Startdatum und das aktuelle Startdatum wird das Enddatum
                      setDateRange((d) => ({
                        startDate: clickedDate,
                        endDate: dateRange.startDate,
                      }));
                    } else {
                      // Das ausgewählte Datum wird das Enddatum
                      setDateRange((d) => ({
                        ...d,
                        endDate: clickedDate,
                      }));
                    }
                  } 
                  // Wenn sowohl Start- als auch Enddatum ausgewählt sind
                  else if (dateRange.startDate && dateRange.endDate) {
                    // Das ausgewählte Datum wird das Startdatum und das Enddatum wird null
                    setDateRange({
                      startDate: clickedDate,
                      endDate: null,
                    });
                  }
                }}
              >
                {v}
              </button>
            ) : (
              <span key={i}></span>
            )
          )}
        </div>
        {/* Anzeige des ausgewählten Zeitraums */}
        <div className="flex justify-center my-3 text-sm">
          {dateRange.startDate && dateRange.endDate && (
            <span>
              {dateFns.format(dateRange.startDate, "dd. MMMM yyyy", { locale: de })} -{" "}
              {dateFns.format(dateRange.endDate, "dd. MMMM yyyy", { locale: de })}
            </span>
          )}
        </div>
        <div className="flex justify-between mx-3">
          {/* Button "Heute" */}
          <button
            type="button"
            className="mt-3 px-12 py-2 rounded-lg border border-gray-400 dark:border-zinc-500 bg-gray-300 dark:bg-zinc-600 hover:bg-gray-400 dark:hover:bg-zinc-700 drop-shadow-sm"
            onClick={handleTodayClick}
          >
            Heute
          </button>
          {/* Button "Dieses Monat" */}
          <button
            type="button"
            className="mt-3 px-12 rounded-lg border border-gray-400 dark:border-zinc-700 bg-gray-300 dark:bg-zinc-800 hover:bg-gray-400 dark:hover:bg-zinc-900 drop-shadow-sm"
            onClick={handleThisMonthClick}
          >
            Dieses Monat
          </button>
        </div>
      </div>
    </div>
  )
}

export default DateRangePicker
