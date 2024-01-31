'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  KeyIcon,
  ExclamationCircleIcon,
  HashtagIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/auth/authactions';
import Link from 'next/link';
import Image from 'next/image';

// export default function LoginForm() {
//   const [errorMessage, dispatch] = useFormState(authenticate, undefined);

//   return (
//     <form action={dispatch} className="space-y-3">
//       <div className="flex flex-col rounded-lg bg-gray-50 dark:bg-zinc-700 px-6 pb-4 pt-8">
//         <h1 className={`${lusitana.className} mb-3 text-2xl font-bold dark:text-white`}>
//           Einloggen um fortzufahren
//         </h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
//               htmlFor="username"
//             >
//               Benutzername
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="username"
//                 type="text"
//                 name="username"
//                 placeholder="Benutzername eingeben"
//                 required
//               />
//               <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
//               htmlFor="password"
//             >
//               Passwort
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Passwort eingeben"
//                 required
//                 minLength={6}
//               />
//               <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>
//         <LoginButton />
//         <div
//           className="flex h-8 items-end space-x-1"
//           aria-live="polite"
//           aria-atomic="true"
//         >
//           {errorMessage && (
//             <>
//               <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
//               <p className="text-sm text-red-500">{errorMessage}</p>
//             </>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }

// function LoginButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button className="mt-4 w-full" aria-disabled={pending}>
//       Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50 dark:text-black" />
//     </Button>
//   );
// }

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
            <h2 className="text-3xl font-semibold text-gray-700 text-center">Kalkis Timemanager</h2>
            <p className="text-2xl text-gray-600 text-center">Willkommen zurück!</p>
            {/* OAuth Sign In With Google --> currently deactivated */}
            {/* <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <div className="px-4 py-3">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#FFC107" />
                        <path
                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                            fill="#FF3D00" />
                        <path
                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                            fill="#4CAF50" />
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#1976D2" />
                    </svg>
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
            </a> */}
            <div className="mt-16 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <p className="text-xs text-center text-gray-500 uppercase">Login mit Benutzername</p>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Benutzername</label>
                <div className="relative">
                  <input
                    id="username"
                    name="username" 
                    type="text" 
                    placeholder="Benutzername eingeben" 
                    className="peer block w-full rounded-md border bg-gray-200 text-gray-700 border-gray-300 py-[9px] pl-10 text-sm focus:outline-none focus:shadow-outline placeholder:text-gray-500 appearance-none" 
                    required/>
                  <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
            <div className="mt-6">
                <div className="flex justify-between">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Passwort</label>
                    {/* Link für Passwort vergessen. Derzeit noch nicht in Verwendung! */}
                    {/* <a href="#" className="text-xs text-gray-500">Passwort vergessen?</a> */}
                </div>
                <div className="relative">
                  <input 
                    id="password"
                    name="password"
                    type="password" 
                    placeholder="Passwort eingeben" 
                    className="peer block w-full rounded-md border bg-gray-200 text-gray-700 border-gray-300 py-[9px] pl-10 text-sm focus:outline-none focus:shadow-outline placeholder:text-gray-500 appearance-none" 
                    required
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
            <div className="mt-12">
                <LoginButton />
            </div>
            <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
              {errorMessage && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-700" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>

            {/* Verlinkung zu Registrieren Seite falls diese noch implementiert wird */}
            {/* <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link href="/register" className="text-xs text-gray-500 uppercase">oder Registrieren</Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div> */}

          </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full text-gray-50 dark:text-white" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5" />
    </Button>
  );
}