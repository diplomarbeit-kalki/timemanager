'use client';
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { updateTimestamps } from '@/app/lib/actions/dbactions';

export function CreateTimestamp({ id }: { id: string }) {
    const url = `/dashboard/timestamps/${id}/edit?showCreateTimestamp=true`;
    return (
        <Link
            href={url}
            className="flex h-10 items-center rounded-lg bg-blue-600 dark:bg-cyan-900 px-4 text-sm mt-4 font-medium text-white transition-colors hover:bg-blue-500 dark:hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Zeitstempel hinzufügen</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function DeleteTimestamp({ id, number }: { id: string, number: number }) {
    const url = `/dashboard/timestamps/${id}/edit?showDeleteTimestamp=true&number=${number}`;
    return (
        <Link
            href={url}
            className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-red-300 dark:bg-red-600 hover:bg-red-400 dark:hover:bg-red-700 dark:text-gray-300"
        >
            <TrashIcon className="w-5" />
        </Link>
    );
}

export function UpdateTimestamps({ psnr, date }: { psnr: number, date: string }) {
    console.log(`Psnr: ${psnr}, date: ${date}`);
    const updateTimestampsCons = updateTimestamps.bind(null, psnr, date);

    return (
        <form action={updateTimestampsCons}>
            <button className="flex h-10 items-center rounded-lg bg-blue-600 dark:bg-cyan-900 px-32 text-sm font-medium text-white transition-colors hover:bg-blue-500 dark:hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                <span className="hidden md:block">Bearbeiten</span>{' '}
            </button>
        </form>
    );
}

/* 
export function DeleteTimestamp({ id }: { id: string }) {
    const deleteEmployeeWithId = deleteEmployee.bind(null, id);

    return (
        <form action={deleteEmployeeWithId}>
            <button className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-red-300 dark:bg-red-500 hover:bg-red-400 dark:hover:bg-red-600">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
            </button>
        </form>
    );
}
*/