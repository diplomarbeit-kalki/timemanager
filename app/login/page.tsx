import LoginForm from '@/app/ui/login/login-form';
import Image from 'next/image';
import ThemeSwitch from '../ui/ThemeSwitch';
 
export default function LoginPage() {
  return (
    // <main className="flex items-center justify-center md:h-screen">
    //   <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
    //     <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 dark:bg-slate-700 p-3 md:h-36">
    //       <div className="w-32 text-white md:w-36">
    //       </div>
    //     </div>
    //     <LoginForm />
    //   </div>
    // </main>

    <main className='bg-slate-100 dark:bg-zinc-800'>
      <div className="py-48">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover h-96">
            <Image
              src="/login_page_image.jpg"
              alt="Login Page Image"
              width={640}
              height={853}
              priority={false}
              className='shadow-inner'
            />
          </div>
          <div className="w-full p-14 lg:w-1/2">
            <LoginForm />
          </div>
          <div className="absolute left-4 top-4 m-4">
            <div className="inline-flex items-center justify-center whitespace-nowrap text-center hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full transition-all duration-300 w-10 h-10 circle-container">
              <ThemeSwitch />
            </div>
        </div>
      </div>
    </div>
    </main>
  );
}