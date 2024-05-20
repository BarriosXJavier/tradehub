"use client";

import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { Bell, MessageSquareText, BookPlus, Search } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname()
  return (
    <>
      <div className={styles.container}>Navbar</div>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <Search />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MessageSquareText size={20}/>
          <Bell size={20}/>
          <BookPlus size={20}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
