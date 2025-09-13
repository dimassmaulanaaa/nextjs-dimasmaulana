import Link from "next/link";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="max-w-7xl flex items-center justify-between mx-auto p-3 fixed top-0 right-0 left-0">
      {/* LOGO */}
      <Link
        href="/"
        className="font-heading font-medium text-5xl tracking-tighter"
        aria-label="Navigate to Home Page"
      >
        DIM.
      </Link>

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
