'use client';
import { UserPlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteTransponder } from '@/app/lib/actions/dbactions';

export function AssignTransponder({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/transponder/?showAssignTransponder=true&id=${id}`}
            className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-green-300 dark:bg-green-600 hover:bg-green-400 dark:hover:bg-green-700 dark:text-gray-300"
        >
            <UserPlusIcon className="w-5" />
        </Link>
    );
}

export function DeleteTransponder({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/transponder/?showDeleteTransponder=true&id=${id}`}
            className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-red-300 dark:bg-red-600 hover:bg-red-400 dark:hover:bg-red-700 dark:text-gray-300"
        >
             <TrashIcon className="w-5" />
        </Link>
    );
}
