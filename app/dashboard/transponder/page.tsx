import { lusitana } from '@/app/ui/fonts';
import TransponderTable from '@/app/ui/transponder/table';
import { AssignTransponderModal, DeleteTransponderModal } from "@/app/ui/transponder/modal";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export default async function Page({ searchParams }: SearchParamProps) {

    const showAssignTransponder = searchParams?.showAssignTransponder;
    const showDeleteTransponder = searchParams?.showDeleteTransponder;
    const id = searchParams?.id;

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Transponder</h1>
            </div>
            <div className="mt-4 flex items-center justify-between md:mt-8">
            </div>
            <div>
                <TransponderTable />
            </div>
            {showAssignTransponder && <AssignTransponderModal id={String(id)}/>}
            {showDeleteTransponder && <DeleteTransponderModal id={String(id)}/>}
        </div>
    )
}