import { lusitana } from '@/app/ui/fonts';
import ThemeSwitch from '../ui/ThemeSwitch';
import { AnalogClock } from '../ui/timeclock/clock';
import EmployeeRegistration from '../ui/timeclock/employeeRegistration';

export default function Page() {
  return (
    <main className='bg-slate-100 dark:bg-zinc-800'>
      <div className="h-screen flex items-center justify-center">
        <div className=" 
        overflow-hidden 
        mx-auto 
        ">
          <div className="absolute left-4 bottom-4 m-4">
            <div className="inline-flex items-center justify-center whitespace-nowrap text-center hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full transition-all duration-300 w-10 h-10 circle-container">
              <ThemeSwitch />
            </div>
          </div>
          <div className='flex flex-col gap-8 justify-center align-middle'>
            <div className=''>
              <AnalogClock />
            </div>
            <div className='p-12 md:p-4'>
              <EmployeeRegistration />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}