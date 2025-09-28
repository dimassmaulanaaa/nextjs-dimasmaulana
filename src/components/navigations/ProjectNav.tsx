"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLaptopCode } from "react-icons/fa";
import { FaFolderOpen, FaPaintbrush } from "react-icons/fa6";

const navLinks = [
  {
    href: "/projects",
    label: "All",
    icon: FaFolderOpen,
  },
  {
    href: "/projects/web-development",
    label: "Web Development",
    icon: FaLaptopCode,
  },
  {
    href: "/projects/graphic-design",
    label: "Graphic Design",
    icon: FaPaintbrush,
  },
];

export function ProjectNav() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <nav className="max-w-7xl mx-auto px-3" aria-label="Project Navigation">
        <ul className="flex items-end justify-evenly border-b border-primary/50">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            const ItemComponent = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-end ${
                    isActive
                      ? "font-semibold text-xl md:text-2xl border-b-2 border-primary"
                      : "font-medium text-lg md:text-xl"
                  } py-1.5 px-5`}
                >
                  <ItemComponent
                    className={`md:hidden m-1 ${
                      isActive ? "size-9" : "size-8"
                    }`}
                  />
                  <span className="hidden md:block">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
