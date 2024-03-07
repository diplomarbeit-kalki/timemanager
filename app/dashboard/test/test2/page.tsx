"use client";
import { lusitana } from '@/app/ui/fonts';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { fetchTestPdf } from '@/app/lib/data/datafetching';

function DownloadButton({ }: {}) {

    const testfunctionCons = fetchTestPdf.bind(null);

    return (
        <form action={testfunctionCons}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <ArrowDownTrayIcon className="w-4" />
            </button>
        </form>
    );
}

export default function Page() {

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Testpage 2</h1>
            </div>
            <DownloadButton />
        </div>
    );
}