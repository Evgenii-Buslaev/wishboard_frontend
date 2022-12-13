import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/action_creators/user";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{`Здравствуйте, ${user.name}`}</h3>
      <button type="button" onClick={() => dispatch(logout())}>
        Выйти
      </button>
    </div>
  );
};

export default Profile;
