import Link from "next/link";

export function ErrorModal() {

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-lg rounded-md bg-white dark:bg-zinc-950">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Fehler mit Arbeitsbericht</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-lg text-gray-900 dark:text-gray-400">Bericht für diesen Monat nicht vorhanden! </p>
                        <div className="flex flex-row justify-end mt-8 gap-4">
                            <Link
                                href="/dashboard"
                                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 text-white text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                Zurück
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}