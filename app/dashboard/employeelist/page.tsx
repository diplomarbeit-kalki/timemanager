import { lusitana } from '@/app/ui/fonts';
import EmployeesTable from '@/app/ui/employeelist/employees-table';
import Search from '@/app/ui/employeelist/search';
import { EmployeeArchive, CreateEmployee } from '@/app/ui/employeelist/buttons';
import { ArchiveEmployeeModal } from "@/app/ui/employeelist/modal";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    showArchiveEmployee?: string;
    id?: string;
  };
}) {

  const query = searchParams?.query || '';
  const showArchiveEmployee = searchParams?.showArchiveEmployee;
  const id = searchParams?.id;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Mitarbeiter</h1>
      </div>
      <div className="mt-4 flex items-center justify-between md:mt-8">
        <div className="flex w-full justify-between items-center">
          <div className="flex-grow mr-2">
            <Search placeholder="Mitarbeiter suchen ..." />
          </div>
          <EmployeeArchive />

          <CreateEmployee />
        </div>
      </div>
      <div>
        <EmployeesTable query={query} />
      </div>
      {showArchiveEmployee && <ArchiveEmployeeModal id={String(id)} />}
    </div>
  )
}