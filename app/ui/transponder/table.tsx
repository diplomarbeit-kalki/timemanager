import { fetchUnregisteredtags } from '@/app/lib/data/datafetching';
import { getSessionUsername } from '@/app/lib/session/sessionactions';
import { revalidatePath } from 'next/cache';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

interface UnregisteredTag {
    _id: string;
    uid: string;
    createddate: string;
}

export default async function TransponderTable() {

    const unregisteredtags = await fetchUnregisteredtags();

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 dark:bg-zinc-950 p-2 md:pt-0">
                    <div className="md:hidden">

                        {unregisteredtags?.map((unregisteredtag: UnregisteredTag) => {
                            const createdDate = new Date(unregisteredtag.createddate);
                            return (
                                <div
                                    key={String(unregisteredtag._id)}
                                    className="mb-2 w-full rounded-md bg-white dark:bg-zinc-900 p-4"
                                >
                                    <div className="flex w-full items-center justify-between pt-4">
                                        <div>
                                            <p className="text-xl font-medium">
                                                {unregisteredtag.uid}
                                            </p>
                                            <p className="text-xl font-medium">
                                                {createdDate.getHours()}:{createdDate.getMinutes()}

                                            </p>
                                            <p className="text-xl font-medium">
                                                {createdDate.getDate()}.{createdDate.getMonth() + 1}.{createdDate.getFullYear()}
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
                                <th scope="col" className="px-5 py-5 font-medium">
                                    Tag UID
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium">
                                    Erstelluhrzeit
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium">
                                    Erstelldatum
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white dark:bg-zinc-900 dark:text-gray-300">
                            {unregisteredtags?.map((unregisteredtag: UnregisteredTag) => {
                                const createdDate = new Date(unregisteredtag.createddate);
                                return (
                                    <tr
                                        key={String(unregisteredtag._id)}
                                        className="w-full border-b dark:border-gray-600 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    >
                                        <td className="whitespace-nowrap px-5 py-3">{unregisteredtag.uid}</td>
                                        <td className="whitespace-nowrap px-5 py-5">{createdDate.getHours()}:{createdDate.getMinutes()}</td>
                                        <td className="whitespace-nowrap px-5 py-5">{createdDate.getDate()}.{createdDate.getMonth() + 1}.{createdDate.getFullYear()}</td>
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