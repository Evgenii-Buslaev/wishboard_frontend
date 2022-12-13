import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { username, password, setUsername, setPassword, submit } = useLogin();

  return (
    <form onSubmit={(e) => submit(e)}>
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
