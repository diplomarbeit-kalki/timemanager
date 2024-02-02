import { lusitana } from '@/app/ui/fonts';
import ThemeSwitch from '../ui/ThemeSwitch';
import { AnalogClock } from '../ui/timeclock/clock';

export default function Page() {
  return (
    <main className='bg-slate-100 dark:bg-zinc-800'>
      <div className="h-screen flex items-center justify-center">
        <div className="rounded-3xl shadow-lg dark:shadow-zinc-300/30 overflow-hidden mx-auto border dark:border-none border-gray-200">
        <div className="absolute left-4 top-4 m-4">
            <div className="inline-flex items-center justify-center whitespace-nowrap text-center hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full transition-all duration-300 w-10 h-10 circle-container">
              <ThemeSwitch />
            </div>
          </div>
          <div className='justify-center align-middle'>
              <AnalogClock />
              
          </div>
        </div>
      </div>
    </main>
  );
}