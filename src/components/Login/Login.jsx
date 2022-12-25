import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import usePopup from "../../hooks/usePopup";

import close from "../../assets/icons/close.svg";

import styles from "../../scss/components/_modal.module.scss";

const Login = () => {
  const { username, password, setUsername, setPassword, submit } = useLogin();
  const closePopup = usePopup();

  return (
    <div className={styles.modal} onClick={(e) => closePopup(e)}>
      <form className={styles.form} onSubmit={(e) => submit(e)}>
        <img className={styles.closeBtn} src={close} alt="close" />
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Нет аккаунта?</p>
        <Link to="/register">Зарегистрируйтесь.</Link>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
