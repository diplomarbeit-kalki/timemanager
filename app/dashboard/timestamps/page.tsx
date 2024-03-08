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
                <div className='grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4 md:gap-10 lg:gap-10'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-300'>Personalnummer</span>
                        <div className='flow-root'>
                            <SearchPsnr placeholder='PSNR' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-300'>Datum</span>
                        <div className='flow-root'>
                            <SearchDate placeholder='YYYY-MM-DD' />
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