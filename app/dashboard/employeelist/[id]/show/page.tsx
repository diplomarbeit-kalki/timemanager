import Form from '@/app/ui/employeelist/employee-show-form';
import Breadcrumbs from '@/app/ui/employeelist/breadcrumbs';
import { fetchEmployeeById } from '@/app/lib/data/datafetching';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;
    const employee = await fetchEmployeeById(id);

    if (!employee) {
        notFound();
    }

    const employeeForm = {
        id: id,
        firstname: employee.firstname,
        lastname: employee.lastname,
        birthdate: employee.birthdate,
        street: employee.street,
        housenr: employee.housenr,
        residence: employee.residence,
        postalcode: employee.postalcode,
        phonenr: employee.phonenr,
        email: employee.email,
        tag: employee.tag
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Mitarbeiter', href: '/dashboard/employeelist' },
                    {
                        label: 'Ansehen',
                        href: `/dashboard/employeelist/${id}/show`,
                        active: true,
                    },
                ]}
            />
            <Form employee={employeeForm} />
        </main>
    );
}
