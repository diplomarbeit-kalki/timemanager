import { assignTransponder, deleteTransponder } from "@/app/lib/actions/dbactions";
import Selector from "@/app/ui/transponder/selector";
import Link from "next/link";

export function AssignTransponderModal({ id }: { id: string }) {

    const assignTransponderConst = assignTransponder.bind(null, id);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 w-102 shadow-lg rounded-md bg-white dark:bg-zinc-950">
                <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Mitarbeiter einem Transponder zuordnen</h3>
                    <div className="py-3">
                        {/* <p className="text-lg text-gray-500 dark:text-gray-400">Transponder ID: <span className="text-gray-900 dark:text-white">{id}</span></p> */}
                        <p className="text-lg text-gray-900 dark:text-gray-400 mt-4 mb-2">Wählen Sie einen Mitarbeiter aus</p>
                        <form action={assignTransponderConst}>
                            <Selector />
                            <div className="flex flex-row justify-end mt-8 gap-4">
                                <Link
                                    href="/dashboard/transponder"
                                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 text-white text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                    Zurück
                                </Link>
                                <button className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-gray-300 " type="submit">
                                    <span>
                                        Zuweisen
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

export function DeleteTransponderModal({ id }: { id: string }) {

    const deleteTransponderCons = deleteTransponder.bind(null, id);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 w-102 shadow-lg rounded-md bg-white dark:bg-zinc-950">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Tag löschen</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-lg text-gray-900 dark:text-gray-400">Wollen Sie den Tag wirklich löschen? </p>
                        <form action={deleteTransponderCons}>
                            <div className="flex flex-row justify-end mt-8 gap-4">
                                <Link
                                    href="/dashboard/transponder"
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