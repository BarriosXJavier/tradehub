"use client";

import { Bell, Search, MessageSquareText } from "lucide-react";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";

interface DashnavProps {
  className?: String,
}

const Dashnav: React.FC<DashnavProps> = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-[#182237] flex h-10 justify-between items-center p-10 w-full">
      <div className="text-lg mx-4">{pathname.split("/").pop()}</div>
      <div className="flex space-x-1">
        <Search />
        <div>
          <input type="text" placeholder="Search..." className="" />
        </div>
        <div className="flex space-x-2">
          <Bell />
          <MessageSquareText />
        </div>
      </div>
    </nav>
  );
};

export default Dashnav;
