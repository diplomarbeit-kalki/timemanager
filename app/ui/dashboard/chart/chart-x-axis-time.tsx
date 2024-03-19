'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import { de } from 'date-fns/locale'

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// const test = (a) => {
//   console.log(a);
// };

export const options: Partial<any> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false
  },
  scales: {
    x: {
      type: "time",
      time: {
        parser: "YYYY-MM-DD", // Format des Datums
        unit: "day", // Einheit für die Zeitachse
        displayFormats: {
          day: "dd.MM.yyyy", // Anzeigeformat für Tage
        },
      },
      adapters: {
        date: {
          locale: de
        }
      },
      ticks: {
        major: {
          enabled: true,
          fontStyle: "semibold"
        },
        autoSkip: true,
        autoSkipPadding: 50,
        maxRotation: 60,
        sampleSize: 75,
      }
    },
    y: { }
  }
};

interface ChartDataPoint {
  data: {
    label: string;
    color: string;
    values: {
      x: string | number | Date;
      y: string | number;
    }[];
  }[];
}

export const ChartXAxisTime = ({ data }: ChartDataPoint) => {
  const datasets = data.map((set) => {
    return {
      label: set.label,
      data: set.values,
      pointRadius: 0,
      borderColor: set.color,
      backgroundColor: set.color
    };
});

  return <Line options={options} data={{ datasets }} />;
};
