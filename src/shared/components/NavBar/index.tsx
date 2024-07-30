import { Link } from "react-router-dom";
import { NAVBAR_ITEMS } from "./constants";
import styles from "./index.module.sass";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      {NAVBAR_ITEMS.map((item, index) => (
        <Link to={item.href} key={index} className={styles.navBarItem}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
