"use client";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type MountainIconProps = React.SVGProps<SVGSVGElement>;

function MountainIcon(props: MountainIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link
    href={href}
    className="text-sm font-medium hover:underline underline-offset-4"
    prefetch={false}
  >
    {label}
  </Link>
);

const Homenav: React.FC = () => {
    return (
      
        <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-md text-black">
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">TradeHub</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <NavLink href="#" label="Orders" />
            <NavLink href="#" label="Products" />
            <NavLink href="#" label="Customers" />
            <NavLink href="#" label="Analytics" />
          </nav>
        </header>
    );
};

export default Homenav;