'use client';
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteEmployee } from '@/app/lib/actions/dbactions';

export function CreateEmployee() {
    return (
        <Link
            href="/dashboard/employeelist/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 dark:bg-cyan-900 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 dark:hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Mitarbeiter hinzufügen</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

//TODO: Andere Buttons auch anpassen wie ShowEmployee

export function ShowEmployee({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/employeelist/${id}/show`}
            className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700"
        >
            <EyeIcon className="w-5" />
        </Link>
    );
}

export function UpdateEmployee({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/employeelist/${id}/edit`}
            className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-orange-300 dark:bg-orange-400 hover:bg-orange-400 dark:hover:bg-orange-500"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeleteEmployee({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/employeelist/?showDeleteEmployee=true&id=${id}`}
            className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-red-300 dark:bg-red-600 hover:bg-red-400 dark:hover:bg-red-700 dark:text-gray-300"
        >
            <TrashIcon className="w-5" />
        </Link>
    );
}
