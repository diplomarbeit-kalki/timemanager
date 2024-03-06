import { lusitana } from '@/app/ui/fonts';
import EmployeeTable from '@/app/ui/employeelist/table';
import Search from '@/app/ui/employeelist/search';
import { CreateEmployee } from '@/app/ui/employeelist/buttons';
import { DeleteEmployeeModal } from "@/app/ui/employeelist/modal";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    showDeleteEmployee?: string;
    id?: string;
  };
}) {

  const query = searchParams?.query || '';
  const showDeleteEmployee = searchParams?.showDeleteEmployee;
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
          <CreateEmployee />
        </div>
      </div>
      <div>
        <EmployeeTable query={query} />
      </div>
      {showDeleteEmployee && <DeleteEmployeeModal id={String(id)} />}
    </div>

  )
}