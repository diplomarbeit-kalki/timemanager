import { lusitana } from '@/app/ui/fonts';
import TimestampsTable from '@/app/ui/timestamps/table';
import { SearchPsnr, SearchDate } from '@/app/ui/timestamps/search';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        psnr?: number;
        date?: string;
    };
}) {

    const psnr = Number(searchParams?.psnr) || 0;
    const date = searchParams?.date || '';

    // Einbaufähig: <CreateTimestamp/>
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Zeitstempel</h1>
            </div>
            <div className="mt-4 md:mt-8">
                <div className="flex items-center gap-x-4"> {/* Abstand zwischen den Elementen */}
                    <div className="flex items-center gap-2">
                        <span>Psnr:</span>
                        <div className="flex-grow">
                            <SearchPsnr placeholder="PSNR" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Datum:</span>
                        <div className="flex-grow">
                            <SearchDate placeholder="YYYY-MM-DD" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <TimestampsTable psnr={psnr} date={date} />
            </div>
        </div>
    )
}