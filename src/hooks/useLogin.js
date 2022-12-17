import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginValidate } from "../handlers/loginValidate";
import { login } from "../redux/action_creators/user";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (loginValidate({ name: username, password })) {
      dispatch(login({ name: username, password }));
    } else {
      alert("Заполните все обязательные поля.");
    }
  };

  return { username, setUsername, password, setPassword, submit, navigator };
};

export default useLogin;
