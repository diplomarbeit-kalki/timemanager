import { fetchTimerecordsFromPeriod } from '@/app/lib/data/datafetching';

export default async function TimesheetTable({
    psnr,
    firstdate,
    lastdate
}: {
    psnr: number,
    firstdate: string,
    lastdate: string
}) {
    const timerecords = await fetchTimerecordsFromPeriod(psnr, firstdate, lastdate);
    const daysOfWeek = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];


    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 dark:bg-zinc-950 p-2 md:pt-0">
                    <div className="md:hidden">
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-bold dark:text-gray-600">
                            <tr>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Datum
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Wochentag
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Arbeitszeit
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Arbeitsminuten
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Pausenzeit
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Pausenminuten
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-zinc-900 dark:text-gray-300">
                            {timerecords?.map((timerecord: { _id: string, date: string, workingtime: string, workingminutes: string, breaktime: string, breakminutes: string }) => {
                                const createdDate = new Date(timerecord.date);
                                return (
                                    <tr
                                        key={timerecord._id}
                                        className="w-full border-b dark:border-gray-600 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    >
                                        <td className="whitespace-nowrap px-5 py-3">{timerecord.date}</td>
                                        <td className="whitespace-nowrap px-5 py-3">{daysOfWeek[createdDate.getDay()]}</td>
                                        <td className="whitespace-nowrap px-5 py-3">{timerecord.workingtime}</td>
                                        <td className="whitespace-nowrap px-5 py-3">{timerecord.workingminutes}</td>
                                        <td className="whitespace-nowrap px-5 py-3">{timerecord.breaktime}</td>
                                        <td className="whitespace-nowrap px-5 py-3">{timerecord.breakminutes}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}