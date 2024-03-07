import { deleteEmployee } from '@/app/lib/actions/dbactions';
import Link from "next/link";

export function DeleteEmployeeModal({ id }: { id: string }) {

    const deleteEmployeeCons = deleteEmployee.bind(null, id);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 w-102 shadow-lg rounded-md bg-white dark:bg-zinc-950">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Mitarbeiter löschen</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-lg text-gray-900 dark:text-gray-400">Wollen Sie den Mitarbeiter wirklich löschen? </p>
                        <form action={deleteEmployeeCons}>
                            <div className="flex flex-row justify-end mt-8 gap-4">
                                <Link
                                    href="/dashboard/employeelist"
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