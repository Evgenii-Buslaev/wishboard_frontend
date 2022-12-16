import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CardItem from "../CardItem/CardItem";
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

  useEffect(() => {
    setLoggedIn(user.loggedIn);
    setCardComments(card.comments);
  }, [user.loggedIn, card.comments]);

  const toggleEdit = () => {
    setEditing((prevState) => !prevState);
  };

  return (
    <div>
      {editing ? <CardForm action="edit" /> : <CardItem data={card} />}
      {loggedIn && user.user.name === card.author ? (
        <button onClick={toggleEdit}>Редактировать</button>
      ) : null}
      <CommentsList
        card={card}
        list={cardComments}
        setList={setCardComments}
        auth={user.loggedIn}
        user={user.user}
      />
    </div>
  );
};

export default Card;
