import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCard } from "../redux/action_creators/cards";

const useCard = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const author = useSelector((state) => state.userReducer.user.name);

  const newCard = { author, title, text };

  const submit = (e) => {
    e.preventDefault();
    if (title && text) {
      dispatch(createCard(newCard));
      navigator("/cards");
    }
  };

  return {
    title,
    setTitle,
    text,
    setText,
    author,
    newCard,
    submit,
  };
};

export default useCard;
