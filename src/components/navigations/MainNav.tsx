"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex justify-center fixed md:relative right-0 bottom-3 left-0 md:top-0 md:bottom-auto z-50"
      aria-label="Main Navigation"
    >
      <ul className="flex gap-0.5 p-1 rounded-full backdrop-blur supports-[backdrop-filter]:bg-foreground/15">
        {navLinks.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Navigate to ${item.label} Page`}
                asChild
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
