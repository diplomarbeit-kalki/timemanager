import Breadcrumbs from '@/app/ui/employeelist/breadcrumbs';
import { Metadata } from 'next';
import TimestampsTable from '@/app/ui/timestamps/timestamps-edit-table';
import { fetchTimerecordById } from '@/app/lib/data/datafetching';
import { CreateTimestamp } from '@/app/ui/timestamps/buttons';
import { CreateTimestampModal, DeleteTimestampModal } from '@/app/ui/timestamps/modal';

export const metadata: Metadata = {
    title: 'Zeitstempel bearbeiten',
};

export default async function Page({
    params,
    searchParams,
}: {
    params: {
        id: string
    };
    searchParams?: {
        showCreateTimestamp?: string;
        showDeleteTimestamp?: string;
        number?: number;
    };
}) {



    var psnr = 0;
    var date = "";
    const showCreateTimestamp = searchParams?.showCreateTimestamp;
    const showDeleteTimestamp = searchParams?.showDeleteTimestamp;
    const number = searchParams?.number || 0;
    const id = params.id;
    const timerecord = await fetchTimerecordById(id);
    if (timerecord) {
        psnr = timerecord.emppsnr;
        date = timerecord.date;
    }

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'Zeitstempel', href: '/dashboard/timestamps' },
                        {
                            label: 'Bearbeiten',
                            href: `/dashboard/timestamps/${id}/edit`,
                            active: true,
                        },
                    ]}
                />
            </div>
            <div className="mt-4 md:mt-8">
                <div className='grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4 md:gap-10 lg:gap-10'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-600 dark:text-gray-300'>Personalnummer</span>
                        <div className='flow-root'>
                            {timerecord.emppsnr}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-gray-600 dark:text-gray-300'>Datum</span>
                        <div className='flow-root'>
                            {timerecord.date}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {/* <span className='text-gray-600 dark:text-gray-300'>Bearbeiten</span> */}
                        <div className='flow-root'>
                            <CreateTimestamp id={id} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <TimestampsTable psnr={psnr} date={date} id={id} />
            </div>
            {showCreateTimestamp && <CreateTimestampModal id={id} />}
            {showDeleteTimestamp && <DeleteTimestampModal id={id} number={number} />}
        </div>
    )
}
