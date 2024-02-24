import { assignTransponder, deleteTransponder } from "@/app/lib/actions/dbactions";
import Link from "next/link";

export function AssignTransponderModal({ id }: { id: string }) {

    const assignTransponderCons = assignTransponder.bind(null, id);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 border w-102 shadow-lg rounded-md bg-white">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Mitarbeiter einen Transponder zuordnen</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-lg text-gray-500">Die id des transponders ist: {id}</p>
                        <p className="text-lg text-gray-900">Wählen Sie einen Mitarbeiter aus: </p>
                        <form action={assignTransponderCons}>
                            <input
                                id="psnr"
                                name="psnr"
                                type="number"
                                placeholder="Personalnummer"
                                min="0"
                                className="peer block w-full rounded-md border border-gray-200  pl-10 text-sm outline-2 placeholder:text-gray-500"
                                required
                            />
                            <button className="relative flex flex-row lg:h-10 md:h-10 sm:h-40 h-40 items-center justify-center border rounded-lg bg-green-600 hover:bg-green-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 overflow-hidden">
                                <span className="mr-3 hidden lg:inline">
                                    Zuweisen
                                </span>
                            </button>
                        </form>

                    </div>
                    <div className="flex justify-center mt-4">
                        <Link
                            href="/dashboard/transponder"
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Zurück
                        </Link>
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
            <div className="p-8 border w-102 shadow-lg rounded-md bg-white">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Tag löschen</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-lg text-gray-900">Wollen Sie den Tag wirklich löschen? </p>
                        <form action={deleteTransponderCons}>
                            <button className="relative flex flex-row lg:h-10 md:h-10 sm:h-40 h-40 items-center justify-center border rounded-lg bg-red-600 hover:bg-red-500 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 overflow-hidden">
                                <span className="mr-3 hidden lg:inline">
                                    Löschen
                                </span>
                            </button>
                        </form>

                    </div>
                    <div className="flex justify-center mt-4">
                        <Link
                            href="/dashboard/transponder"
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Zurück
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}