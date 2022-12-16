import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CardForm from "../CardForm/CardForm";
import CommentForm from "../CommentForm/CommentForm";
import CommentsList from "../CommentsList/CommentsList";

const Card = () => {
  const params = useParams();
  const user = useSelector((state) => state.userReducer.user);
  const cards = useSelector((state) => state.cardsReducer.cards);
  const card = cards.find((card) => card._id === params.id);
  const { author, title, text, createdAt } = card;

  return (
    <div>
      <>
        {user?.name === author ? (
          <CardForm action="edit" />
        ) : (
          <>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>{text}</p>
            <h6>{createdAt}</h6>
          </>
        )}
        <CommentsList />
        <CommentForm />
      </>
    </div>
  );
};

export default Card;
