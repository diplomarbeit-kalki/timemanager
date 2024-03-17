import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* <Card title="Arbeitsbericht Monat" value={"Test"} type="download"/>
                <Card title="Arbeitsbericht Älter" value={"Test"} type="downloadOld" />
                <Card title="Arbeitende Mitarbeiter" value={"Test"} type="working" />
                <Card title="Total Customers" value={"Test"} type="transponder" /> */}
                <CardWrapper />
            </div>
            
            {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                <RevenueChart />
                </Suspense>
                <LatestInvoices latestInvoices={latestInvoices} />
            </div> */}
            
        </main>
    )
}