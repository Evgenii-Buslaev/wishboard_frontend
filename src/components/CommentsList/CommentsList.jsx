import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CommentsList = () => {
  const params = useParams();
  const cards = useSelector((state) => state.cardsReducer.cards);
  const card = useMemo(
    () => cards.find((card) => card._id === params.id), // eslint-disable-next-line
    []
  );

  return (
    <div>
      {card.comments.map((comment) => (
        <div key={Math.random()}>
          <h3>{comment.author}</h3>
          <h4>{comment.comment}</h4>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
