import { lusitana } from '@/app/ui/fonts';
import TransponderTable from '@/app/ui/transponder/table';

export default async function Page() {

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
        </div>
    )
}