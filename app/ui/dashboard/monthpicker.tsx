import React, { FC, useState } from 'react';
import * as dateFns from "date-fns";
import { de } from "date-fns/locale";

interface Props {
  onSelectMonth: (month: string) => void;
  onSelectYear: (year: string) => void;
}

const currentYear = new Date().getFullYear();

const MonthPicker: FC<Props> = ({ onSelectMonth, onSelectYear }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const formattedMonth = dateFns.format(selectedMonth, "MM");
  const formattedYear = selectedYear.toString();
  const currentParams = new URLSearchParams(window.location.search);
  currentParams.set('month', formattedMonth);
  currentParams.set('year', formattedYear);
  const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
  window.history.pushState({}, '', newUrl);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(e.target.value);
    if (!isNaN(month)) {
      setSelectedMonth(new Date(selectedMonth.getFullYear(), month - 1));
      updateSelectedMonth(selectedMonth.getFullYear(), month);
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yearInput = e.target.value;
    if (yearInput.length <= 4) {
      const year = parseInt(yearInput);
      if (!isNaN(year)) {
        setSelectedYear(year);
        updateSelectedMonth(year, selectedMonth.getMonth() + 1);
      }
    } else {
      setSelectedYear(currentYear);
      updateSelectedMonth(currentYear, selectedMonth.getMonth() + 1);
    }
  };

  const updateSelectedMonth = (year: number, month: number) => {
    const selectedMonthFormatted = dateFns.format(new Date(year, month - 1), 'MMMM yyyy', { locale: de });
    onSelectMonth(selectedMonthFormatted);
    onSelectYear(year.toString());
  };

  return (
    <div className="flex justify-start">
      <div className="text-gray-500 dark:text-gray-300">
        <div className="flex items-center gap-4">
          <div className='flex flex-col'>
            <span className='text-md mb-1 block text-md font-medium text-black dark:text-white'>Monat</span>
            <select
              className="peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-500 py-2 px-2 text-sm text-center outline-2"
              value={selectedMonth.getMonth() + 1}
              onChange={handleMonthChange}
            >
              <input type="hidden" name="month" value={selectedMonth.getMonth() + 1} />
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {dateFns.format(new Date(selectedMonth.getFullYear(), i), 'MMMM', { locale: de })}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col'>
            <span className='text-md mb-1 block text-md font-medium text-black dark:text-white'>Jahr</span>
            <input
              name="year"
              type="number"
              className="peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-500 py-2 px-2 w-16 text-sm text-center outline-2"
              placeholder={`${currentYear}`}
              value={selectedYear}
              min={1900}
              max={currentYear}
              onChange={handleYearChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthPicker;
