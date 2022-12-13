import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/action_creators/user";

const useRegister = () => {
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

  return {
    name,
    password,
    age,
    sex,
    setName,
    setPassword,
    setAge,
    setSex,
    submit,
  };
};

export default useRegister;
