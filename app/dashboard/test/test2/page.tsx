import { lusitana } from '@/app/ui/fonts';
import Image from "next/image"

export default function Page() {

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Testpage 2</h1>
            </div>
            <Image
                src='/profilepictures/placeholder.jpg'
                alt="Profilbild"
                width={500}
                height={500}
                className="rounded-2xl"
            />
        </div>
    );
}