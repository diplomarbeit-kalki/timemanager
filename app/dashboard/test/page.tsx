import { lusitana } from '@/app/ui/fonts';
import { ButtonForTests } from '@/app/ui/test/testbutton';

export default function Page() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Testpage</h1>
            </div>
            <br></br>
            <div className="flex w-full items-center justify-between">
                <ButtonForTests />
            </div>
        </div>
    );
}