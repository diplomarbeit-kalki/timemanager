import Breadcrumbs from '@/app/ui/employeelist/breadcrumbs';
import EmployeesArchiveTable from '@/app/ui/employeelist/employees-archive-table';
import Search from '@/app/ui/employeelist/search';
import { DeleteEmployeeModal, RestoreEmployeeModal } from "@/app/ui/employeelist/modal";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        showRestoreEmployee?: string;
        showDeleteEmployee?: string;
        id?: string;
    };
}) {

    const query = searchParams?.query || '';
    const showDeleteEmployee = searchParams?.showDeleteEmployee;
    const showRestoreEmployee = searchParams?.showRestoreEmployee;
    const id = searchParams?.id;

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'Mitarbeiter', href: '/dashboard/employeelist' },
                        {
                            label: 'Archiv',
                            href: '/dashboard/employeelist/archive',
                            active: true,
                        },
                    ]}
                />
            </div>
            <div className="-mt-1 flex items-center justify-between md:mt-2 lg:mt-2">
                <div className="flex flex-row gap-4 w-full justify-between items-center">
                    <div className="flex-grow">
                        <Search placeholder="Archivierten Mitarbeiter suchen ..." />
                    </div>
                </div>
            </div>
            <div>
                <EmployeesArchiveTable query={query} />
            </div>
            {showDeleteEmployee && <DeleteEmployeeModal id={String(id)} />}
            {showRestoreEmployee && <RestoreEmployeeModal id={String(id)} />}
        </div>
    );
}