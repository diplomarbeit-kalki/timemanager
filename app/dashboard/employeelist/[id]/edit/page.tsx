import Form from '@/app/ui/employeelist/edit-form';
import Breadcrumbs from '@/app/ui/employeelist/breadcrumbs';
import { fetchEmployeeById } from '@/app/lib/data/datafetching';
import { notFound } from 'next/navigation';
import { ObjectId } from 'mongodb';

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;
    const oid = new ObjectId(id);
    const employee = await fetchEmployeeById(oid);

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
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Mitarbeiter', href: '/dashboard/employeelist' },
                    {
                        label: 'Bearbeiten',
                        href: `/dashboard/employeelist/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form employee={employeeForm} />
        </main>
    );
}
