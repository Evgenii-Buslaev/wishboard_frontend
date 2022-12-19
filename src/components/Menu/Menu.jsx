import { Link } from "react-router-dom";
import styles from "../../scss/components/_menu.module.scss";

const Menu = ({ auth, openned }) => {
  return (
    <div className={`${styles.menu} ${openned ? styles.down : styles.up}`}>
      <Link to="/cards">Пожелания</Link>
      {auth ? <Link to="/post_card">Создайте пожелание</Link> : null}
    </div>
  );
};

export default Menu;
