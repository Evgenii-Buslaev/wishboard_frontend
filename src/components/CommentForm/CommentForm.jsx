import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../../redux/action_creators/cards";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const params = useParams();
  const dispatch = useDispatch();

  const card = useSelector((state) =>
    state.cardsReducer.cards.find((card) => card._id === params.id)
  );
  const user = useSelector((state) => state.userReducer.user);

  console.log(card);
  console.log(user);

  /*   const editedCard = { ...card, comments: [...card?.comments, comment] }; */

  /*   const submitComment = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Невозможно оставить пустой комментарий");
      return;
    }
    dispatch(updateCard(editedCard));
  }; */

  return (
    <>
      {user ? (
        <form>
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
