'use client';

import { DocumentTextIcon, ClockIcon, UserGroupIcon, ArrowDownTrayIcon, KeyIcon } from "@heroicons/react/24/outline";
import { fetchActualTimeSheetFromMonthAllPsnr, fetchTimeSheetFromMonthWithPsnr } from '@/app/lib/data/datafetching';
import { inter, lusitana } from "@/app/ui/fonts";
import { FC, useEffect, useState } from "react";
import { format } from "date-fns";
import de from "date-fns/locale/de"
import Link from "next/link";
import Selector from "@/app/ui/dashboard/selector";
import MonthPicker from "./monthpicker";

//   import { fetchCardData } from "@/app/lib/data";

//   const {
//     numberOfInvoices,
//     numberOfCustomers,
//     totalPaidInvoices,
//     totalPendingInvoices,
//   } = await fetch;

import { fetchCountTransponders, fetchCountActualWorkingEmployees } from '@/app/lib/data/datafetching';

const iconMap = {
  download: DocumentTextIcon,
  downloadOther: ClockIcon,
  working: UserGroupIcon,
  transponder: KeyIcon,
};

export default function CardWrapper() {
  const currentDate = new Date();
  const currentMonth = format(currentDate, 'MMMM', { locale: de });

  const [freeTransponders, setFreeTransponders] = useState(0);
  const [workingEmployees, setWorkingEmployees] = useState(0);

  useEffect(() => {
    // Beim Laden der Komponente die Anzahl der freien Transponder abrufen und setzen
    async function fetchFreeTranspondersCount() {
      const count = await fetchCountTransponders();
      setFreeTransponders(count);
    }
    async function fetchCountWorkingEmployees() {
      const count = await fetchCountActualWorkingEmployees();
      setWorkingEmployees(count);
    }

    fetchFreeTranspondersCount();
    fetchCountWorkingEmployees();
  }, []);


  return (
    <>
      <DownloadPdfCard title="Arbeitsbericht Monat" value={`Bericht ${currentMonth}`} type="download" isFirstCard />
      <DownloadOtherPdfCard title="Anderer Arbeitsbericht" value={"Nach Bericht suchen"} type="downloadOther" />
      <Card title="Arbeitende Mitarbeiter" value={workingEmployees} type="working" linkTo="/dashboard/employeelist" />
      <Card title="Freie Transponder" value={freeTransponders} type="transponder" linkTo="/dashboard/transponder" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
  linkTo
}: {
  title: string;
  value: number | string;
  type: "working" | "transponder";
  linkTo?: string;
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 dark:bg-zinc-950 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700 dark:text-white" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      {linkTo && (
        <Link href={linkTo}>
          <p className={`${lusitana.className} truncate rounded-xl bg-white dark:bg-zinc-900 px-4 py-10 text-center text-2xl cursor-pointer`}>
            {value}
          </p>
        </Link>
      )}
      {!linkTo && (
        <p className={`${lusitana.className} truncate rounded-xl bg-white dark:bg-zinc-900 px-4 py-10 text-center text-2xl`}>
          {value}
        </p>
      )}
    </div>
  );
}

export function DownloadPdfCard({
  title,
  value,
  type,
  isFirstCard = false,
}: {
  title: string;
  value: number | string;
  type: "download";
  isFirstCard?: boolean;
}) {
  const Icon = iconMap[type];
  const [isHovered, setIsHovered] = useState(false);
  const fetchTimeSheetFromMonthAllPsnrCons = fetchActualTimeSheetFromMonthAllPsnr.bind(null);

  return (
    <div className="rounded-xl bg-gray-50 dark:bg-zinc-950 p-2 shadow-sm">
      <div
        className={`flex p-4 ${isFirstCard ? 'cursor-auto' : ''}`}>
        {Icon ? <Icon className="h-5 w-5 text-gray-700 dark:text-white" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <div
        className={`${lusitana.className}
          truncate flex flex-row justify-between gap-4 rounded-xl bg-white dark:bg-zinc-900 px-4 py-10 text-center text-2xl`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {value}

        {isFirstCard && type === 'download' && isHovered && (
          <form action={fetchTimeSheetFromMonthAllPsnrCons}>
            <button
              className="ml-2 flex items-center text-lg font-large justify-center rounded-md bg-blue-600 dark:bg-cyan-700 text-white p-2 cursor-pointer"
              onClick={() => isFirstCard && type === 'download' && console.log('Download clicked')}
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function DownloadOtherPdfCard({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "downloadOther";
}) {
  const Icon = iconMap[type];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNameClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleSelectMonth = (selectedMonth: React.SetStateAction<string>) => {
    setSelectedMonth(selectedMonth);
  };

  const handleSelectYear = (selectedYear: React.SetStateAction<string>) => {
    setSelectedYear(selectedYear);
  };

  const fetchTimeSheetFromMonthWithPsnrCons = fetchTimeSheetFromMonthWithPsnr.bind(null);


  return (
    <>
      <div className="rounded-xl bg-gray-50 dark:bg-zinc-950 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700 dark:text-white" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <div
          className={`${lusitana.className} truncate rounded-xl bg-white dark:bg-zinc-900 px-4 py-10 text-start text-2xl cursor-pointer`}
          onClick={handleNameClick}
        >
          {value}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-lg rounded-md bg-white dark:bg-zinc-950">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Mitarbeiter auswählen</h3>
              <div className="py-3">
                <p className="text-lg text-gray-900 dark:text-gray-400 mt-4 mb-2">Wählen Sie einen Mitarbeiter aus, dessen Monatsbericht angezeigt werden soll.</p>
                <form action={fetchTimeSheetFromMonthWithPsnrCons}>
                  <div className="flex flex-col gap-8 mt-4 text-start">
                    <div>
                      <label htmlFor="firstname" className="mb-1 block text-md font-medium">
                        Mitarbeiter
                      </label>
                      <Selector />
                    </div>

                    <div>
                      {/* <label htmlFor="firstname" className="mb-2 block text-md font-medium">
                              Monat
                            </label> */}
                      <MonthPicker onSelectMonth={handleSelectMonth} onSelectYear={handleSelectYear} />
                    </div>


                  </div>
                  <div className="flex flex-row justify-end mt-8 gap-4">
                    <Link
                      href="/dashboard"
                      className="px-4 py-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 text-white text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                      onClick={handleCloseModal}
                    >
                      Zurück
                    </Link>
                    <button className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-gray-300 " type="submit">
                      <span>
                        Herunterladen
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}





// export function Card() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
//       <div className="relative m-3 flex flex-wrap mx-auto justify-center">
//         <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
//           <div className="overflow-x-hidden rounded-2xl relative">
//             <img className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
//           </div>
//           <div className="mt-4 pl-2 mb-2 flex justify-between ">
//             <div>
//               <p className="text-lg font-semibold text-gray-900 mb-0">Product Name</p>
//             </div>
//             <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
//               <ArrowDownTrayIcon className="text-black hover:text-gray-500 w-5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }