import useProfile from "../../hooks/useProfile";
import ProfileForm from "../ProfileForm/ProfileForm";

const Register = () => {
  const userData = useProfile("register");

  return <ProfileForm data={userData} />;
};

export default Register;
