import Link from "next/link";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { MainNav } from "@/components/navigations/MainNav";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="max-w-7xl flex items-center justify-between mx-auto p-3 fixed top-0 right-0 left-0 z-50">
      {/* LOGO */}
      <Link
        href="/"
        className="font-heading font-medium text-5xl tracking-tighter"
        aria-label="Navigate to Home Page"
      >
        DIM.
      </Link>

      {/* NAVBAR */}
      <MainNav />

      {/* CONTACT ME BUTTON */}
      <Button
        size="none"
        className="size-11 ml-[45.71px]"
        aria-label="Navigate to Contact Page"
        asChild
      >
        <Link href="/contact">
          <HiOutlineHandRaised
            className="size-6 rotate-[-15deg]"
            aria-hidden="true"
          />
        </Link>
      </Button>
    </header>
  );
}
