import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateCard } from "../../redux/action_creators/cards";
import { v4 } from "uuid";

import styles from "../../scss/components/_comments.module.scss";

const CommentForm = ({ user, createComment }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const [comment, setComment] = useState("");

  const card = useSelector((state) =>
    state.cardsReducer.cards.find((card) => card._id === params.id)
  );

  const submitComment = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Невозможно оставить пустой комментарий");
      return;
    }

    const editedCard = {
      ...card,
      comments: [
        ...card.comments,
        { commentId: v4(), author: user.name, comment },
      ],
    };
    dispatch(updateCard(editedCard));
    createComment(editedCard.comments);
    setComment("");
  };

  return (
    <form className={styles.form} onSubmit={(e) => submitComment(e)}>
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
