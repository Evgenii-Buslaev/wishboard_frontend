import { useState } from "react";
import { useDispatch } from "react-redux";

import { register } from "../redux/action_creators/user";
import { updateProfile } from "../redux/action_creators/user";

const useProfile = (action, data) => {
  const [name, setName] = useState(data?.name || "");
  const [password, setPassword] = useState(data?.password || "");
  const [age, setAge] = useState(data?.age || "");
  const [sex, setSex] = useState(data?.sex || "not selected");

  const newUser = data
    ? { ...data, name, password, age, sex }
    : { name, password, age, sex };

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    if (action === "register") {
      dispatch(register(newUser));
    } else {
      dispatch(updateProfile(newUser));
    }
  };

  return {
    name,
    password,
    age,
    sex,
    action,
    setName,
    setPassword,
    setAge,
    setSex,
    submit,
  };
};

export default useProfile;
