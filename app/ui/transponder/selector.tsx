'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface Employee {
  _id: string;
  psnr: number;
  firstname: string;
  lastname: string;
}

const Selector: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  const [query, setQuery] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/employees/withoutTransponder/filtered?query=${query}`)
      .then((res) => res.json())
      .then((data: Employee[]) => {
        setEmployees(data);
      });
  }, [query]);

  const handleSearch = useDebouncedCallback((term: string) => { // Specify type for term
    setQuery(`${term}`);
  }, 500);

  const handleClick = (employee: Employee) => {
    if (employee._id !== selectedEmployee?._id) {
      setSelectedEmployee(employee);
      setOpen(false);
    }
  };

  return (
    <div className="w-full font-medium">
      <div
        onClick={() => setOpen(!open)}
        className="flex w-full rounded-md border bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 py-2 pl-10 text-sm outline-2 text-gray-500 dark:text-gray-300 justify-between p-2"
      >
        {/* Mitarbeiter auswählen */}
        {selectedEmployee ? (
          <>
            {selectedEmployee.psnr} {selectedEmployee.firstname} {selectedEmployee.lastname}
            {/* Versteckter input für psnr */}
            <input type="hidden" name="psnr" value={`${selectedEmployee.psnr}`} />
          </>
        ) : (
          "Mitarbeiter auswählen"
        )}
        <ChevronDownIcon className="h-5 md:ml-4" />
      </div>
      <ul className={clsx('bg-white dark:bg-zinc-900 text-gray-500 dark:text-gray-300 mt-2 rounded-b-md overflow-y-auto', {
        'max-h-64': open,
        'max-h-0': !open
      })}>
        <div className='flex items-center px-2 sticky top-0 bg-white dark:bg-zinc-900 border-b-2 border-gray-200 dark:border-zinc-700 dark:text-gray-300'>
          <MagnifyingGlassIcon className='h-5' />
          <input
            type="text"
            onChange={(e) => handleSearch(e.target.value)} // Use target.value for search term
            placeholder='Mitarbeiter suchen'
            className='bg-white dark:bg-zinc-900 placeholder:text-gray-500 dark:placeholder:text-gray-500 p-2 outline-none'
          />
        </div>
        {employees?.map((employee) => (
          <li
            key={employee._id}
            className={clsx(
              'p-2 text-sm hover:bg-gray-200 dark:hover:bg-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-300',
              employee.psnr,
              employee.firstname,
              employee.lastname,
              { 'bg-gray-100 dark:bg-zinc-800': selectedEmployee?._id === employee._id }
            )}
            onClick={() => handleClick(employee)}
          >
            {employee.psnr} {employee.firstname} {employee.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
