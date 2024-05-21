import Link from "next/link";
import { LayoutGrid, Users, ShoppingBasket, ArrowLeftRight, DollarSign, LogOut, BadgeHelp, ClipboardMinus } from "lucide-react";

const MenuLinks = () => {
    const menuItem = (href: string, icon: React.ReactNode, label: string) => (
        <li>
            <Link href={href} className="flex space-x-2 hover:bg-slate-800 active:bg-slate-800 py-4 text-sm rounded-md">
                {icon}
                <span>{label}</span>
            </Link>
        </li>
    );

    return (
        <div>
            <ul className="flex flex-col p-4 space-y-2">
                <span>Pages</span>
                {menuItem("../../dashboard/", <LayoutGrid />, "Dashboard")}
                {menuItem("../../dashboard/users", <Users />, "Users")}
                {menuItem("../../dashboard/products", <ShoppingBasket />, "Products")}
                {menuItem("../../dashboard/transactions", <ArrowLeftRight />, "Transactions")}
            </ul>
            <ul className="flex flex-col p-4 space-y-2">
                <span>Analytics</span>
                {menuItem("../../dashboard/revenue", <DollarSign />, "Revenue")}
                {menuItem("../../dashboard/reports", <ClipboardMinus />, "Reports")}
                {menuItem("../../dashboard/help", <BadgeHelp />, "Help")}
            </ul>
            {menuItem("../../dashboard/logout", <LogOut />, "Logout")}
        </div>
    );
};

export default MenuLinks;
