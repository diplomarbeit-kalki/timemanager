'use client';
import {
    UserIcon,
    CakeIcon,
    HomeIcon,
    HashtagIcon,
    BuildingOffice2Icon,
    PhoneIcon,
    AtSymbolIcon,
    KeyIcon
} from '@heroicons/react/24/outline';
import { EmployeeForm } from '@/app/lib/data/definitions';
import Link from 'next/link';
import { FormImage } from './images';

export default function Form({
    employee
}: {
    employee: EmployeeForm;
}) {


    return (
        <form>
            <div className="rounded-md bg-gray-50 dark:bg-zinc-900 dark:text-gray-300 p-4 md:p-6">
                <div className="flex justify-between mb-4 gap-x-10">
                    {/* Vorname und Nachname in einer Zeile */}
                    <div className="flex flex-col w-full">
                        <div className="flex-1">
                            {/* Vorname */}
                            <label htmlFor="firstname" className="mb-2 block text-sm font-medium">
                                Vorname:
                            </label>
                            <div className="relative mt-2 rounded-md">
                                <div className="relative">
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="string"
                                        placeholder="Vorname"
                                        className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        defaultValue={employee.firstname}
                                        disabled
                                    />
                                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            {/* Nachname */}
                            <label htmlFor="lastname" className="mb-2 block text-sm font-medium">
                                Nachname:
                            </label>
                            <div className="relative mt-2 rounded-md">
                                <div className="relative">
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="string"
                                        placeholder="Nachname"
                                        className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        defaultValue={employee.lastname}
                                        disabled
                                    />
                                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mb-8'>
                        <div className='flex flex-col gap-2'>
                            <FormImage psnr={String(employee.psnr)} />
                            {/* <UploadPictureField id={employee.id} psnr={String(employee.psnr)} /> */}
                        </div>
                    </div>
                </div>

                {/* Geburtsdatum */}
                <div className="mb-4">
                    <label htmlFor="birthdate" className="mb-2 block text-sm font-medium">
                        Geburtsdatum:
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="birthdate"
                                name="birthdate"
                                type="string"
                                placeholder="Geburtsdatum"
                                className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={employee.birthdate}
                                disabled
                            />
                            <CakeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Straße und Hausnummer in einer Zeile */}
                <div className="flex mb-4 gap-4">
                    <div className="flex-1">
                        {/* Straße */}
                        <label htmlFor="street" className="mb-2 block text-sm font-medium">
                            Straße:
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="street"
                                    name="street"
                                    type="string"
                                    placeholder="Straße"
                                    className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={employee.street}
                                    disabled
                                />
                                <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        {/* Hausnummer */}
                        <label htmlFor="housenr" className="mb-2 block text-sm font-medium">
                            Hausnummer:
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="housenr"
                                    name="housenr"
                                    type="string"
                                    placeholder="Hausnummer"
                                    className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={employee.housenr}
                                    disabled
                                />
                                <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wohnort und Postleitzahl in einer Zeile */}
                <div className="flex mb-4 gap-4">
                    <div className="flex-1">
                        {/* Wohnort */}
                        <label htmlFor="residence" className="mb-2 block text-sm font-medium">
                            Wohnort:
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="residence"
                                    name="residence"
                                    type="string"
                                    placeholder="Wohnort"
                                    className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={employee.residence}
                                    disabled
                                />
                                <BuildingOffice2Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        {/* Postleitzahl */}
                        <label htmlFor="postalcode" className="mb-2 block text-sm font-medium">
                            Postleitzahl:
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="postalcode"
                                    name="postalcode"
                                    type="string"
                                    placeholder="Postleitzahl"
                                    className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={employee.postalcode}
                                    disabled
                                />
                                <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Telefonnummer */}
                <div className="mb-4">
                    <label htmlFor="phonenr" className="mb-2 block text-sm font-medium">
                        Telefonnummer:
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="phonenr"
                                name="phonenr"
                                type="string"
                                placeholder="Telefonnummer"
                                className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={employee.phonenr}
                                disabled
                            />
                            <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* E-Mail */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        E-Mail:
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="string"
                                placeholder="E-Mail"
                                className="peer block w-full rounded-md border border-gray-200 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={employee.email}
                                disabled
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Transponder-ID */}
                <div className="mb-4">
                    <label htmlFor="transponder" className="mb-2 block text-sm font-medium">
                        Transponder-ID:
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="transponder"
                                name="transponder"
                                type="string"
                                placeholder="Transponder-ID"
                                className="peer block w-full rounded-md border border-gray-200 bg-gray-50 dark:bg-zinc-950 dark:border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={employee.tag}
                                disabled
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/employeelist"
                    className="flex h-10 items-center rounded-lg bg-gray-100 dark:bg-gray-500 px-4 text-sm font-medium text-gray-600 dark:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                    Zurück
                </Link>
            </div>
        </form>
    );
}
