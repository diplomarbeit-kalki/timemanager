import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen min-w-fit flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none w-screen max-w-screen md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow min-w-fit p-6 md:overflox-y-auto md:p-8">{children}</div>
    </div>
  );
}
