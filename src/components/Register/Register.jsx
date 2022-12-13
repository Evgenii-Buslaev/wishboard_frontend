import useRegister from "../../hooks/useRegister";

const Register = () => {
  const {
    name,
    password,
    age,
    sex,
    setName,
    setPassword,
    setAge,
    setSex,
    submit,
  } = useRegister();

  return (
    <form onSubmit={(e) => submit(e)}>
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
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
