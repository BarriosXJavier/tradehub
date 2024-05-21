import Link from "next/link"
import { LayoutGrid, Users, ShoppingBasket, ArrowLeftRight, DollarSign, LogOut, BadgeHelp, ClipboardMinus } from "lucide-react";

const MenuLinks = () => {
    return (
      <>
        <div>
          <ul className="flex flex-col p-4 space-y-6">
            Pages
            <li>
              <Link
                href="../../dashboard/"
                className="flex space-x-2 hover:bg-slate-800  active:bg-slate-800 py-6"
              >
                <LayoutGrid />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="../../dashboard/users"
                className="flex space-x-2  hover:bg-slate-800  active:bg-slate-800 py-6"
              >
                <Users />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="../../dashboard/products"
                className="flex space-x-2  hover:bg-slate-800  active:bg-slate-800 py-6"
              >
                <ShoppingBasket />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="../../dashboard/transactions"
                className="flex space-x-2  hover:bg-slate-800  active:bg-slate-800 py-6"
              >
                <ArrowLeftRight />
                <span>Transactions</span>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col p-4 space-y-6">
            Analytics
            <li>
              <Link
                href="../../dashboard/revenue"
                className="flex space-x-2  hover:bg-slate-800  active:bg-slate-800 py-6"
              >
                <DollarSign />
                <span>Revenue</span>
              </Link>
            </li>
            <li>
              <Link
                href="../../dashboard/reports"
                className="flex space-x-2  hover:bg-slate-800  active:bg-slate-800 py-6"
              >
                <ClipboardMinus />
                <span>Reports</span>
              </Link>
            </li>
            <li>
              <Link
                href="../../dashboard/help"
                className="flex space-x-2  hover:bg-slate-800  active:bg-slate-800 py-6"
              >
                <BadgeHelp />
                <span>Help</span>
              </Link>
            </li>
          </ul>
          <Link
            href="../../dashboard/logout"
            className="flex space-x-2  hover:bg-slate-800  active:bg-slate-800 py-6"
          >
            <LogOut />
            <span>Logout</span>
          </Link>
        </div>
      </>
    );
}

export default MenuLinks;