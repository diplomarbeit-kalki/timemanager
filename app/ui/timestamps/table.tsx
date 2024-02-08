import { fetchTimestampsFromDay } from '@/app/lib/data/datafetching';
//import { ShowEmployee, UpdateEmployee, DeleteEmployee } from './buttons';

interface Timestamp {
    type: string;
    time: string;
}

export default async function TimestampsTable({
    psnr,
    date
}: {
    psnr: number,
    date: string
}) {

    console.log("Server props---psnr: " + psnr + " date: " + date);
    const timestampsperday = await fetchTimestampsFromDay(psnr, date);
    var timestamps;

    if (timestampsperday && timestampsperday.length > 0) {
        console.log("table---Timestampsperday angekommen: " + JSON.stringify(timestampsperday));
        timestamps = timestampsperday[0].timestamps;
        console.log("table---Timestamps: " + JSON.stringify(timestamps));
    }



    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 dark:bg-zinc-950 p-2 md:pt-0">
                    <div className="md:hidden">

                        {timestamps?.map((timestamp: Timestamp, index: number) => (
                            <div
                                key={index}
                                className="mb-2 w-full rounded-md bg-white dark:bg-zinc-900 p-4"
                            >
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div>
                                        <p className="text-xl font-medium">
                                            {index + 1}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {new Date(timestamp.time).toLocaleDateString()}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {new Date(timestamp.time).toLocaleTimeString()}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {timestamp.type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-bold dark:text-gray-600">
                            <tr>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Tagesnummer
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Datum
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Uhrzeit
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Type
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-zinc-900 dark:text-gray-300">
                            {timestamps?.map((timestamp: Timestamp, index: number) => (
                                <tr
                                    key={index}
                                    className="w-full border-b dark:border-gray-600 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap px-5 py-3">{index + 1}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{new Date(timestamp.time).toLocaleDateString()}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{new Date(timestamp.time).toLocaleTimeString()}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{timestamp.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}