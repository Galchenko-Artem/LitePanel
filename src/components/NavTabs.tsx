"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Главная" },
  { href: "/form", label: "Форма" },
  { href: "/table", label: "Таблица" },
  { href: "/modal", label: "Модалка" },
  { href: "/ssr", label: "SSR" },
  { href: "/ssg", label: "SSG" },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2 bg-white px-4 pt-2 pb-0">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`text-lg px-5 py-2 rounded-t-md transition-all border
              ${
                isActive
                  ? "bg-white text-black border-gray-300 border-b-white font-semibold"
                  : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
              }
            `}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
