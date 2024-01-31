import { lusitana } from '@/app/ui/fonts';
import EmployeeTable from '@/app/ui/employeelist/table';
import Search from '@/app/ui/employeelist/search';
import Pagination from '@/app/ui/employeelist/pagination';
import { fetchEmployeesPages } from '@/app/lib/data/datafetching';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  var totalPages = await fetchEmployeesPages(query);
  if (!totalPages) {
    totalPages = 1;
  }

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Mitarbeiter</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Hospitationen durchsuchen ..." />
      </div>
      <div>
        <EmployeeTable query={query} currentPage={currentPage} />
      </div>
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={totalPages} />}
      </div>
    </div>
  )
}