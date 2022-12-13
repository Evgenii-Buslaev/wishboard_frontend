import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/action_creators/user";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("not selected");

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Пожалуйста, заполните все обязательные поля");
    } else {
      dispatch(register({ name, password, age, sex }));
    }
  };

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
