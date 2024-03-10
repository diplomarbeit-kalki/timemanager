"use client";

import {
HomeIcon,
  UserGroupIcon,
  KeyIcon,
  TicketIcon,
  ClockIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Mitarbeiter", href: "/dashboard/employeelist", icon: UserGroupIcon },
  { name: "Transponder", href: "/dashboard/transponder", icon: KeyIcon },
  { name: "Zeitstempel", href: "/dashboard/timestamps", icon: TicketIcon },
  { name: "Arbeitszeiten", href: "/dashboard/timesheet", icon: ClockIcon },
  // { name: "Test 1", href: "/dashboard/test/test1", icon: EyeIcon },
  // { name: "Test 2", href: "/dashboard/test/test2", icon: EyeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-zinc-900 p-3 text-sm font-medium hover:bg-blue-200 dark:hover:bg-zinc-950 hover:text-blue-700 dark:hover:text-cyan-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-blue-200 dark:bg-zinc-950 text-blue-700 dark:text-cyan-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}