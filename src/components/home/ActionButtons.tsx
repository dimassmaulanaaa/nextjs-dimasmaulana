import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { user } from "@/data/user";
import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <div className="flex md:justify-center gap-3 mt-2.5 md:mt-3">
      {/* VIEW RESUME */}
      <Button
        variant="outline"
        className="ps-5"
        aria-label="View Dimas Maulana's resume (opens in a new tab)"
        asChild
      >
        <Link
          href={user.resume}
          download="Dimas-Maulana-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
          <GoLinkExternal className="size-4 me-2" aria-hidden="true" />
        </Link>
      </Button>

      {/* GET CLOSER */}
      <Button
        variant="outline"
        className="ps-5"
        aria-label="Navigate to About Page"
        asChild
      >
        <Link href="/about">
          Get Closer
          <HiArrowLongRight className="size-5 me-2" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}
