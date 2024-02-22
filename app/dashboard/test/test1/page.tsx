import { lusitana } from '@/app/ui/fonts';
import { ButtonForTests } from '@/app/ui/test/testbutton';

export default function Page() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Testpage 1</h1>
            </div>
            <br></br>
            <h1 className={`${lusitana.className} text-2xl`}>Siehe in der Serverkonsole die Ergebnisse der testaction</h1>
            <br></br>
            <div className="flex w-full items-center justify-between">
                <ButtonForTests />
            </div>
        </div>
    );
}