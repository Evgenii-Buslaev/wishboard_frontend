import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";
import toggleMenuBtn from "../../assets/icons/down-arrow.svg";
import styles from "../../scss/components/_navigation.module.scss";

const Navigation = ({ auth }) => {
  const [menuOpenned, setMenuOpenned] = useState(false);

  const toggleMenu = () => {
    setMenuOpenned((prevState) => !prevState);
  };

  return (
    <nav className={styles.navigation}>
      <img
        className={menuOpenned ? styles.toggle_up : styles.toggle_down}
        src={toggleMenuBtn}
        alt="open menu"
        onClick={toggleMenu}
      />
      <input type="text" className={styles.search} />
      {auth ? (
        <Link to="/profile">Профиль</Link>
      ) : (
        <div className={styles.authLinks}>
          <Link to="/login">Войти</Link>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      )}
      <Menu auth={auth} openned={menuOpenned} />
    </nav>
  );
};

export default Navigation;
