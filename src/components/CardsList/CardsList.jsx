import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CardListItem from "../CardListItem/CardListItem";

const CardsList = () => {
  const cards = useSelector((state) => state.cardsReducer.cards);
  const navigator = useNavigate();

  const openCard = (id) => {
    navigator(`/cards/${id}`);
  };

  return (
    <div>
      {cards.map((card) => (
        <CardListItem data={card} key={Math.random} click={openCard} />
      ))}
    </div>
  );
};

export default CardsList;
