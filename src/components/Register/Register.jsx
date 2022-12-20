import { useNavigate } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import ProfileForm from "../ProfileForm/ProfileForm";

import styles from "../../scss/components/_register.module.scss";

const Register = () => {
  const userData = useProfile("register");
  const navigator = useNavigate();

  const closePopup = (e) => {
    if (
      e.target.tagName !== "FORM" &&
      e.target.tagName !== "INPUT" &&
      e.target.tagName !== "BUTTON" &&
      e.target.tagName !== "SELECT"
    )
      navigator("/");
  };

  return (
    <div className={styles.register} onClick={(e) => closePopup(e)}>
      <ProfileForm data={userData} />
    </div>
  );
};

export default Register;
