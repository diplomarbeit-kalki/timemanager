import { lusitana } from '@/app/ui/fonts';

export default async function Page() {

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Edit</h1>
            </div>
        </div>
    )
}