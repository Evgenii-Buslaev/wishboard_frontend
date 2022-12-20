import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Register from "../Register/Register";
import Preloader from "../Preloader/Preloader";
import useProfile from "../../hooks/useProfile";
import { deleteProfile, logout } from "../../redux/action_creators/user";

const Profile = () => {
  const dispatch = useDispatch();

  const [opennedEditor, setOpennedEditor] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const preloader = useSelector((state) => state.appReducer.loading);

  const userData = useProfile("update", user);

  const logoutFromAccout = () => dispatch(logout());
  const deleteUser = () => dispatch(deleteProfile(user));

  return (
    <div>
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <h3>{`Здравствуйте, ${user.name}`}</h3>
          {opennedEditor ? <Register /> : null}
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
        </>
      )}
    </div>
  );
};

export default Profile;
