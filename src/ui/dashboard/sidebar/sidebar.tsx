import styles from "./sidebar.module.css";
import { 
  LayoutDashboard, ShoppingBagIcon, User, HandCoinsIcon, BarChart3Icon, WorkflowIcon, Users, Settings, BadgeHelp
} from "lucide-react";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

type MenuItem = {
  title: string;
  path: string;
  icon: JSX.Element;
};

type MenuCategory = {
  title: string;
  list: MenuItem[] | MenuItem;
};

type Props = {};

const menuItems: MenuCategory[] = [
  {
    title: "Pages",
    list: {
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
  },
  {
    title: "Users",
    list: [
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <User />,
      },
    ],
  },
  {
    title: "Products",
    list: [
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBagIcon />,
      },
    ],
  },
  {
    title: "Transactions",
    list: [
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <HandCoinsIcon />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <WorkflowIcon />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <BarChart3Icon />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <Users />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <Settings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <BadgeHelp />,
      },
    ],
  },
];

const Sidebar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/avatar.png" alt="user avatar" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className={styles.category}>{category.title}</span>
            {Array.isArray(category.list) ? (
              category.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))
            ) : (
              <MenuLink item={category.list} key={category.list.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
