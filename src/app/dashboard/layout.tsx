import Navbar from "../../ui/dashboard/navbar/navbar";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import styles from "../../ui/dashboard/dashboard.module.css"

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
