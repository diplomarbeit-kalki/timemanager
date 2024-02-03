'use client';
import Image from "next/image";
import Link from "next/link";
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import animationData from "./ui/landing-page/timer-animation.json"
import { useRef } from "react";
import ThemeSwitch from "./ui/ThemeSwitch";

export default function Home() {
  const clockRef = useRef<LottieRefCurrentProps>(null)
  return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-100 dark:bg-zinc-800 font-poppins p-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Willkommen zum Dashboard von Kalkis Stempeluhr
            </h1>
            <p className="text-gray-600 dark:text-gray-100">Diese Seite ist nur für autorisierte Benutzer bestimmt. Sie dient zur Auswertung der Arbeitszeiten der Mitarbeiter.</p>
            <div className="flex gap-2 justify-center pt-4">
              <Link href="/login">
                <button className="bg-blue-500 hover:bg-blue-600 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-lg p-4">Login</button>
              </Link>
              <Link href="/timeclock">
                <button className="bg-slate-500 hover:bg-slate-600 dark:bg-gray-300 dark:hover:bg-gray-400 rounded-lg p-4 text-white dark:text-black">Stempeluhr</button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block md:block w-72 h-72 ml-20">
            <Lottie 
            lottieRef={clockRef}
            loop={true}
            animationData={animationData} 
            />
          </div>
          <div className="absolute left-4 top-4 m-4">
            <div className="inline-flex items-center justify-center whitespace-nowrap text-center hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full transition-all duration-300 w-10 h-10 circle-container">
              <ThemeSwitch />
            </div>
        </div>
      </div>
  );
}
