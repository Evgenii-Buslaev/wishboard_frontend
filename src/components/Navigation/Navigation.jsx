import { Link } from "react-router-dom";

import { ReactComponent as HomeBtn } from "../../assets/icons/home.svg";
import { ReactComponent as BoardBtn } from "../../assets/icons/board.svg";
import { ReactComponent as UserBtn } from "../../assets/icons/user.svg";
import styles from "../../scss/components/_navigation.module.scss";

const Navigation = ({ auth }) => {
  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <HomeBtn className={styles.nav_btn} />
      </Link>
      <Link to="/cards">
        <BoardBtn className={styles.nav_btn} />
      </Link>
      <input
        type="text"
        className={styles.search}
        placeholder="Введите ключевые слова..."
      />
      {auth.loggedIn ? (
        <div className={styles.authLinks}>
          <Link to="/profile">
            <UserBtn className={styles.nav_btn} />
          </Link>
          <h4>{auth.user.name.split(" ")[0]}</h4>
        </div>
      ) : (
        <div className={styles.authLinks}>
          <Link to="/login">Войти</Link>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
