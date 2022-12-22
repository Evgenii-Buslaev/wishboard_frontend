import { Link } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import usePopup from "../../hooks/usePopup";

import close from "../../assets/icons/close.svg";
import styles from "../../scss/components/_modal.module.scss";

const Register = () => {
  const {
    name,
    password,
    age,
    sex,
    action,
    setName,
    setPassword,
    setAge,
    setSex,
    submit,
  } = useProfile("register");

  const closePopup = usePopup();

  return (
    <div className={styles.modal} onClick={(e) => closePopup(e)}>
      <form onSubmit={(e) => submit(e)} className={styles.form}>
        <img src={close} alt="close" onClick={(e) => closePopup(e)} />
        <input
          type="text"
          placeholder="Имя пользователя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select
          placeholder="Пол"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="not selected" disabled>
            Пол
          </option>
          <option value="male">Муж.</option>
          <option value="female">Жен.</option>
        </select>
        {action === "register" ? (
          <>
            <p>Есть аккаунт?</p>
            <Link to="/login">Войдите.</Link>
          </>
        ) : null}
        <button type="submit">
          {action === "register" ? "Зарегистрироваться" : "Обновить профиль"}
        </button>
      </form>
    </div>
  );
};

export default Register;
