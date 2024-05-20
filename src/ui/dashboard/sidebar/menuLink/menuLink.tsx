"use client"

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

type MenuItem = {
  path: string;
  icon: React.ReactNode;
  title: string;
};

type Props = {
  item: MenuItem;
};

const MenuLink: React.FC<Props> = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link href={item.path} passHref
      className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
