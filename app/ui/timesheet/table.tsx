import { fetchTimeReport } from '@/app/lib/data/datafetching';

interface Timereport {
    date: any;
    workhours: number;
    pausehours: number;
}

export default async function TimesheetTable({
    psnr,
    firstdate,
    lastdate
}: {
    psnr: number,
    firstdate: string,
    lastdate: string
}) {
    let timereports: Timereport[] = [];

    const result = await fetchTimeReport(psnr, firstdate, lastdate);
    if(result) {
        timereports = result;
    }
    console.log("table---Show: " + JSON.stringify(timereports));

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
                                    Nr
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Datum
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Arbeitszeit
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Pausenzeit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-zinc-900 dark:text-gray-300">
                            {timereports?.map((timereport: Timereport, index: number) => (
                                <tr
                                    key={index}
                                    className="w-full border-b dark:border-gray-600 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap px-5 py-3">{index}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{timereport.date}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{timereport.workhours}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{timereport.pausehours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}