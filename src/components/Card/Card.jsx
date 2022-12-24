import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../../redux/action_creators/cards";
import styles from "../../scss/components/_cards.module.scss";

import CardItem from "../CardItem/CardItem";
import CardForm from "../CardForm/CardForm";

const Card = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [editing, setEditing] = useState(false);
  const [cardComments, setCardComments] = useState([]);

  const params = useParams();
  const user = useSelector((state) => state.userReducer);
  const cards = useSelector((state) => state.cardsReducer.cards);

  const card = cards.find((card) => card._id === params.id);

  if (!card) {
    return;
  }

  useEffect(() => {
    setLoggedIn(user.loggedIn);
    setCardComments(card.comments);
  }, [user.loggedIn, card.comments]);

  const toggleEdit = () => {
    setEditing((prevState) => !prevState);
  };

  const removeCard = () => {
    dispatch(deleteCard(card));
    navigator("/cards");
  };

  return (
    <div className={styles.cards}>
      {editing ? (
        <CardForm action="edit" />
      ) : (
        <CardItem user={user} data={card} />
      )}
      {loggedIn && user.user.name === card.author ? (
        <div className={styles.options}>
          <button onClick={toggleEdit} className={styles.btn}>
            {editing ? "Отменить редактирование" : "Редактировать"}
          </button>
          <button className={styles.btn} onClick={() => removeCard()}>
            Удалить
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
