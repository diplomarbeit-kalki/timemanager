'use client';

import { createTimestamp, deleteTimestamp } from '@/app/lib/actions/dbactions';
import Link from "next/link";
import SimpleTimePicker from './timepicker';
import React, { useState } from 'react';

interface Props {
    onSelectTime: (time: string) => void;
}

export function CreateTimestampModal({ id }: { id: string }) {
    const backUrl = `/dashboard/timestamps/${id}/edit`;
    const createTimestampCons = createTimestamp.bind(null, id);

    const [selectedTime, setSelectedTime] = useState('');

    const handleSelectTime = (time: React.SetStateAction<string>) => {
        setSelectedTime(time);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-lg rounded-md bg-white dark:bg-zinc-950">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Zeitstempel hinzufügen</h3>
                    <div className="mt-2 px-7 py-3">
                        {/* <p className="text-lg text-gray-900 dark:text-gray-400 mb-4">Wollen Sie den Zeitstempel wirklich hinzufügen? </p> */}
                        <form action={createTimestampCons}>
                            {/* <input
                                type="text"
                                name="time"
                                placeholder='Uhrzeit angeben'
                                className='bg-white dark:bg-zinc-900 placeholder:text-gray-500 dark:placeholder:text-gray-500 p-2 outline-none'
                            /> */}
                            <SimpleTimePicker onSelectTime={handleSelectTime}/>
                            {/* <input
                                type = "text"
                                name = "time"
                                className="hidden"
                            /> */}
                            <div className="flex flex-row justify-end mt-8 gap-4">
                                <Link
                                    href={backUrl}
                                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 text-white text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                    Zurück
                                </Link>

                                <button className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-300">
                                    <span>
                                        Hinzufügen
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function DeleteTimestampModal({ id, number }: { id: string, number: number }) {

    const backUrl = `/dashboard/timestamps/${id}/edit`;
    const deleteTimestampCons = deleteTimestamp.bind(null, id, number);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-lg rounded-md bg-white dark:bg-zinc-950">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Zeitstempel löschen</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-lg text-gray-900 dark:text-gray-400">Wollen Sie den Zeitstempel wirklich löschen? </p>
                        <form action={deleteTimestampCons}>
                            <div className="flex flex-row justify-end mt-8 gap-4">
                                <Link
                                    href={backUrl}
                                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 text-white text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                    Zurück
                                </Link>

                                <button className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-300">
                                    <span>
                                        Löschen
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}