import { lusitana } from '@/app/ui/fonts';
import EmployeeTable from '@/app/ui/employeelist/table';
//import Search from '@/app/ui/hospitation/search';
//import Pagination from '@/app/ui/hospitation/pagination';
//import { HospitationTableSkeleton } from '@/app/ui/skeletons';
//import { fetchAvailableHospitationsPages } from '@/app/lib/data/datafetching';

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

  //var totalPages = await fetchAvailableHospitationsPages(query);
  var totalPages = 5;
  if(!totalPages) {
    totalPages = 5;
  }

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Mitarbeiterliste</h1>
      </div>
        <EmployeeTable query={query} currentPage={currentPage} />
    </div>
  )
}