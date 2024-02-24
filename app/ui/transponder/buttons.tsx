'use client';
import { UserPlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteTransponder } from '@/app/lib/actions/dbactions';

export function AssignTransponder({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/test/test2`}
            className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-green-300 dark:bg-green-400 hover:bg-green-400 dark:hover:bg-green-500"
        >
            <UserPlusIcon className="w-5" />
        </Link>
    );
}

export function DeleteTransponder({ id }: { id: string }) {
    const deleteTransponderWithId = deleteTransponder.bind(null, id);

    return (
        <form action={deleteTransponderWithId}>
            <button className="rounded-md border border-gray-400 dark:border-gray-500 p-2 bg-red-300 dark:bg-red-500 hover:bg-red-400 dark:hover:bg-red-600">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
            </button>
        </form>
    );
}
