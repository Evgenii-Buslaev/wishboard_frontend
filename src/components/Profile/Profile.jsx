import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProfileForm from "../ProfileForm/ProfileForm";
import useProfile from "../../hooks/useProfile";
import { deleteProfile, logout } from "../../redux/action_creators/user";

const Profile = () => {
  const dispatch = useDispatch();

  const [opennedEditor, setOpennedEditor] = useState(false);
  const user = useSelector((state) => state.userReducer.user);

  const userData = useProfile("update", user);

  const logoutFromAccout = () => dispatch(logout());
  const deleteUser = () => dispatch(deleteProfile(user));

  return (
    <div>
      <h3>{`Здравствуйте, ${user.name}`}</h3>
      {opennedEditor ? <ProfileForm data={userData} /> : null}
      <button
        type="button"
        onClick={() => setOpennedEditor((prevState) => !prevState)}
      >
        {opennedEditor ? "Закрыть форму" : "Редактировать профиль"}
      </button>
      <button type="button" onClick={logoutFromAccout}>
        Выйти
      </button>
      <button type="button" onClick={deleteUser}>
        Удалить аккаунт
      </button>
    </div>
  );
};

export default Profile;
