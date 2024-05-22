import Link from "next/link";
import {
  LayoutGrid,
  Users,
  ShoppingBasket,
  ArrowLeftRight,
  DollarSign,
  LogOut,
  BadgeHelp,
  ClipboardMinus,
} from "lucide-react";

const MenuLinks: React.FC = () => {
  const menuItem = (href: string, icon: React.ReactNode, label: string) => (
    <li>
      <Link href={href}
        
          className="flex space-x-2 hover:bg-slate-700 active:bg-slate-800 py-4 text-sm items-center"
          aria-label={label}
        >
          {icon}
          <span>{label}</span>
        
      </Link>
    </li>
  );

  return (
    <>
      <ul className="flex flex-col p-4 space-y-1">
        <h2 className="font-bold">Pages</h2>
        {menuItem("../../dashboard/", <LayoutGrid />, "Dashboard")}
        {menuItem("../../dashboard/users", <Users />, "Users")}
        {menuItem("../../dashboard/products", <ShoppingBasket />, "Products")}
        {menuItem(
          "../../dashboard/transactions",
          <ArrowLeftRight />,
          "Transactions"
        )}
      </ul>
      <ul className="flex flex-col p-4 space-y-1">
        <h2 className="font-bold">Analytics</h2>
        {menuItem("../../dashboard/revenue", <DollarSign />, "Revenue")}
        {menuItem("../../dashboard/reports", <ClipboardMinus />, "Reports")}
        {menuItem("../../dashboard/help", <BadgeHelp />, "Help")}
      </ul>
      <ul className="flex flex-col p-4 space-y-1">
        {menuItem("../../dashboard/logout", <LogOut />, "Logout")}
      </ul>
    </>
  );
};

export default MenuLinks;
