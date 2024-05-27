import type { Metadata } from "next";
import "../../app/globals.css";
import { GeistSans } from "geist/font/sans";
import Sidebar from "@/ui/dashboard/sidebar/sidebar";
import Dashnav from "@/ui/dashboard/dashnav";
import RightBar from "@/ui/dashboard/rightbar/rightbar";
import Footer from "@/ui/dashboard/footer";

export const metadata: Metadata = {
  title: "TradeHub",
  description: "Next App Admin Management System",
};


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
        <div className="flex flex-1">
          <Sidebar className="w-64" />
          <div className="flex flex-col flex-1">
            <Dashnav className="h-16" />
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
          <RightBar className="w-64" />
        </div>
        <Footer className="w-full" />
      </body>
    </html>
  );
}
