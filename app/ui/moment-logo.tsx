import { oswald } from "@/app/ui/fonts";
import Image from 'next/image'
import MomentLogoSvg from "./MomentLogo.svg";

export default function MomentLogo() {
    return (
        <div className={`${oswald.className} antialiased flex flex-row gap-4 items-center leading-none text-white`}>
            <Image 
                priority
                src={MomentLogoSvg}
                alt="Moment Logo"
                width={50}
                height={50}
            />
            <p className="text-3xl font-semibold">Moment</p>
        </div>
    )
}