import { lusitana } from '@/app/ui/fonts';
import TimesheetTable from '@/app/ui/timesheet/table';
import { SearchPsnr, SearchFirstDate, SearchLastDate } from '@/app/ui/timesheet/search';

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
                <h1 className={`${lusitana.className} text-2xl`}>Zeitstempel</h1>
            </div>
            <div className="mt-4 md:mt-8">
                <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-2">
                        <span>Psnr:</span>
                        <div className="flex-grow">
                            <SearchPsnr placeholder="PSNR" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Anfangsdatum:</span>
                        <div className="flex-grow">
                            <SearchFirstDate placeholder="YYYY-MM-DD" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Enddatum:</span>
                        <div className="flex-grow">
                            <SearchLastDate placeholder="YYYY-MM-DD" />
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