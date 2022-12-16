import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CardForm from "../CardForm/CardForm";
import CommentsList from "../CommentsList/CommentsList";

const Card = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [editing, setEditing] = useState(false);
  const [cardComments, setCardComments] = useState([]);

  const params = useParams();
  const user = useSelector((state) => state.userReducer);
  const cards = useSelector((state) => state.cardsReducer.cards);

  const card = useMemo(
    () => cards.find((card) => card._id === params.id),
    // eslint-disable-next-line
    []
  );
  const { author, title, text, createdAt, comments } = card;

  useEffect(() => {
    setLoggedIn(user.loggedIn);
    setCardComments(comments);
  }, [user.loggedIn, comments]);

  const toggleEdit = () => {
    setEditing((prevState) => !prevState);
  };

  if (!loggedIn) {
    return (
      <>
        <h2>{title}</h2>
        <h5>{author}</h5>
        <p>{text}</p>
        <h6>{createdAt}</h6>
      </>
    );
  }

  return (
    <div>
      <>
        {editing ? (
          <CardForm action="edit" />
        ) : (
          <>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>{text}</p>
            <h6>{createdAt}</h6>
          </>
        )}
        {user.user.name === author ? (
          <button onClick={toggleEdit}>Редактировать</button>
        ) : null}
        <CommentsList
          card={card}
          list={cardComments}
          setList={setCardComments}
          auth={user.loggedIn}
          user={user.user}
        />
      </>
    </div>
  );
};

export default Card;
