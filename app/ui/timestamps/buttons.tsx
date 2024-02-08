'use client';
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
//import { deleteEmployee } from '@/app/lib/actions/dbactions';


export function CreateTimestamp() {
    return (
        <Link
            href="/dashboard/timestamp/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 dark:bg-cyan-900 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 dark:hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Timestamp hinzufügen</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

/*
export function UpdateTimestamp({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/timestamp/${id}/edit`}
            className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-orange-300 dark:bg-orange-400 hover:bg-orange-400 dark:hover:bg-orange-500"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}


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