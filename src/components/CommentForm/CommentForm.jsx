import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../../redux/action_creators/cards";
import { v4 } from "uuid";

const CommentForm = ({ user, card, createComment }) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const editedCard = {
    ...card,
    comments: [
      ...card.comments,
      { commentId: v4(), author: user.name, comment },
    ],
  };

  const submitComment = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Невозможно оставить пустой комментарий");
      return;
    }
    dispatch(updateCard(editedCard));
    createComment(editedCard.comments);
    setComment("");
  };

  return (
    <form onSubmit={(e) => submitComment(e)}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Оставьте комментарий..."
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default CommentForm;
