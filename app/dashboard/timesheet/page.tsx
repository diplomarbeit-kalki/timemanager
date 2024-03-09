import { lusitana } from '@/app/ui/fonts';
import TimesheetTable from '@/app/ui/timesheet/table';
import { SearchPsnr, SearchFirstDate, SearchLastDate } from '@/app/ui/timesheet/search';
import DateRangePicker from '@/app/ui/timesheet/daterangepicker';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Arbeitszeiten',
  };

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        psnr?: number;
        firstdate?: string;
        lastdate?: string;
    };
}) {
    const psnr = Number(searchParams?.psnr) || 0;
    const firstdate = searchParams?.firstdate || '';
    const lastdate = searchParams?.lastdate || '';

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Arbeitszeiten</h1>
            </div>
            <div className='mt-4 md:mt-8'>
                <div 
                // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                className='grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4 md:gap-10 lg:gap-10'
                >
                    <div className="flex flex-col gap-2">
                        <span className='text-gray-600 dark:text-gray-300'>Personalnummer</span>
                        <div className="flow-root">
                            <SearchPsnr placeholder="PSNR" />
                        </div>
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <span className='text-gray-300'>Anfangsdatum</span>
                        <div className="flow-root">
                            <SearchFirstDate placeholder="YYYY-MM-DD" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className='text-gray-300'>Enddatum</span>
                        <div className="flow-root">
                            <SearchLastDate placeholder="YYYY-MM-DD" />
                        </div>
                    </div> */}
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-600 dark:text-gray-300'>Arbeitszeitraum auswählen</span>
                        <div>
                            <DateRangePicker />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <TimesheetTable psnr={psnr} firstdate={firstdate} lastdate={lastdate}/>
            </div>
        </div>
    )
}