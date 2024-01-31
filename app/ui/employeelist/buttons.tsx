'use client';
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteEmployee } from '@/app/lib/actions/dbactions';

export function ShowEmployee({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/employeelist/${id}/show`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <EyeIcon className="w-5" />
        </Link>
    );
}

export function CreateEmployee() {
    return (
        <Link
            href="/dashboard/employeelist/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Mitarbeiter hinzufügen</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function UpdateEmployee({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/employeelist/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeleteEmployee({ id }: { id: string }) {
    const deleteEmployeeWithId = deleteEmployee.bind(null, id);

    return (
        <form action={deleteEmployeeWithId}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-4" />
            </button>
        </form>
    );
}
