'use client';

import React, { FC, useState, useRef, useEffect } from "react";
import * as dateFns from "date-fns";
import { de } from "date-fns/locale";
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  initialDate?: Date;
  onUpdate?: (date: Date) => void;
}

const SimpleDatePicker: FC<Props> = ({ initialDate, onUpdate }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate ?? new Date());
  const [currCalendar, setCurrCalendar] = useState<Array<number | null>>([]);
  const [currMonth, setCurrMonth] = useState<number>(new Date().getMonth());
  const [currYear, setCurrYear] = useState<number>(new Date().getFullYear());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
    month: number;
    year: number;
  }) => {
    const startOfMonth = dateFns.startOfMonth(new Date(year, month));
    const endOfMonth = dateFns.endOfMonth(new Date(year, month));
    const startDay = startOfMonth.getDay();
    const daysInMonth = dateFns.getDaysInMonth(startOfMonth);
    const days = [...Array(daysInMonth).keys()].map((v) => v + 1);
    const calendar = [...Array(42).keys()].map((v) => {
      if (v < startDay) {
        return null;
      }
      if (v > daysInMonth + startDay - 1) {
        return null;
      }
      return days[v - startDay];
    });
    return calendar;
  };

  useEffect(() => {
    const _currCalendar = generateCalendar({
      month: new Date(currYear, currMonth).getMonth(),
      year: new Date(currYear, currMonth).getFullYear(),
    });
    setCurrCalendar(_currCalendar);
  }, [currMonth, currYear]);

  useEffect(() => {
    onUpdate?.(selectedDate);
  }, [selectedDate, onUpdate]);

  const days: string[] = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  const handleTodayClick = () => {
    const today = new Date();
    setSelectedDate(today)
    // Überprüfe, ob das aktuelle Monat und Jahr bereits angezeigt werden
    if (today.getMonth() !== currMonth || today.getFullYear() !== currYear) {
      // Wechsle zum aktuellen Monat und Jahr
      setCurrMonth(today.getMonth());
      setCurrYear(today.getFullYear());
    }
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCalendarClose = (event: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleCalendarClose);
  //   return () => {
  //     document.removeEventListener("mousedown", handleCalendarClose);
  //   };
  // }, []);

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
    onUpdate?.(selectedDate);
    closeModal();
  };

  return (
    <div className="relative">
      <input
        className="peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full min-w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Datum auswählen"
        onFocus={openModal} // Open modal on input focus
        readOnly
        value={dateFns.format(selectedDate, "dd.MM.yyyy", { locale: de })} // Use selected date
      />
      <CalendarDaysIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-gray-200" />
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
                        });
                        setCurrMonth(d.getMonth());
                        setCurrYear(d.getFullYear());
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
                        });
                        setCurrMonth(d.getMonth());
                        setCurrYear(d.getFullYear());
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
                        className={`rounded-lg border dark:border-zinc-600 flex min-w-full p-2 justify-center hover:bg-blue-700 dark:hover:bg-zinc-500 hover:text-white dark:hover:text-black ${
                          dateFns.isSameDay(new Date(currYear, currMonth, v), selectedDate)
                            ? "bg-blue-700 dark:bg-zinc-500 text-white dark:text-black"
                            : ""
                        } ${
                          dateFns.isSameDay(new Date(currYear, currMonth, v), new Date())
                            ? "ring-blue-400 dark:ring-cyan-600 ring-2"
                            : ""
                        }`}
                        onClick={() => handleDateClick(new Date(currYear, currMonth, v))}
                      >
                        {v}
                      </button>
                    ) : (
                      <span key={i}></span>
                    )
                  )}
                </div>

                {/* Anzeige des ausgewählten Datums */}
                {/* <div className="flex justify-center my-3 text-sm">
                  {selectedDate && (
                    <span>
                      {dateFns.format(selectedDate, "dd. MMMM yyyy", { locale: de })}
                    </span>
                  )}
                </div> */}

                <div className="flex justify-start gap-2 mx-3">
                  {/* Button "Heute" */}
                  <button
                    type="button"
                    className="my-4 px-4 py-2 rounded-lg border border-gray-400 dark:border-zinc-500 bg-gray-300 dark:bg-zinc-600 hover:bg-gray-400 dark:hover:bg-zinc-700 drop-shadow-sm"
                    onClick={handleTodayClick}
                  >
                    Heute
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

export default SimpleDatePicker;