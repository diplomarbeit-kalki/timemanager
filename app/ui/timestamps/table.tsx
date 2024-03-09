import { fetchTimestampsFromDay } from '@/app/lib/data/datafetching';

interface Timestamp {
    number: number;
    type: string;
    timestamp: string;
}

export default async function TimestampsTable({
    psnr,
    date
}: {
    psnr: number,
    date: string
}) {
    const timestampsperday = await fetchTimestampsFromDay(psnr, date);
    var stamps;

    if (timestampsperday) {
        stamps = timestampsperday.stamps;
    }

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 dark:bg-zinc-950 p-2 md:pt-0">
                    <div className="md:hidden">

                        {stamps?.map((stamp: Timestamp, index: number) => {
                            const timestamp = new Date(stamp.timestamp);
                            return (
                                <div
                                    key={index}
                                    className="mb-2 w-full rounded-md bg-white dark:bg-zinc-900 p-4"
                                >
                                    <div className="flex w-full items-center justify-between pt-4">
                                        <div>
                                            <p className="text-xl font-medium">
                                                {stamp.number}
                                            </p>
                                            <p className="text-xl font-medium">
                                                {timestamp.toLocaleDateString()}
                                            </p>
                                            <p className="text-xl font-medium">
                                                {timestamp.toLocaleTimeString()}
                                            </p>
                                            <p className="text-xl font-medium">
                                                {stamp.type}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-bold dark:text-gray-600">
                            <tr>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Nummer
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
                            {stamps?.map((stamp: Timestamp, index: number) => {
                                const timestamp = new Date(stamp.timestamp);
                                return (
                                    <tr
                                        key={index}
                                        className="w-full border-b dark:border-gray-600 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    >
                                        <td className="whitespace-nowrap px-5 py-3">{stamp.number}</td>
                                        <td className="whitespace-nowrap px-5 py-3">{timestamp.getDate().toString().padStart(2, '0')}.{(timestamp.getMonth() + 1).toString().padStart(2, '0')}.{timestamp.getFullYear()}</td>
                                        <td className="whitespace-nowrap px-5 py-3">{timestamp.getHours().toString().padStart(2, '0')}:{timestamp.getMinutes().toString().padStart(2, '0')}</td>
                                        <td className="whitespace-nowrap px-5 py-3">{stamp.type}</td>
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