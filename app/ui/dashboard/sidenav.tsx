import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from '@/auth';
import ThemeSwitch from "../ThemeSwitch";

import Image from "next/image"

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-slate-700 dark:bg-zinc-950  p-4 md:h-40"
                href="/dashboard"
            >
                <div className="flex flex-row w-32 text-white md:w-40">
                    TimeManager
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-1 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-zinc-900 md:block"></div>
                {/* <div className="flex flex-wrap items-center cursor-pointer border border-gray-500 rounded-full px-2 py-1">
                    <Image src='/public/profilepictures/1_Elias_Kalkhofer.jpg' width={9} height={9} className="w-9 h-9 rounded-full border-2 border-white" alt={"Thumbnail Picture"} />
                    <div className="ml-4">
                        <p className="text-sm text-white">Tobias Mitterwallner</p>
                        <p className="text-xs text-gray-300">Administrator</p>
                    </div>
                </div> */}
                <form action={async () => {
                    'use server';
                    await signOut();
                }}>
                    <div className="flex flex-row gap-20 items-center">
                        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-zinc-900 p-3 text-sm font-medium hover:bg-red-600 dark:hover:bg-red-900 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
                            <PowerIcon className="w-6" />
                            <div className="hidden md:block">Abmelden</div>
                        </button>
                        <div className="items-center justify-center whitespace-nowrap text-center hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full transition-all duration-300 w-10 h-10 circle-container hidden md:inline-flex lg:inline-flex">
                            <ThemeSwitch />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


