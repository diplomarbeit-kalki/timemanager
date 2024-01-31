import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Mitarbeiter konnte nicht gefunden werden.</p>
      <Link
        href="/dashboard/employeelist"
        className="mt-4 rounded-md bg-orange-500 px-4 py-2 text-sm text-white transition-colors hover:bg-orange-400"
      >
        Zurück
      </Link>
    </main>
  );
}