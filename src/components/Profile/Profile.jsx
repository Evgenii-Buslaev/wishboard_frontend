import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, updateProfile } from "../../redux/action_creators/user";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const [opennedEditor, setOpennedEditor] = useState(false);

  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState(user.password);
  const [sex, setSex] = useState(user.sex);
  const [age, setAge] = useState(user.age);

  const applyChanges = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Вы не можете удалить обязательные поля");
      return;
    }
    dispatch(updateProfile({ _id: user._id, name, password, sex, age }));
  };

  return (
    <div>
      <h3>{`Здравствуйте, ${user.name}`}</h3>
      {opennedEditor ? (
        <form onSubmit={(e) => applyChanges(e)}>
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
          <button type="submit">Сохранить</button>
        </form>
      ) : null}
      <button
        type="button"
        onClick={() => setOpennedEditor((prevState) => !prevState)}
      >
        {opennedEditor ? "Закрыть форму" : "Редактировать профиль"}
      </button>
      <button type="button" onClick={() => dispatch(logout())}>
        Выйти
      </button>
    </div>
  );
};

export default Profile;
