import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../../redux/action_creators/cards";
import { v4 } from "uuid";

const CommentForm = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const cards = useSelector((state) => state.cardsReducer.cards);
  const card = useMemo(
    () => cards.find((card) => card._id === params.id), // eslint-disable-next-line
    []
  );
  const user = useSelector((state) => state.userReducer.user);

  const editedCard = user
    ? {
        ...card,
        comments: [
          ...card.comments,
          { commentId: v4(), author: user.name, comment },
        ],
      }
    : null;

  const submitComment = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Невозможно оставить пустой комментарий");
      return;
    }
    dispatch(updateCard(editedCard));
    setComment("");
  };

  return (
    <>
      {user ? (
        <form onSubmit={(e) => submitComment(e)}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Оставьте комментарий..."
          />
          <button type="submit">Добавить</button>
        </form>
      ) : null}
    </>
  );
};

export default CommentForm;
