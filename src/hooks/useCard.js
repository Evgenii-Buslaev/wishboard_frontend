import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { createCard, updateCard } from "../redux/action_creators/cards";

const useCard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const author = useSelector((state) => state.userReducer.user.name);
  const cards = useSelector((state) => state.cardsReducer.cards);

  const memoCard = useMemo(
    () => cards.find((card) => card._id === params.id),
    // eslint-disable-next-line
    []
  );

  const [title, setTitle] = useState(memoCard?.title || "");
  const [text, setText] = useState(memoCard?.text || "");

  let newCard;

  const submit = (e) => {
    e.preventDefault();
    if (title && text) {
      if (!memoCard) {
        newCard = { author, title, text };
        dispatch(createCard(newCard));
      } else {
        newCard = { ...memoCard, author, title, text };
        dispatch(updateCard(newCard));
      }
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
