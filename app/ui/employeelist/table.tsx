import { fetchFilteredEmployees } from '@/app/lib/data/datafetching';
import { getSessionUsername } from '@/app/lib/session/sessionactions';
import { revalidatePath } from 'next/cache';
import { ShowEmployee, UpdateEmployee, DeleteEmployee } from './buttons';



export default async function HospitationTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {

    var username = "";
    const tryUsername = await getSessionUsername();
    if (tryUsername) {
        username = tryUsername;
    }

    const employees = await fetchFilteredEmployees(query, currentPage, username);

    if (employees && employees.length > 0) {
        console.log("table---Hospitationen angekommen");
    }

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 dark:bg-zinc-950 p-2 md:pt-0">
                    <div className="md:hidden">

                        {employees?.map((employee) => (
                            <div
                                key={String(employee._id)}
                                className="mb-2 w-full rounded-md bg-white dark:bg-zinc-900 p-4"
                            >
                                <div className="flex w-full items-center justify-between pt-4">
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
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-bold dark:text-gray-600">
                            <tr>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Psnr
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6 hidden lg:block">
                                    Benutzername
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium sm:pl-6">
                                    Vorname
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium">
                                    Nachname
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium">
                                    Telefonnummer
                                </th>
                                <th scope="col" className="px-5 py-5 font-medium hidden lg:block">
                                    Email
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white dark:bg-zinc-900 dark:text-gray-300">
                            {employees?.map((employee) => (
                                <tr
                                    key={String(employee._id)}
                                    className="w-full border-b dark:border-gray-600 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap px-5 py-3">{employee.psnr}</td>
                                    <td className="whitespace-nowrap px-5 py-3 hidden lg:block">{employee.username}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{employee.firstname}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{employee.lastname}</td>
                                    <td className="whitespace-nowrap px-5 py-3">{employee.phonenr}</td>
                                    <td className="whitespace-nowrap px-5 py-5 hidden lg:block">{employee.email}</td>
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex justify-end gap-3">
                                            <ShowEmployee id={String(employee._id)} />
                                            <UpdateEmployee id={String(employee._id)} />
                                            <DeleteEmployee id={String(employee._id)} />
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