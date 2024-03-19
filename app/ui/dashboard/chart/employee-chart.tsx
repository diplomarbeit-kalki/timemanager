'use client';

import colors from "tailwindcss/colors";
import { ChartXAxisTime } from "./chart-x-axis-time";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../../fonts";
import { parseISO } from "date-fns";
import { useEffect, useState } from "react";

const chartData = [
  {
    label: "Durchschnittliche Arbeitsstunden",
    color: colors.green[600],
    values: [
      { x: parseISO("2024-03-01"), y: 8.00 },
      { x: parseISO("2024-03-02"), y: 7.15 },
      { x: parseISO("2024-03-03"), y: 9.00 },
      { x: parseISO("2024-03-04"), y: 8.10 },
      { x: parseISO("2024-03-05"), y: 8.00 },
      { x: parseISO("2024-03-06"), y: 8.49 },
      { x: parseISO("2024-03-07"), y: 7.15 },
      { x: parseISO("2024-03-08"), y: 6.30 },
      { x: parseISO("2024-03-09"), y: 7.30 },
      { x: parseISO("2024-03-10"), y: 6.00 },
      { x: parseISO("2024-03-11"), y: 5.30 },
      { x: parseISO("2024-03-12"), y: 8.20 },
      { x: parseISO("2024-03-13"), y: 4.21 },
      { x: parseISO("2024-03-14"), y: 5.20 },
      { x: parseISO("2024-03-15"), y: 6.40 },
      { x: parseISO("2024-03-16"), y: 9.10 },
      { x: parseISO("2024-03-17"), y: 8.15 },
      { x: parseISO("2024-03-18"), y: 8.50 },
      { x: parseISO("2024-03-19"), y: 8.76 },
      { x: parseISO("2024-03-20"), y: 7.79 },
      { x: parseISO("2024-03-21"), y: 6.36 },
      { x: parseISO("2024-03-22"), y: 8.44 },
      { x: parseISO("2024-03-23"), y: 7.98 },
      { x: parseISO("2024-03-24"), y: 8.04 },
      { x: parseISO("2024-03-25"), y: 9.70 },
      { x: parseISO("2024-03-26"), y: 8.60 },
      { x: parseISO("2024-03-27"), y: 7.92 },
      { x: parseISO("2024-03-28"), y: 8.12 },
      { x: parseISO("2024-03-29"), y: 7.40 },
      { x: parseISO("2024-03-30"), y: 6.30 },
      { x: parseISO("2024-03-31"), y: 9.77 },
    ]
  },
  {
    label: "Arbeitende Mitarbeiter",
    color: colors.red[500],
    values: [
      { x: parseISO("2024-03-01"), y: 30 },
      { x: parseISO("2024-03-02"), y: 25 },
      { x: parseISO("2024-03-03"), y: 45 },
      { x: parseISO("2024-03-04"), y: 25 },
      { x: parseISO("2024-03-05"), y: 33 },
      { x: parseISO("2024-03-06"), y: 17 },
      { x: parseISO("2024-03-07"), y: 29 },
      { x: parseISO("2024-03-08"), y: 32 },
      { x: parseISO("2024-03-09"), y: 42 },
      { x: parseISO("2024-03-10"), y: 22 },
      { x: parseISO("2024-03-11"), y: 25 },
      { x: parseISO("2024-03-12"), y: 33 },
      { x: parseISO("2024-03-13"), y: 31 },
      { x: parseISO("2024-03-14"), y: 25 },
      { x: parseISO("2024-03-15"), y: 27 },
      { x: parseISO("2024-03-16"), y: 22 },
      { x: parseISO("2024-03-17"), y: 29 },
      { x: parseISO("2024-03-18"), y: 26 },
      { x: parseISO("2024-03-19"), y: 29 },
      { x: parseISO("2024-03-20"), y: 18 },
      { x: parseISO("2024-03-21"), y: 34 },
      { x: parseISO("2024-03-22"), y: 38 },
      { x: parseISO("2024-03-23"), y: 39 },
      { x: parseISO("2024-03-24"), y: 23 },
      { x: parseISO("2024-03-25"), y: 21 },
      { x: parseISO("2024-03-26"), y: 18 },
      { x: parseISO("2024-03-27"), y: 36 },
      { x: parseISO("2024-03-28"), y: 45 },
      { x: parseISO("2024-03-29"), y: 25 },
      { x: parseISO("2024-03-30"), y: 18 },
      { x: parseISO("2024-03-31"), y: 29 },
    ]
  }
];

const EmployeeChart = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col max-w-full min-h-fit bg-gray-50 dark:bg-zinc-950 rounded-xl p-2">
      <div className="flex p-4 ">
         <ChartBarIcon className="h-5 w-5 text-gray-700 dark:text-white" /> 
         <h3 className="ml-2 text-sm font-medium">Mitarbeiterstatistik</h3>
      </div>
      <div className="w-full max-w-full rounded-md bg-white dark:bg-zinc-900 items-center justify-center">
        <div className="pt-2 px-2 h-96">
          <ChartXAxisTime key={windowSize.width} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeChart;