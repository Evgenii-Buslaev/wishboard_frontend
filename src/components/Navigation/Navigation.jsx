import { Link } from "react-router-dom";

import home from "../../assets/icons/home.svg";
import board from "../../assets/icons/board.svg";
import user from "../../assets/icons/user.svg";
import styles from "../../scss/components/_navigation.module.scss";

const Navigation = ({ auth }) => {
  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
      <Link to="/cards">
        <img src={board} alt="wishboard" />
      </Link>
      <input
        type="text"
        className={styles.search}
        placeholder="Введите ключевые слова..."
      />
      {auth ? (
        <Link to="/profile">
          <img src={user} alt="profile" />
        </Link>
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
