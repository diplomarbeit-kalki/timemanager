'use client';

import React, { FC, useEffect, useState, useRef } from "react";
import * as dateFns from "date-fns";
import { de } from "date-fns/locale";
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface Props {
  initialRange?: DateRange;
  onUpdate?: (dateRange: DateRange) => void;
}

const DateRangePicker: FC<Props> = ({ initialRange, onUpdate }) => {
  const [currCalendar, setCurrCalendar] = useState<Array<number | null>>([]);
  const [currMonth, setCurrMonth] = useState<number>(new Date().getMonth());
  const [currYear, setCurrYear] = useState<number>(new Date().getFullYear());
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: initialRange?.startDate ?? new Date(),
    endDate: initialRange?.endDate ?? dateFns.add(new Date(), { days: 20 }),
  });

  const calendarRef = useRef<HTMLDivElement>(null);

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
      onUpdate?.(dateRange);
      // Schließe den Kalender, wenn ein Start- und Enddatum ausgewählt wurden
      setIsCalendarOpen(false);
      // Setze den Wert des Eingabefelds auf den ausgewählten Zeitraum
      setInputValue(`${dateFns.format(dateRange.startDate, "dd.MM.yyyy", { locale: de })} - ${dateFns.format(dateRange.endDate, "dd.MM.yyyy", { locale: de })}`);
    }
  }, [dateRange, onUpdate])

  const days: string[] = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]

  const handleThisWeekClick = () => {
    const today = new Date();
    const startOfWeek = dateFns.startOfWeek(today);
    const endOfWeek = dateFns.endOfWeek(today);
    setDateRange({
      startDate: startOfWeek,
      endDate: endOfWeek,
    });
    // Überprüfe, ob das aktuelle Monat und Jahr bereits angezeigt werden
    if (today.getMonth() !== currMonth || today.getFullYear() !== currYear) {
      // Wechsle zum aktuellen Monat und Jahr
      setCurrMonth(today.getMonth());
      setCurrYear(today.getFullYear());
    }
  };

  const handleThisMonthClick = () => {
    const today = new Date();
    const startOfMonth = dateFns.startOfMonth(today);
    const endOfMonth = dateFns.endOfMonth(today);
    setDateRange({
      startDate: startOfMonth,
      endDate: endOfMonth,
    });
    // Überprüfe, ob das aktuelle Monat und Jahr bereits angezeigt werden
    if (today.getMonth() !== currMonth || today.getFullYear() !== currYear) {
      // Wechsle zum aktuellen Monat und Jahr
      setCurrMonth(today.getMonth());
      setCurrYear(today.getFullYear());
    }
  };
  

  const handleInputClick = () => {
    setIsCalendarOpen(true);
  };

  const handleCalendarClose = (event: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
      setIsCalendarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCalendarClose);
    return () => {
      document.removeEventListener("mousedown", handleCalendarClose);
    };
  }, []);

  // Open modal on small and medium screens
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle confirmation button click
  const handleConfirm = () => {
    onUpdate?.(dateRange);
    closeModal();
  };

  return (
    <div className="relative flex flex-col">
      <div className="relative">
        <input
          className="peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full min-w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Arbeitszeitraum auswählen"
          onFocus={openModal} // Open modal on input focus
          readOnly
          value={inputValue} // Use input value
        />
        <CalendarDaysIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-gray-200" />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 dark:bg-gray-600 bg-opacity-50 dark:bg-opacity-50">
          <div className="bg-white dark:bg-zinc-900 w-full md:max-w-lg p-6 rounded-lg shadow-lg">
            {/* Calendar content */}
            <div ref={calendarRef}>
            <div className=" min-w-[10rem] p-3 rounded-lg bg-white dark:bg-zinc-900 flex flex-col">
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
                      <ChevronLeftIcon className="w-4 h-4"/>
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
                      <ChevronRightIcon className="w-4 h-4"/>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 p-3 gap-2 mt-3">
                  {days.map((v, i) => (
                    <div key={i} className="text-center min-w-full text-gray-500 dark:text-gray-300">
                      {v}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 p-3 gap-1 md:gap-1 lg:gap-2">
                  {currCalendar.map((v, i) =>
                    v ? (
                      <button
                        type="button"
                        key={i}
                        className={`rounded-lg border dark:border-zinc-600 flex min-w-full p-2 justify-center hover:bg-blue-700 dark:hover:bg-zinc-400 hover:text-white dark:hover:text-black ${
                          dateFns.isSameDay(
                            new Date(currYear, currMonth, v),
                            dateRange.startDate!
                          )
                            ? "bg-blue-700 dark:bg-zinc-400 text-white dark:text-black"
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
                            ? "bg-blue-700 dark:bg-zinc-400 text-white dark:text-black"
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
                {/* <div className="flex justify-center my-3 text-sm">
                  {dateRange.startDate && dateRange.endDate && (
                    <span>
                      {dateFns.format(dateRange.startDate, "dd. MMMM yyyy", { locale: de })} -{" "}
                      {dateFns.format(dateRange.endDate, "dd. MMMM yyyy", { locale: de })}
                    </span>
                  )}
                </div> */}
                
                <div className="flex justify-between gap-2 mx-3">
                  {/* Button "Heute" */}
                  <button
                    type="button"
                    className="mt-3 px-4 py-2 rounded-lg border border-gray-400 dark:border-zinc-500 bg-gray-300 dark:bg-zinc-600 hover:bg-gray-400 dark:hover:bg-zinc-700 drop-shadow-sm"
                    onClick={handleThisWeekClick}
                  >
                    Diese Woche
                  </button>
                  {/* Button "Dieses Monat" */}
                  <button
                    type="button"
                    className="mt-3 px-4 rounded-lg border border-gray-400 dark:border-zinc-500 bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400 dark:hover:bg-zinc-800 drop-shadow-sm"
                    onClick={handleThisMonthClick}
                  >
                    Dieses Monat
                  </button>
                </div>
              </div>
            </div>
            {/* Confirmation button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 text-white text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Zurück
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 ml-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Bestätigen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker
