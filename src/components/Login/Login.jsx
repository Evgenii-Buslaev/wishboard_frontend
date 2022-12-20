import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

import close from "../../assets/icons/close.svg";

import Preloader from "../Preloader/Preloader";
import styles from "../../scss/components/_login.module.scss";

const Login = () => {
  const navigator = useNavigate();
  const { username, password, setUsername, setPassword, submit } = useLogin();
  const preload = useSelector((state) => state.appReducer.loading);

  const closePopup = (e) => {
    if (
      e.target.tagName !== "FORM" &&
      e.target.tagName !== "INPUT" &&
      e.target.tagName !== "BUTTON"
    )
      navigator("/");
  };

  return (
    <div className={styles.login} onClick={(e) => closePopup(e)}>
      {preload ? (
        <Preloader />
      ) : (
        <form className={styles.form} onSubmit={(e) => submit(e)}>
          <img src={close} alt="close" />
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
          <button type="submit">Войти</button>
        </form>
      )}
    </div>
  );
};

export default Login;
