import Breadcrumbs from '@/app/ui/employeelist/breadcrumbs';
import Form from '@/app/ui/employeelist/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mitarbeiter hinzufügen',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Mitarbeiter', href: '/dashboard/employeelist' },
          {
            label: 'Hinzufügen',
            href: '/dashboard/employeelist/create',
            active: true,
          },
        ]}
      />
      <Form/>
    </main>
  );
}