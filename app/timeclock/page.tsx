'use server';
import { lusitana } from '@/app/ui/fonts';
import ThemeSwitch from '../ui/ThemeSwitch';
import { AnalogClock } from '../ui/timeclock/clock';
import EmployeeRegistration from '../ui/timeclock/employeeRegistration';

export default async function Page() {
  return (
    <main className='bg-slate-100 dark:bg-zinc-800'>
      <div className="h-screen flex pt-4 md:items-center lg:items-center justify-center">
        <div className="overflow-hidden mx-auto">
          <div className="absolute hidden md:block lg:block left-2 bottom-2 m-2 md:left-4 md:bottom-4 md:m-4 lg:left-4 lg:bottom-4 lg:m-4">
            <div className="inline-flex items-center justify-center whitespace-nowrap text-center hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full transition-all duration-300 w-10 h-10 circle-container">
              <ThemeSwitch />
            </div>
          </div>
          <div className='flex flex-col gap-0 justify-center align-middle'>
            <div className=''>
              <AnalogClock />
            </div>
            <div className='p-0 sm:p-0 md:p-4'>
              <EmployeeRegistration />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}