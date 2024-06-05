"use client";
import { usePathname } from "next/navigation";
import { Bell, MessageSquare, Globe, Search, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginPage from "@/app/dashboard/login/page";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 text-white">
      <div className="text-xl font-bold">{pathname.split("/").pop()}</div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 p-1 border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-4">
          <MessageSquare className="w-5 h-5" />
          <Bell className="w-5 h-5" />
          <Globe className="w-5 h-5" />
          <Link href="../dashboard/login">
            <User2Icon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
