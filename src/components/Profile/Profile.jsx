import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Register from "../Register/Register";
import Preloader from "../Preloader/Preloader";
import { deleteProfile, logout } from "../../redux/action_creators/user";

import male from "../../assets/icons/male.svg";
import female from "../../assets/icons/female.svg";
import styles from "../../scss/components/_profile.module.scss";

const Profile = () => {
  const dispatch = useDispatch();

  const [opennedEditor, setOpennedEditor] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const preloader = useSelector((state) => state.appReducer.loading);

  const logoutFromAccout = () => dispatch(logout());
  const deleteUser = () => {
    const confirmation = confirm(
      "Вы уверены, что хотите удалить аккаунт? Это действие нельзя отменить."
    );
    if (confirmation) {
      dispatch(deleteProfile(user));
      alert("Аккаунт удален.");
      return;
    }
  };

  if (opennedEditor) {
    return <Register actionName="edit" data={user} />;
  }

  return (
    <div>
      {preloader ? (
        <Preloader />
      ) : (
        <div className={styles.container}>
          <div className={styles.photo}>
            <img
              className={styles.avatar}
              src={user.sex === "male" ? male : female}
              alt="avatar"
            />
            <h3>{user.name}</h3>
          </div>
          <div className={styles.options}>
            <button
              type="button"
              onClick={() => setOpennedEditor((prevState) => !prevState)}
            >
              Редактировать профиль
            </button>
            <button type="button" onClick={logoutFromAccout}>
              Выйти
            </button>
            <button
              type="button"
              onClick={deleteUser}
              className={styles.deleteBtn}
            >
              Удалить аккаунт
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
