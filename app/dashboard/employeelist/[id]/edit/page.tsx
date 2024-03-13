import Form from '@/app/ui/employeelist/edit-form';
import Breadcrumbs from '@/app/ui/employeelist/breadcrumbs';
import { fetchEmployeeById } from '@/app/lib/data/datafetching';
import { notFound } from 'next/navigation';
import { DeleteTagFromEmployeeModal } from "@/app/ui/employeelist/modal";
import { Metadata } from 'next';
import { FormImage, UploadPictureField } from '@/app/ui/employeelist/images';

export const metadata: Metadata = {
    title: 'Mitarbeiter bearbeiten',
};

export default async function Page({
    params,
    searchParams
}: {
    params: {
        id: string
    };
    searchParams?: {
        showDeleteTag?: string;
    };
}) {

    const id = params.id;
    const employee = await fetchEmployeeById(id);
    const showDeleteTag = searchParams?.showDeleteTag;

    if (!employee) {
        notFound();
    }

    const employeeForm = {
        id: employee._id,
        psnr: employee.psnr,
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
                        label: 'Bearbeiten',
                        href: `/dashboard/employeelist/${id}/edit`,
                        active: true,
                    },
                ]}
            />

            <FormImage psnr={String(employeeForm.psnr)} />
            <UploadPictureField id={employeeForm.id} psnr={String(employeeForm.psnr)} />
            <Form employee={employeeForm} />
            {showDeleteTag && <DeleteTagFromEmployeeModal id={String(id)} />}
        </main>
    );
}
