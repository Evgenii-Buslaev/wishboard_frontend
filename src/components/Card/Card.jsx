import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../../scss/components/_cards.module.scss";

import CardItem from "../CardItem/CardItem";
import CardForm from "../CardForm/CardForm";

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
    <div className={styles.cards}>
      {editing ? (
        <CardForm action="edit" />
      ) : (
        <CardItem user={user} data={card} />
      )}
      {loggedIn && user.user.name === card.author ? (
        <button onClick={toggleEdit} className={styles.edit}>
          {editing ? "Отменить редактирование" : "Редактировать"}
        </button>
      ) : null}
    </div>
  );
};

export default Card;
