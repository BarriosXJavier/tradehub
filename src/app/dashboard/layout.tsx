import type { Metadata } from "next";
import "../../app/globals.css"
import { GeistSans } from "geist/font/sans";
import Sidebar from "@/ui/dashboard/sidebar/sidebar";
import Dashnav from "@/ui/dashboard/dashnav";

export const metadata: Metadata = {
  title: "TradeHub",
  description: "Next App Admin Management System",
};

export default function DashboardLayout() {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="flex space-x-6">
          <Sidebar />
          <Dashnav />
        </div>
      </body>
    </html>
  );
}
