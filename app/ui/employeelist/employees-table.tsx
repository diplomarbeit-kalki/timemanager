import { fetchFilteredEmployees } from '@/app/lib/data/datafetching';
import { ShowEmployee, UpdateEmployee, ArchiveEmployee } from './buttons';

export default async function EmployeesTable({
    query,
}: {
    query: string;
}) {

    const employees = await fetchFilteredEmployees(query);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 dark:bg-zinc-950 p-2 md:pt-0">
                    <div className="md:hidden">
                        {employees?.map((employee: { _id: any; psnr: number; username: string; firstname: string; lastname: string; phonenr: string; email: string; }) => (
                            <div
                                key={String(employee._id)}
                                className="mb-2 w-full rounded-md bg-white dark:bg-zinc-900 p-4"
                            >
                                <div className="w-full items-center justify-between pt-4">
                                    <div>
                                        <p className="text-xl font-medium">
                                            {employee.psnr}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {employee.username}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {employee.firstname}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {employee.lastname}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {employee.phonenr}
                                        </p>
                                        <p className="text-xl font-medium">
                                            {employee.email}
                                        </p>
                                        <div className='mx-auto mt-4'>
                                            <div className='flex w-full items-center justify-evenly p-2 rounded-lg bg-gray-100 dark:bg-zinc-950'>
                                                <ShowEmployee id={String(employee._id)} />
                                                <UpdateEmployee id={String(employee._id)} />
                                                <ArchiveEmployee id={String(employee._id)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-bold dark:text-gray-600">
                            <tr>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6 break-all">
                                    Psnr
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium break-all sm:pl-6 hidden lg:block">
                                    Benutzername
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium break-allsm:pl-6">
                                    Vorname
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium break-all">
                                    Nachname
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium break-all">
                                    Telefonnummer
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium break-all hidden lg:block">
                                    Email
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white dark:bg-zinc-900 dark:text-gray-300">
                            {employees?.map((employee: { _id: any; psnr: number; username: string; firstname: string; lastname: string; phonenr: string; email: string; }) => (
                                <tr
                                    key={String(employee._id)}
                                    className="w-full border-b dark:border-gray-600 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap px-5 py-3 break-all">{employee.psnr}</td>
                                    <td className="whitespace-nowrap px-5 py-3 break-all hidden lg:block">{employee.username}</td>
                                    <td className="whitespace-nowrap px-5 py-3 break-all">{employee.firstname}</td>
                                    <td className="whitespace-nowrap px-5 py-3 break-all">{employee.lastname}</td>
                                    <td className="whitespace-nowrap px-5 py-3 break-all">{employee.phonenr}</td>
                                    <td className="whitespace-nowrap px-5 py-5 break-all hidden lg:block">{employee.email}</td>
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3 break-all">
                                        <div className="flex justify-end gap-3">
                                            <ShowEmployee id={String(employee._id)} />
                                            <UpdateEmployee id={String(employee._id)} />
                                            <ArchiveEmployee id={String(employee._id)} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}