import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginValidate } from "../../handlers/loginValidate";
import { login } from "../../redux/action_creators/user";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (loginValidate({ name: username, password })) {
      dispatch(login({ name: username, password }));
      navigator("/");
    } else {
      alert("Заполните все обязательные поля.");
    }
  };

  return (
    <form onSubmit={submit}>
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
  );
};

export default Login;
